import { ArrowUpRight, Clock, FileText, CalendarCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const models = [
  {
    icon: Clock,
    title: "Hourly Basis",
    description: "Pay only for the hours you need. Perfect for quick fixes, tweaks, or one-off tasks.",
  },
  {
    icon: FileText,
    title: "Per Page Basis",
    description: "Fixed price per Elementor page. Ideal for agencies with clear project scopes and deliverables.",
  },
  {
    icon: CalendarCheck,
    title: "Monthly Retainer",
    description: "Ongoing partnership with dedicated hours each month. Best for agencies with steady workflow.",
    tag: "Most Flexible",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            How We Work Together
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground text-center max-w-2xl mx-auto">
            Flexible Engagement Models.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto text-base">
            No rigid plans. Choose the model that fits your agency's workflow — hourly, per page, or a monthly retainer. NDA signed before we start.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <ScrollReveal key={model.title} delay={180 + i * 90}>
              <div className="relative rounded-2xl border border-border/60 bg-card p-8 h-full flex flex-col">
                {model.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
                    {model.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <model.icon size={20} className="text-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {model.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {model.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-all duration-200 active:scale-[0.97]"
                >
                  Let's Talk <ArrowUpRight size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
