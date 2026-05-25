import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Heart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsPosts, events } from "@/data/publications";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  
  // Get latest 3 items for each type
  const latestNews = newsPosts.slice(0, 3);
  const latestEvents = events.slice(0, 3);
  
  // Get current items based on active tab
  const getCurrentItems = () => {
    return activeTab === "news" ? latestNews : latestEvents;
  };

  const currentItems = getCurrentItems();

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
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "news"
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
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "events"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-foreground/70 hover:bg-secondary border border-border"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Upcoming Events
          </motion.button>
        </motion.div>

        {/* Content Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentItems.map((item, index) => (
              <motion.article
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
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
                      {item.date}
                    </span>
                    {activeTab === "events" && 'location' in item && item.location && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {typeof item.location === 'string' ? item.location.substring(0, 20) : item.location}
                      </span>
                    )}
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      activeTab === "news" 
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
            ))}
          </motion.div>
        </AnimatePresence>

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