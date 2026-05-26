"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag, Heart, MapPin, Clock } from "lucide-react";
import { events } from "@/data/publications";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

// Import hero images for slideshow
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";
;

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all events (no filtering)
  const allEvents = events;
  const featuredEvent = allEvents.find((event) => event.featured);
  const regularEvents = allEvents.filter((event) => !event.featured);

  // Slideshow effect
  useState(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
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
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">Events</span>
            </div>
            <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-white/75 text-xl max-w-xl">
              Join us in our mission through these upcoming events and opportunities.
            </p>
          </motion.div>
        </div>

        {/* Slideshow indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentImageIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <motion.img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Featured Event
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {featuredEvent.date}
                  </span>
                  {featuredEvent.location && (
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {featuredEvent.location}
                    </span>
                  )}
                  {featuredEvent.time && (
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {featuredEvent.time}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {featuredEvent.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredEvent.excerpt}
                </p>
                <Link to={`/events/${featuredEvent.id}`}>
                  <Button variant="hero">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
            Upcoming Events
          </h2>

          {regularEvents.length === 0 && (
            <p className="text-center text-muted-foreground">
              No events found.
            </p>
          )}

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {regularEvents.map((event) => (
              <motion.article
                key={event.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                    {event.location && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {typeof event.location === 'string' ? event.location.substring(0, 20) : event.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {event.excerpt}
                  </p>
                  <Link to={`/events/${event.id}`}>
                    <Button variant="hero" size="sm">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

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

export default Events;