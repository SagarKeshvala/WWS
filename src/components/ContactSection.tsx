import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Limited Spots Available
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="heading-display text-[clamp(1.8rem,5vw,3.5rem)] text-foreground">
              Ready to Get
              <br />
              Your Dream Website?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 text-muted-foreground max-w-md mx-auto">
              We only take on a handful of projects each month to ensure top quality.
              Get in touch today to secure your spot.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@webwithsam.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-[0.97]"
              >
                <Mail size={16} />
                hello@webwithsam.com
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 active:scale-[0.97]"
              >
                <MessageCircle size={16} />
                Book a Free Call
                <ArrowUpRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
