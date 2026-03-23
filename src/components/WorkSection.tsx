import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-showcase.jpg";

const projects = [
  {
    name: "TechFlow SaaS",
    category: "B2B SaaS",
    description: "Complete website redesign driving 3x more demo bookings within the first quarter.",
    image: heroImg,
  },
  {
    name: "Greenfield Finance",
    category: "Fintech",
    description: "A clean, trust-building website that helped secure their Series A funding round.",
    image: heroImg,
  },
  {
    name: "Bloom Studio",
    category: "Creative Agency",
    description: "Bold portfolio site with smooth animations, increasing enquiries by 180%.",
    image: heroImg,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground max-w-2xl">
            Projects We're Proud Of.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={120 + i * 90}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:shadow-lg hover:shadow-foreground/[0.03] transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} website`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1.5">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
