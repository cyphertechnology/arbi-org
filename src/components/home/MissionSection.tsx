import { Target, Eye, Heart } from "lucide-react";

const MissionSection = () => {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide holistic support to underprivileged children and families through education, healthcare, and community development programs.",
      color: "primary",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where every child has access to quality education, healthcare, and the opportunity to reach their full potential.",
      color: "teal",
    },
    {
      icon: Heart,
      title: "Core Purpose",
      description:
        "To create lasting change by empowering communities with the resources, knowledge, and support they need to thrive.",
      color: "gold",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Drives Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to compassion, integrity, and community guides everything we do.
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
      </div>
    </section>
  );
};

export default MissionSection;
