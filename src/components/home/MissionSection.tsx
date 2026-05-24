// MissionSection.tsx
import { Target, Eye, Heart, Shield, Users, HandHeart } from "lucide-react";

const MissionSection = () => {
  const items = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To see healed, reconciled, and prosperous communities living in peace in the DRC and other regions of Africa affected through violence.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To rebuild bridges within and between affected communities through integral community-based approaches fostering inclusive cooperation, capacity building for sustainable healing, peace building, and development.",
      color: "teal",
    },
    {
      icon: Heart,
      title: "Who We Are",
      description:
        "Restoring bridges within and between communities. Working towards healed, reconciled, and prosperous communities in the DRC.",
      color: "gold",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Restoring Bridges Within and Between Communities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Since 2011, ARBI has worked tirelessly to bring healing and peace to communities torn apart by violence in Eastern DRC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  item.color === "primary"
                    ? "bg-primary/10"
                    : item.color === "teal"
                    ? "bg-teal/10"
                    : "bg-gold/10"
                }`}
              >
                <item.icon
                  className={`w-8 h-8 ${
                    item.color === "primary"
                      ? "text-primary"
                      : item.color === "teal"
                      ? "text-teal"
                      : "text-gold"
                  }`}
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm italic text-muted-foreground">
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;