import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const NewsPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id ? parseInt(params.id, 10) : NaN;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Post not found</h2>
            <p className="text-muted-foreground mb-6">We couldn't find the story you're looking for.</p>
            <Button variant="hero" onClick={() => navigate("/news")}>Back to News</Button>
          </div>
        </section>
      </Layout>
    );
  }

  const moreStories = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <Layout>
      {/* Post header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-card mb-8">
              <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
            </div>

            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                  <Tag className="w-3 h-3 inline-block mr-1" />
                  {post.category}
                </span>
              </div>
              <div>
                <Button variant="hero" onClick={() => navigate("/news")}>Back to News</Button>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>

            <article className="prose prose-lg max-w-none text-foreground">
              <p>{post.content}</p>
              {/* If you have richer content, render it here. */}
            </article>
          </div>
        </div>
      </section>

      {/* More stories */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6">More Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {moreStories.map((s) => (
                <div key={s.id} className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow group">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground">{s.date}</span>
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">{s.category}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{s.excerpt}</p>
                    <Link to={`/news/${s.id}`}>
                      <Button variant="ghost" className="px-0 text-primary">
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPost;