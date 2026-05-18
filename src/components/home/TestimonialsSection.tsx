import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
const testimonials = [
  {
    quote:
      "arbi org has truly transformed our lives in ways we never imagined. Before their support, my children struggled to attend school due to lack of proper uniforms, books, and essential learning materials. Today, they attend school confidently and are excited to learn, knowing that their basic needs are fully met. We are endlessly grateful for the generosity and dedication of the arbi team, who continue to support our family and countless others in our community.",
    author: "Sarah Nakato",
    role: "Parent & Beneficiary",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Volunteering with arbi has been one of the most enriching and life-changing experiences of my life. Every day, I witness the joy and hope that our efforts bring to children and families who face incredible challenges. Being part of a team that works tirelessly to uplift communities, provide education, and support basic needs has deepened my understanding of compassion and humanity. The smiles, laughter, and gratitude of those we serve make every hour of effort completely worthwhile and inspiring.",
    author: "James Mugisha",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The blood donation program organized by arbi org was nothing short of a miracle for my family. During a sudden medical emergency, my daughter urgently needed blood, and thanks to arbi's well-coordinated drive, she received the life-saving support she needed in time. The care, dedication, and professionalism of the arbi team went beyond our expectations. Their continuous commitment to saving lives and educating the community about health awareness makes a profound difference every day.",
    author: "Grace Achieng",
    role: "Community Member",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Being part of the arbi org mentorship program has been an incredible journey that completely changed my outlook on life. Before joining, I struggled with self-doubt and lacked the guidance to pursue higher education. Through the mentorship sessions, workshops, and personal support, I gained the confidence, skills, and motivation to aim higher. Today, I am proud to be the first in my family to attend university, and I credit the mentors and programs at arbi for giving me the tools and belief to achieve this milestone.",
    author: "David Ssemakula",
    role: "Program Beneficiary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
];


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Stories of Hope
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the families and volunteers whose lives have been touched by our work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-serif italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
