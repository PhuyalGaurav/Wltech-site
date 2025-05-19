import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Monthly Marketing Plan",
    popular: 0,
    price: "NPR 20,000",
    description:
      "Perfect for small to medium businesses looking to grow online.",
    buttonText: "Start Now",
    benefitList: [
      "3–4 posts per week",
      "Content creation (design + captions)",
      "Scheduled posting and management",
      "Hashtag research",
      "Community management",
    ],
  },
  {
    title: "Starter Website Package",
    popular: 1,
    price: "NPR 15,000 – NPR 50,000",
    description:
      "Perfect for personal websites, blogs, portfolios, or small businesses.",
    buttonText: "Get Started",
    benefitList: [
      "Static website (up to 5 pages)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Free support for 15 days",
    ],
  },
  {
    title: "Custom Development",
    popular: 0,
    price: "Custom",
    description:
      "Have a custom project in mind? We'll turn your ideas into reality.",
    buttonText: "Contact Us",
    benefitList: [
      "Scalable development",
      "Ongoing support and maintenance",
      "Flexible pricing based on needs",
      "E-commerce & booking solutions",
      "AI integration",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Professional{" "}
        </span>
        Services
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose the right package for your business needs
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                {pricing.title === "Monthly Marketing Plan" && <span className="text-muted-foreground"> /month</span>}
                {pricing.title === "Starter Website Package" && <span className="text-muted-foreground"> (one-time)</span>}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
