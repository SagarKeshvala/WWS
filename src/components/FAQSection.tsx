import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the white-label process work?",
    answer:
      "You send me the design files, brief, or wireframes — I build the pages in Elementor and deliver them under your brand. Your clients never know I exist. I sign an NDA upfront to guarantee confidentiality.",
  },
  {
    question: "What's included in the monthly retainer?",
    answer:
      "Each plan includes a set number of Elementor page builds per month, revisions, responsive optimisation, and direct communication via email or Slack. Higher tiers add faster turnaround and dedicated support.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes — no long-term contracts. Cancel with 30 days' notice. Any work in progress will be completed and delivered before the end of your billing period.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "I specialise in WordPress + Elementor Pro. I also work with WooCommerce, ACF, and various third-party plugin integrations. If you have a specific stack, let's chat.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "Standard turnaround is 48 hours for the Starter plan, 24 hours for Growth, and same-day for Agency Pro. Complex multi-page builds may require additional time — I'll always communicate timelines upfront.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. I sign an NDA before any project begins. Confidentiality is non-negotiable — your client relationships are fully protected.",
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
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
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
