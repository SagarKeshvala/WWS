import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the monthly subscription?",
    answer:
      "Every plan includes a professionally designed website, hosting, SSL certificate, mobile responsiveness, and ongoing maintenance. Higher tiers add features like SEO optimisation, e-commerce, and priority support.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes — there are no long-term contracts. You can cancel at any time with 30 days' notice. If you cancel, your website will remain live until the end of your billing period.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "Most websites are designed and launched within 5–10 business days, depending on the plan and complexity. We'll keep you updated at every stage.",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "We can work with whatever you have. If you don't have professional photos or copy, we'll source royalty-free imagery and help craft content that fits your brand.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website we build is fully responsive and tested across all major devices and browsers to ensure a seamless experience for your visitors.",
  },
  {
    question: "Do you offer custom design or just templates?",
    answer:
      "Every website is custom-designed to match your brand. We don't use cookie-cutter templates — your site will be unique to your business.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
