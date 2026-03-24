import { Check, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses just getting online.",
    features: [
      "Up to 5-page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Monthly content updates",
      "SSL & security",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "99",
    description: "For businesses ready to scale their online presence.",
    features: [
      "Up to 15-page website",
      "Custom design & branding",
      "Advanced SEO & analytics",
      "Weekly content updates",
      "Priority support",
      "Performance optimisation",
      "Blog setup & management",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "249",
    description: "Full-service web partner for ambitious brands.",
    features: [
      "Unlimited pages",
      "Bespoke design system",
      "E-commerce integration",
      "Dedicated account manager",
      "Same-day support",
      "A/B testing & CRO",
      "Custom integrations",
      "Monthly strategy call",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Pricing
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground text-center max-w-2xl mx-auto">
            Simple, Transparent Plans.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-center text-muted-foreground mt-4 max-w-md mx-auto text-base">
            No hidden fees. No long contracts. Cancel anytime. All plans include hosting and support.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={180 + i * 90}>
              <div
                className={`relative rounded-2xl border p-8 h-full ${
                  plan.popular
                    ? "border-primary/30 bg-card shadow-xl shadow-primary/[0.06]"
                    : "border-border/60 bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-full px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="heading-display text-4xl text-foreground">£{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="mt-3 text-base text-muted-foreground">{plan.description}</p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check size={15} className="mt-0.5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      : "border border-foreground/15 text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Get Started <ArrowUpRight size={14} />
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
