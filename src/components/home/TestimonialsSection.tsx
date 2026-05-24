// TestimonialsSection.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ARBI's healing and peace-building program transformed our community. The mental health and psychosocial support we received helped us process trauma and begin the journey of reconciliation. Today, we work together across former divides to rebuild our village.",
    author: "Marie Uwimana",
    role: "Community Leader, Masisi",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The leadership development training equipped me with skills to serve my community with integrity. I've learned to promote unity, create economic opportunities, and fight corruption. ARBI's servant leadership model is changing how we lead in North Kivu.",
    author: "Jean-Paul Birindwa",
    role: "Youth Leader, Goma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Before ARBI's youth resilience program, I was lost and involved in substance abuse. The mentorship and reintegration support gave me a second chance. Now I'm helping other young people find hope and purpose.",
    author: "Amani Kabasha",
    role: "Program Beneficiary, Rutshuru",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "As a partner organization, we've seen ARBI's commitment to integral community development firsthand. Their holistic approach empowers communities as assets and resources of their own development. Together, we're building sustainable healing and prosperity.",
    author: "Pastor David Mubake",
    role: "Partner Organization, MICAH",
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
            Stories of Healing and Restoration
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from community members, leaders, and partners whose lives have been transformed through ARBI's programs.
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