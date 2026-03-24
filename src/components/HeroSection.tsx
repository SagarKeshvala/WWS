import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center" ref={ref}>
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          UK's Trusted Website Partner
        </p>

        <h1
          className="heading-display text-[clamp(2.5rem,8vw,5.5rem)] max-w-4xl mx-auto text-foreground"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            filter: visible ? "blur(0)" : "blur(4px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          Beautiful Websites
          <br />
          That Convert
        </h1>

        <p
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          We design and build clean, high-converting websites for{" "}
          <strong className="text-foreground">UK businesses</strong>. From startups to established brands —
          get a professional website from just <strong className="text-foreground">£49/month</strong>.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
          }}
        >
          <button
            onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/webwithsam' })}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-[0.97] cursor-pointer"
          >
            <ArrowUpRight size={16} />
            Book a Free Call
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-200 active:scale-[0.97]"
          >
            View Plans
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
