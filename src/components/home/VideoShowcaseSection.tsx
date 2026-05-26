import { motion } from "framer-motion";
import { Play, Heart } from "lucide-react";

const VideoShowcaseSection = () => {
  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`;
  };

  const videoUrl = "https://youtu.be/z80TfW6Uq9g";
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section className="py-20 bg-gradient-hero">
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
            <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">See Our Work</span>
            <div className="w-8 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Work in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how ARBI is transforming lives and rebuilding communities across North Kivu, DRC.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Video Thumbnail with Play Button Overlay */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={embedUrl}
                title="ARBI - Africa Restoring Bridges Initiative - Peace Message"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Video Description */}
          <motion.div 
            className="text-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              This peace message reflects our commitment to healing, reconciliation, 
              and rebuilding bridges within and between communities in the DRC.
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Heart className="w-4 h-4 text-primary fill-primary/20" />
              <span className="text-sm text-primary">A message of hope and restoration</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;