import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Sam has been our go-to Elementor partner for over a year. He delivers pixel-perfect builds on time, every time. Our clients never know we outsource — that's how seamless it is.",
    name: "Mark Stevens",
    role: "Founder @ Apex Digital (UK)",
    initials: "MS",
  },
  {
    text: "We needed someone who could handle overflow Elementor work without hand-holding. Sam gets it done faster than our in-house team ever did. Absolute game-changer for our agency.",
    name: "Emily Carter",
    role: "COO @ Brightwave Agency (USA)",
    initials: "EC",
  },
  {
    text: "Reliable, detail-oriented, and fully white-label. Sam signed an NDA day one and has been an extension of our team since. Highly recommend to any agency scaling up.",
    name: "Daniel Müller",
    role: "Director @ Kreatif Studio (Germany)",
    initials: "DM",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Agency Reviews
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="heading-display text-[clamp(1.8rem,4vw,3rem)] text-foreground text-center max-w-2xl mx-auto">
            Trusted by Agencies Worldwide.
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
                <p className="text-base text-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-bold text-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
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
