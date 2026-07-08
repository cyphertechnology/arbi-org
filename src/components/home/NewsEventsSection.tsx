import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { client, urlFor } from "@/lib/sanity/client";

interface SanityNewsPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: any;
  category: string;
}

interface SanityEvent {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  location?: string;
  image: any;
  category: string;
}

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  const [news, setNews] = useState<SanityNewsPost[]>([]);
  const [events, setEvents] = useState<SanityEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.fetch(
        `*[_type == "news"] | order(date desc)[0...3] {
          "id": _id,
          title,
          excerpt,
          date,
          image,
          category
        }`
      ),
      client.fetch(
        `*[_type == "event"] | order(_createdAt desc)[0...3] {
          "id": _id,
          title,
          excerpt,
          date,
          location,
          image,
          category
        }`
      )
    ])
      .then(([newsData, eventsData]) => {
        setNews(newsData || []);
        setEvents(eventsData || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching homepage news/events:", err);
        setLoading(false);
      });
  }, []);

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

  // Safe Date formatter
  const formatDate = (dateStr: string, isNews: boolean) => {
    if (!dateStr) return "";
    if (!isNews) return dateStr;
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      });
    } catch (e) {
      return dateStr;
    }
  };

  const currentItems = activeTab === "news" ? news : events;

  // Animation variants for tab content
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Stay Updated</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            News & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with the latest stories and upcoming events from our community.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "news"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-foreground/70 hover:bg-secondary border border-border"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Latest News
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "events"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-foreground/70 hover:bg-secondary border border-border"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upcoming Events
          </motion.button>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground animate-pulse">Loading updates...</p>
          </div>
        ) : (
          /* Content Grid with Animation */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentItems.length === 0 ? (
                <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
                  No {activeTab === "news" ? "news" : "events"} found. Visit Sanity Studio to add content.
                </div>
              ) : (
                currentItems.map((item) => (
                  <motion.article
                    key={item.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(item.date, activeTab === "news")}
                        </span>
                        {activeTab === "events" && 'location' in item && item.location && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location.substring(0, 20)}
                          </span>
                        )}
                        <span className={`px-2 py-0.5 text-xs rounded-full ${activeTab === "news"
                            ? "bg-primary/10 text-primary"
                            : "bg-teal/10 text-teal"
                          }`}>
                          {activeTab === "news" ? "News" : "Event"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>

                      {/* Read More Link */}
                      <Link
                        to={activeTab === "news" ? `/news/${item.id}` : `/events/${item.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all duration-300"
                      >
                        {activeTab === "news" ? "Read More" : "Learn More"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* View All Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to={activeTab === "news" ? "/news" : "/events"}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="gap-2">
                View All {activeTab === "news" ? "News" : "Events"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEventsSection;