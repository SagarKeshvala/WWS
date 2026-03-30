import ScrollReveal from "./ScrollReveal";
import heroImg from "@/assets/hero-showcase.jpg";

const projects = [
  {
    name: "Apex Digital",
    category: "Agency Partner — UK",
    description: "Built 40+ Elementor pages for their client roster, reducing their turnaround time by 60%.",
    image: heroImg,
  },
  {
    name: "Brightwave Agency",
    category: "Agency Partner — USA",
    description: "Ongoing white-label retainer handling all WordPress & Elementor overflow projects.",
    image: heroImg,
  },
  {
    name: "Kreatif Studio",
    category: "Agency Partner — Germany",
    description: "Complex multi-site Elementor builds with WooCommerce integration for their European clients.",
    image: heroImg,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Portfolio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground max-w-2xl">
            White-Label Work, Agency Quality.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={120 + i * 90}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:shadow-lg hover:shadow-foreground/[0.03] transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                <iframe src="https://www.callamarketer.com/"></iframe>
                  {/* <img
                    src={project.image}
                    alt={`${project.name} website`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  /> */}
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1.5">
                    {project.name}
                  </h3>
                  <p className="text-base text-muted-foreground mt-2 leading-relaxed">
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
