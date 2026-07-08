import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar, Tag, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { client, urlFor } from "@/lib/sanity/client";

// Import hero images for slideshow
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];
const PAGE_SIZE = 6;

interface SanityNewsPost {
  id: string;
  title: string;
  description: string;
  date: string;
  image: any;
  category: string;
}

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allPosts, setAllPosts] = useState<SanityNewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Fetch news posts from Sanity CMS (ordered by date desc — latest first)
  useEffect(() => {
    client
      .fetch(
        `*[_type == "news"] | order(date desc) {
          "id": _id,
          title,
          description,
          date,
          image,
          category
        }`
      )
      .then((data) => {
        setAllPosts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  // The most recently published post is automatically the featured one
  const featuredPost = allPosts.length > 0 ? allPosts[0] : null;
  // All remaining posts go into the paginated grid
  const gridPosts = allPosts.slice(1);
  const totalPages = Math.ceil(gridPosts.length / PAGE_SIZE);
  const pagedPosts = gridPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to the grid section
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // Safe image URL resolver
  const getImageUrl = (imageSource: any) => {
    if (!imageSource) return "/placeholder.svg";
    try {
      return urlFor(imageSource).url() || "/placeholder.svg";
    } catch (error) {
      console.error("Error generating image URL", error);
      return "/placeholder.svg";
    }
  };

  // Human friendly Date formatter
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <Layout>
      {/* Hero Section with Slideshow */}
      <motion.section
        className="relative min-h-[400px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">News</span>
            </div>
            <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
              News & <span className="text-primary">Updates</span>
            </h1>
            <p className="text-white/75 text-xl max-w-xl">
              Stay connected with the latest stories and updates from our community.
            </p>
          </motion.div>
        </div>

        {/* Slideshow indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${index === currentImageIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-secondary/10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground animate-pulse">Loading latest news...</p>
        </div>
      ) : (
        <>
          {/* Featured Post — latest published news */}
          {featuredPost && (
            <section className="py-16">
              <div className="container mx-auto px-4">
                <motion.div
                  className="grid lg:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/news/${featuredPost.id}`}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden block"
                  >
                    <motion.img
                      src={getImageUrl(featuredPost.image)}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Latest
                    </span>
                  </Link>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        <Tag className="w-3 h-3" />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                      {featuredPost.description}
                    </p>
                    <Link to={`/news/${featuredPost.id}`}>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                        Read Full Story →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* News Grid with Pagination */}
          <section className="py-16 bg-secondary/30" ref={gridRef}>
            <div className="container mx-auto px-4">
              {/* Section header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground">All News</h2>
                {totalPages > 1 && (
                  <p className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              {allPosts.length === 0 && (
                <p className="text-center text-muted-foreground py-12">
                  No news posts found. Visit Sanity Studio to add news articles.
                </p>
              )}

              {/* Animated grid — re-mounts on page change to trigger entrance animation */}
              {pagedPosts.length > 0 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                  >
                    {pagedPosts.map((post) => (
                      <motion.article
                        key={post.id}
                        className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                      >
                        <Link to={`/news/${post.id}`} className="block">
                          <div className="aspect-[16/10] overflow-hidden">
                            <motion.img
                              src={getImageUrl(post.image)}
                              alt={post.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.date)}
                              </span>
                              <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                              {post.description}
                            </p>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {/* Prev button */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>

                  {/* Page number buttons */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold border transition-all duration-200 ${page === currentPage
                          ? "bg-primary text-primary-foreground border-primary shadow-md scale-110"
                          : "bg-card text-foreground border-border hover:bg-primary/10 hover:border-primary/40"
                        }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next button */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Next page"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Scripture Verse */}
      <motion.section
        className="py-16 bg-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          </motion.div>
          <p className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto">
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
          </p>
          <p className="text-md text-primary mt-3">— Isaiah 58:12</p>
        </div>
      </motion.section>
    </Layout>
  );
};

export default News;