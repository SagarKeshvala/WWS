import { Palette, Code, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Bespoke, conversion-focused designs tailored to your brand. We create clean, modern websites that build trust and drive results.",
    tag: "Most Popular",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Fast, responsive, SEO-optimised websites built with modern technology. Every site is mobile-first and lightning quick.",
  },
  {
    icon: Zap,
    title: "Monthly Retainer",
    description:
      "Ongoing website updates, maintenance and support. Keep your site fresh, secure and performing — without hiring in-house.",
    tag: "From £49/mo",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Services
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground max-w-2xl">
            Design, Development
            <br />& Ongoing Support.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={120 + i * 80}>
              <div className="group relative rounded-2xl border border-border/60 bg-card p-8 hover:shadow-lg hover:shadow-foreground/[0.03] transition-shadow duration-300 h-full">
                {service.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
                    {service.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <service.icon size={20} className="text-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
