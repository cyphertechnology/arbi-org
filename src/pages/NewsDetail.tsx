import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { client, urlFor } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";

interface SanityNewsPost {
    id: string;
    title: string;
    description: string;
    date: string;
    image: any;
    category: string;
}

const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });
    } catch {
        return dateStr;
    }
};

const getImageUrl = (imageSource: any) => {
    if (!imageSource) return "/placeholder.svg";
    try {
        return urlFor(imageSource).url() || "/placeholder.svg";
    } catch {
        return "/placeholder.svg";
    }
};

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<SanityNewsPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<SanityNewsPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setNotFound(false);

        // Fetch the specific post + other posts in one go
        client
            .fetch(
                `{
          "post": *[_type == "news" && _id == $id][0] {
            "id": _id,
            title,
            description,
            date,
            image,
            category
          },
          "related": *[_type == "news" && _id != $id] | order(date desc) [0..5] {
            "id": _id,
            title,
            description,
            date,
            image,
            category
          }
        }`,
                { id }
            )
            .then(({ post, related }) => {
                if (!post) {
                    setNotFound(true);
                } else {
                    setPost(post);
                    setRelatedPosts(related || []);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching news post:", err);
                setLoading(false);
                setNotFound(true);
            });
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    <p className="mt-4 text-muted-foreground animate-pulse">Loading article...</p>
                </div>
            </Layout>
        );
    }

    if (notFound || !post) {
        return (
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
                    <p className="text-muted-foreground mb-6">This news article could not be found.</p>
                    <Link to="/news">
                        <Button variant="hero">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
                        </Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Banner */}
            <motion.section
                className="relative h-[420px] md:h-[520px] flex items-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className="absolute inset-0">
                    <img
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                </div>
                <div className="relative container mx-auto px-4 pb-12">
                    <Link
                        to="/news"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to News
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            <Tag className="w-3 h-3" /> {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-white/70 text-sm">
                            <Calendar className="w-4 h-4" /> {formatDate(post.date)}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
                        {post.title}
                    </h1>
                </div>
            </motion.section>

            {/* Article Body */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
                            {post.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* More News */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-serif font-bold text-foreground mb-8">More News</h2>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {relatedPosts.map((related) => (
                                <motion.article
                                    key={related.id}
                                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group cursor-pointer"
                                    variants={itemVariants}
                                    whileHover={{ y: -6 }}
                                >
                                    <Link to={`/news/${related.id}`} className="block">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <motion.img
                                                src={getImageUrl(related.image)}
                                                alt={related.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.08 }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {formatDate(related.date)}
                                                </span>
                                                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">
                                                    {related.category}
                                                </span>
                                            </div>
                                            <h3 className="font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {related.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </motion.div>

                        <div className="text-center mt-10">
                            <Link to="/news">
                                <Button variant="hero">
                                    View All News <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
};

export default NewsDetail;
