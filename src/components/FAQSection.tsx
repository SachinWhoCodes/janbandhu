import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What problem does JanBandhu solve?",
      answer: "JanBandhu enables citizens to easily report civic issues such as potholes, broken streetlights, garbage accumulation, and electricity faults. It ensures accountability through AI-powered routing, SLA deadlines, and transparent dashboards that track issues from complaint to resolution."
    },
    {
      question: "How is this different from CPGRAMS or state helpline apps?",
      answer: "Unlike existing systems, JanBandhu adds multilingual and voice support for accessibility, AI-based auto-routing for efficient issue assignment, proof-based resolution verification with geo-tagged photos/videos, and public transparency dashboards that allow citizens and press to monitor progress in real-time."
    },
    {
      question: "Is Aadhaar data stored in your system?",
      answer: "No, we prioritize data privacy and security. JanBandhu only stores verification tokens as per compliance requirements. Actual Aadhaar numbers are never stored in our system, ensuring your personal identification data remains protected."
    },
    {
      question: "How does the resolver prove completion?",
      answer: "Resolvers must upload geo-tagged photos and videos of the resolved site as proof of completion. This evidence is then verified through the authority dashboard, ensuring transparency and accountability in the resolution process. The system also tracks timestamps and GPS coordinates for authenticity."
    },
    {
      question: "Can this integrate with Smart City or e-Gov platforms?",
      answer: "Yes, JanBandhu is built with an API-first architecture, making it highly compatible with existing government systems. It can seamlessly integrate with Smart City initiatives, e-Governance platforms, and other municipal services through secure APIs, enabling a unified civic management ecosystem."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about JanBandhu
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have more questions?
          </p>
          <a 
            href="mailto:support@janbandhu.com"
            className="text-primary hover:text-primary/80 font-medium animated-underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;