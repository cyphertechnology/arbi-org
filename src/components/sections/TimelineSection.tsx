import { motion } from "framer-motion";

const TimelineSection = () => {
  return (
    <section 
      id="timeline" 
      className="relative w-full bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#030712] dark:via-[#070e20] dark:to-[#030712] text-slate-900 dark:text-white py-24 overflow-hidden scroll-mt-20 select-none"
    >
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flag-wave {
          0%, 100% { transform: rotate(0deg) skewY(0deg); }
          50% { transform: rotate(5deg) skewY(-5deg) scaleY(0.96); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 12px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 22px rgba(59, 130, 246, 0.8), 0 0 35px rgba(59, 130, 246, 0.6); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
        .animate-flag {
          animation: flag-wave 3.5s ease-in-out infinite;
          transform-origin: left bottom;
        }
        .animate-glow-pulse {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: star-twinkle 3s ease-in-out infinite;
        }
      `}} />

      {/* Header Container */}
      <div className="container mx-auto px-4 relative z-10 text-center mb-16 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-5 tracking-wide">
            Our Journey of Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Since our founding in 2011, we have worked consistently to promote healing, reconciliation, 
            and sustainable peace within communities in eastern Democratic Republic of the Congo.
          </p>
        </motion.div>
      </div>

      {/* Desktop Visual Layout (Hidden on Mobile) */}
      <div className="relative w-full max-w-7xl mx-auto aspect-[1200/600] h-[550px] lg:h-[650px] hidden md:block">
        
        {/* Background Landscape SVG */}
        <svg 
          viewBox="0 0 1200 600" 
          fill="none" 
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradients (Dark) */}
            <radialGradient id="peakBlueGlow" cx="890" cy="170" r="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
            
            <radialGradient id="peakWarmGlow" cx="890" cy="170" r="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="mountainGradBack" x1="0" y1="200" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B132B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="mountainGradFront" x1="0" y1="200" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#081024" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#030712" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="roadGradient" x1="0" y1="600" x2="1200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Gradients (Light) */}
            <radialGradient id="peakBlueGlowLight" cx="890" cy="170" r="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="mountainGradBackLight" x1="0" y1="200" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="mountainGradFrontLight" x1="0" y1="200" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="roadGradientLight" x1="0" y1="600" x2="1200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Pattern for dots */}
            <pattern id="gridDotsPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#3b82f6" opacity="0.15" />
            </pattern>
            <pattern id="gridDotsPatternLight" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#3b82f6" opacity="0.1" />
            </pattern>
          </defs>

          {/* Stars (Hidden in Light Mode) */}
          <circle cx="120" cy="60" r="1" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "0.2s" }} />
          <circle cx="280" cy="110" r="1.5" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "1.4s" }} />
          <circle cx="450" cy="70" r="1" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "2.3s" }} />
          <circle cx="670" cy="120" r="1.5" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "0.9s" }} />
          <circle cx="810" cy="60" r="1" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "1.8s" }} />
          <circle cx="1020" cy="100" r="1" fill="#fff" className="hidden dark:block animate-twinkle" style={{ animationDelay: "2.8s" }} />

          {/* Dot grids */}
          <rect x="20" y="380" width="96" height="200" className="fill-[url(#gridDotsPatternLight)] dark:fill-[url(#gridDotsPattern)]" />
          <rect x="1080" y="220" width="96" height="260" className="fill-[url(#gridDotsPatternLight)] dark:fill-[url(#gridDotsPattern)]" />

          {/* Glowing peak lights */}
          <circle cx="890" cy="170" r="400" className="fill-[url(#peakBlueGlowLight)] dark:fill-[url(#peakBlueGlow)]" />
          <circle cx="890" cy="170" r="150" className="hidden dark:block fill-[url(#peakWarmGlow)]" />

          {/* Flying birds */}
          <g opacity="0.4">
            {/* Bird 1 */}
            <path d="M 760 140 Q 764 135 768 140 Q 772 135 776 140 Q 768 144 760 140 Z" className="fill-slate-600 dark:fill-slate-400" />
            {/* Bird 2 */}
            <path d="M 800 160 Q 803 156 807 160 Q 811 156 815 160 Q 807 164 800 160 Z" className="fill-slate-600 dark:fill-slate-400" transform="scale(0.8) translate(100, 30)" />
            {/* Bird 3 */}
            <path d="M 830 120 Q 833 116 837 120 Q 841 116 845 120 Q 837 124 830 120 Z" className="fill-slate-600 dark:fill-slate-400" transform="scale(0.7) translate(220, 40)" />
          </g>

          {/* Background mountain range */}
          <path 
            d="M -50 600 C 150 450, 300 400, 500 400 C 650 400, 750 300, 890 170 C 980 270, 1100 420, 1250 600 Z" 
            className="fill-[url(#mountainGradBackLight)] dark:fill-[url(#mountainGradBack)]" 
          />

          {/* Foreground mountain range */}
          <path 
            d="M 150 600 C 350 480, 500 440, 680 430 C 780 410, 830 300, 890 170 C 950 280, 1050 450, 1250 600 Z" 
            className="fill-[url(#mountainGradFrontLight)] dark:fill-[url(#mountainGradFront)]" 
          />

          {/* Winding Road with Tapering (Perspective Effect) */}
          <path 
            d="M 10,600 C 160,600 275,525 425,525 C 555,525 665,435 605,385 C 545,335 712,282 792,242 C 832,222 872,172 887,170 L 893,170 C 878,172 848,222 808,242 C 728,282 575,335 635,385 C 695,435 585,535 475,535 C 325,535 240,600 90,600 Z" 
            className="fill-[url(#roadGradientLight)] dark:fill-[url(#roadGradient)]" 
            opacity="0.95"
          />

          {/* Road Center Dotted Line - 3 segments for scaling dashes */}
          {/* Segment 1 (Close) */}
          <path 
            d="M 50,600 C 200,600 282,530 450,530" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="2.5" 
            strokeDasharray="12, 12" 
            opacity="0.8"
          />
          {/* Segment 2 (Mid) */}
          <path 
            d="M 450,530 C 570,530 680,435 620,385" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="1.5" 
            strokeDasharray="8, 8" 
            opacity="0.75"
          />
          {/* Segment 3 (Far) */}
          <path 
            d="M 620,385 C 560,335 720,282 800,242 C 840,222 875,172 890,170" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="1" 
            strokeDasharray="4, 5" 
            opacity="0.7"
          />

          {/* Acacia tree silhouette (bottom left, tall and elegant) */}
          <g transform="translate(40, 340) scale(1.9)" opacity="0.95">
            {/* Trunk */}
            <path d="M 28 80 C 29 65 31 50 30 35 C 24 30 16 30 12 28 C 16 24 24 24 30 28 C 30 18 24 12 20 8 C 25 8 30 13 32 20 C 34 10 30 2 26 -4 C 30 -2 34 5 35 11 C 37 2 39 -4 41 -10 C 42 -4 40 5 38 11 C 41 14 45 16 49 16 C 45 19 41 18 38 16 C 37 26 39 32 41 38 C 38 35 36 32 34 29 C 33 42 35 55 36 65 C 37 72 38 75 39 78 C 40 80 41 80 41 80 Z" className="fill-slate-800 dark:fill-[#03060d]" />
            {/* Foliage elements */}
            <ellipse cx="10" cy="26" rx="14" ry="4" className="fill-slate-800 dark:fill-[#03060d]" />
            <ellipse cx="20" cy="5" rx="16" ry="5" className="fill-slate-800 dark:fill-[#03060d]" />
            <ellipse cx="30" cy="-5" rx="18" ry="5" className="fill-slate-800 dark:fill-[#03060d]" />
            <ellipse cx="40" cy="9" rx="15" ry="4" className="fill-slate-800 dark:fill-[#03060d]" />
            <ellipse cx="48" cy="15" rx="12" ry="4" className="fill-slate-800 dark:fill-[#03060d]" />
          </g>
        </svg>

        {/* Flag Pole and Animated Waving Dove Flag */}
        <div 
          className="absolute" 
          style={{ left: "74.15%", top: "38.3%" }}
        >
          {/* Glowing dot at peak where flag is */}
          <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full blur-[2px] animate-pulse" />
        </div>

        {/* The Flagpole */}
        <div 
          className="absolute w-0.5 bg-gradient-to-t from-slate-400 to-slate-600 dark:from-slate-500 dark:to-white/90 shadow-glow" 
          style={{ left: "74.15%", top: "22%", height: "108px" }}
        />

        {/* Glowing light at top of flagpole */}
        <div 
          className="absolute w-2 h-2 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:bg-white rounded-full blur-[1px] dark:shadow-[0_0_12px_#fff]" 
          style={{ left: "74%", top: "21.5%" }}
        />

        {/* Waving Flag of Peace */}
        <motion.div 
          className="absolute animate-flag flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400/40 rounded-sm shadow-[0_4px_12px_rgba(37,99,235,0.4)]"
          style={{ 
            left: "74.25%", 
            top: "22.2%", 
            width: "52px", 
            height: "34px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Peace Dove Icon inside Flag */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
            <path d="M22 2L15 5C13 6 12 8 11 10C9.5 9 7.5 8.5 6 9C5 9.2 4 10 4.5 11C5.5 13 8 13.5 9.5 13C8 14.5 6 17 4 18C3.5 18.2 3.5 19 4 19C6 19 9.5 17.5 11 15C11 16 11.5 17 12 18C12.5 19 13.5 19 13.5 18C13 16 12.5 14 13.5 12.5C15 13.5 17.5 14 19 13C19.5 12.7 19.5 12 19 11.8C17 11 15 10 14 8C15 7 18 6 22 2Z" />
          </svg>
        </motion.div>

        {/* Timeline Pins & Contents */}

        {/* Pin 1: 2009 */}
        {/* Pin base dot */}
        <div 
          className="absolute w-5 h-5 flex items-center justify-center pointer-events-none"
          style={{ left: "18.3%", top: "94.1%", transform: "translate(-50%, -50%)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          <div className="absolute w-4 h-4 rounded-full bg-blue-500/30 animate-ping" />
        </div>

        {/* Pin vertical line */}
        <div 
          className="absolute w-[1.5px] bg-gradient-to-t from-blue-600/20 to-blue-600 dark:from-blue-500/20 dark:to-blue-500"
          style={{ left: "18.3%", top: "58.3%", height: "35.8%" }}
        />

        {/* Badge and Text block */}
        <motion.div 
          className="absolute flex items-start gap-4"
          style={{ left: "12%", top: "42%", width: "320px" }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Badge "09" */}
          <motion.div 
            className="w-14 h-14 rounded-full bg-blue-600 border-[3px] border-slate-50 dark:border-[#030712] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] flex-shrink-0 z-20 cursor-pointer animate-glow-pulse"
            whileHover={{ scale: 1.15 }}
          >
            09
          </motion.div>

          {/* Detail card */}
          <div className="pt-1">
            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 font-sans mb-1">2009</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
              After fifteen years, Théophile returned to Masisi on an exploratory mission to gain a deeper understanding of the realities on the ground.
            </p>
          </div>
        </motion.div>

        {/* Pin 2: 2011 */}
        {/* Pin base dot */}
        <div 
          className="absolute w-5 h-5 flex items-center justify-center pointer-events-none"
          style={{ left: "43.3%", top: "83.3%", transform: "translate(-50%, -50%)" }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          <div className="absolute w-4 h-4 rounded-full bg-blue-500/30 animate-ping" />
        </div>

        {/* Pin vertical line */}
        <div 
          className="absolute w-[1.5px] bg-gradient-to-t from-blue-600/20 to-blue-600 dark:from-blue-500/20 dark:to-blue-500"
          style={{ left: "43.3%", top: "46.6%", height: "36.7%" }}
        />

        {/* Badge and Text block */}
        <motion.div 
          className="absolute flex items-start gap-4"
          style={{ left: "37%", top: "30%", width: "320px" }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Badge "11" */}
          <motion.div 
            className="w-14 h-14 rounded-full bg-blue-600 border-[3px] border-slate-50 dark:border-[#030712] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] flex-shrink-0 z-20 cursor-pointer animate-glow-pulse"
            whileHover={{ scale: 1.15 }}
          >
            11
          </motion.div>

          {/* Detail card */}
          <div className="pt-1">
            <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 font-sans mb-1">2011</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
              ARBI was founded to promote healing, reconciliation, and sustainable peace within communities in eastern Democratic Republic of the Congo.
            </p>
          </div>
        </motion.div>

        {/* Vision Statement Quote Card */}
        <motion.div
          className="absolute bg-white/80 dark:bg-[#0b132b]/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20"
          style={{ 
            right: "6%", 
            top: "43%", 
            width: "350px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
        >
          {/* Sprout Icon */}
          <div className="flex justify-center mb-5">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-full border border-blue-200 dark:border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12C16 12 19 10 19 6C15 6 12 9 12 12Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15C8 15 5 13 5 9C9 9 12 12 12 15Z" />
              </svg>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-200 italic font-light text-center leading-relaxed text-sm lg:text-base">
            "To envision healed, reconciled, and thriving communities living in peace across the Democratic Republic of the Congo and other violence-affected regions of Africa"
          </p>
        </motion.div>

      </div>

      {/* Mobile Responsive Layout (Show only on Mobile/Tablet) */}
      <div className="relative container mx-auto px-6 md:hidden">
        
        {/* Central Vertical Connector Line */}
        <div className="absolute left-[35px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-800" />

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          
          {/* Milestone 1 (2009) */}
          <motion.div 
            className="flex gap-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Circle badge */}
            <div className="w-12 h-12 rounded-full bg-blue-600 border-[3px] border-slate-50 dark:border-[#030712] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(37,99,235,0.4)] flex-shrink-0 z-10 animate-glow-pulse">
              09
            </div>
            
            {/* Content card */}
            <div className="flex-1 bg-white/80 dark:bg-[#0b132b]/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 backdrop-blur-sm shadow-xl">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg block mb-1">2009</span>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                After fifteen years, Théophile returned to Masisi on an exploratory mission to gain a deeper understanding of the realities on the ground.
              </p>
            </div>
          </motion.div>

          {/* Milestone 2 (2011) */}
          <motion.div 
            className="flex gap-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Circle badge */}
            <div className="w-12 h-12 rounded-full bg-blue-600 border-[3px] border-slate-50 dark:border-[#030712] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(37,99,235,0.4)] flex-shrink-0 z-10 animate-glow-pulse">
              11
            </div>
            
            {/* Content card */}
            <div className="flex-1 bg-white/80 dark:bg-[#0b132b]/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 backdrop-blur-sm shadow-xl">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg block mb-1">2011</span>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                ARBI was founded to promote healing, reconciliation, and sustainable peace within communities in eastern Democratic Republic of the Congo.
              </p>
            </div>
          </motion.div>

          {/* Peak / Flag for Mobile (Horizontal card) */}
          <motion.div
            className="flex items-center gap-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Flag emblem on the line */}
            <div className="w-12 h-12 rounded-full bg-blue-900/60 dark:bg-blue-900/40 border-[3px] border-slate-50 dark:border-[#030712] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                <path d="M22 2L15 5C13 6 12 8 11 10C9.5 9 7.5 8.5 6 9C5 9.2 4 10 4.5 11C5.5 13 8 13.5 9.5 13C8 14.5 6 17 4 18C3.5 18.2 3.5 19 4 19C6 19 9.5 17.5 11 15C11 16 11.5 17 12 18C12.5 19 13.5 19 13.5 18C13 16 12.5 14 13.5 12.5C15 13.5 17.5 14 19 13C19.5 12.7 19.5 12 19 11.8C17 11 15 10 14 8C15 7 18 6 22 2Z" />
              </svg>
            </div>
            
            <div className="flex-1 text-slate-500 dark:text-slate-400 text-xs tracking-wider uppercase">
              Peak of the Journey
            </div>
          </motion.div>

          {/* Vision Statement Quote Card for Mobile */}
          <motion.div
            className="bg-white/80 dark:bg-[#0b132b]/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Sprout Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-200 dark:border-blue-500/10">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12C16 12 19 10 19 6C15 6 12 9 12 12Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15C8 15 5 13 5 9C9 9 12 12 12 15Z" />
                </svg>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 italic font-light text-center leading-relaxed text-sm">
              "To envision healed, reconciled, and thriving communities living in peace across the Democratic Republic of the Congo and other violence-affected regions of Africa"
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;