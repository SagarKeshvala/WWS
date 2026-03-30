import { Palette, Code, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Palette,
    title: "Elementor Design & Build",
    description:
      "Pixel-perfect Elementor pages built from your designs or wireframes. Fully responsive, optimised for speed, and ready to hand off to your client.",
    tag: "Most Popular",
  },
  {
    icon: Code,
    title: "WordPress Development",
    description:
      "Custom theme tweaks, plugin integration, WooCommerce setup, and advanced Elementor builds. Your agency's scope, my execution.",
  },
  {
    icon: Zap,
    title: "Monthly Retainer",
    description:
      "Ongoing Elementor support for your agency — site updates, new pages, revisions, and maintenance. Scale without the overhead.",
    tag: "From £49/mo",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Services
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground max-w-2xl">
            Build, Develop
            <br />& Support — White Label.
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
                <p className="text-base text-muted-foreground leading-relaxed">
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
