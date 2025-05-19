import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is WL Tech?",
    answer: "WL Tech is the digital division of WL Food, one of Nepal's leading food companies. We specialize in providing innovative digital solutions, website development, and social media marketing services for businesses across Nepal and beyond.",
    value: "item-1",
  },
  {
    question: "What services does WL Tech offer?",
    answer: "We offer a comprehensive range of digital services including website development, mobile app development, social media management, content creation, digital marketing, e-commerce solutions, and custom software development tailored to meet the specific needs of Nepali businesses.",
    value: "item-2",
  },
  {
    question: "How much does it cost to develop a website with WL Tech?",
    answer: "Our website packages start from NPR 15,000 for basic websites and can range up to NPR 50,000+ depending on your requirements. For custom development projects, we provide personalized quotes based on the scope, complexity, and specific features needed for your business.",
    value: "item-3",
  },
  {
    question: "Do you offer website maintenance and support after development?",
    answer: "Yes, we provide 15 days of free support after website handover. For ongoing maintenance, we offer flexible maintenance packages to ensure your website remains secure, up-to-date, and performs optimally at all times.",
    value: "item-4",
  },
  {
    question: "How can WL Tech help my business grow online?",
    answer: "As a Nepali company, we understand the local market and digital landscape. Our monthly marketing plans help businesses build a strong online presence, engage with their audience effectively, and drive growth. We combine local insights with global best practices to deliver results that matter for Nepali businesses.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact our team in Kathmandu
        </a>
      </h3>
    </section>
  );
};
