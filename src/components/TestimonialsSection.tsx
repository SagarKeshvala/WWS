import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Sam completely transformed our online presence. Within weeks of launching, we saw a 40% increase in enquiries. The site looks incredible and works flawlessly on every device.",
    name: "Rachel Whitfield",
    role: "Founder @ BrightPath Consulting",
    initials: "RW",
  },
  {
    text: "We were paying a fortune for our old agency and getting nowhere. WebWithSam delivered a better site in half the time for a fraction of the cost. Couldn't recommend highly enough.",
    name: "James Harrington",
    role: "Director @ Oakwood Properties",
    initials: "JH",
  },
  {
    text: "The monthly subscription model is genius. We get constant updates and support without worrying about surprise invoices. Our site always looks fresh and performs brilliantly.",
    name: "Priya Sharma",
    role: "Marketing Lead @ Nexen Digital",
    initials: "PS",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Client Reviews
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground text-center max-w-2xl mx-auto">
            Our Clients Love Working With Us.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={120 + i * 90}>
              <div className="rounded-2xl bg-card border border-border/60 p-8 h-full flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-bold text-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
