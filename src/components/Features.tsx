import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Web Design",
    description:
      "Our websites look stunning on all devices, from smartphones to desktops. We prioritize mobile-first design to ensure your business reaches customers wherever they are.",
    image: image4,
  },
  {
    title: "Strategic Social Media",
    description:
      "We create engaging social media campaigns that connect with your audience. Our content strategies drive brand awareness, customer engagement, and measurable business growth.",
    image: image3,
  },
  {
    title: "Custom Digital Solutions",
    description:
      "From e-commerce platforms to booking systems, we develop tailor-made applications that solve your specific business challenges with elegant, user-friendly interfaces.",
    image: image,
  },
];

const featureList: string[] = [
  "Mobile Responsive",
  "SEO Optimized",
  "Social Media Integration",
  "E-commerce Solutions",
  "Content Management",
  "Booking Systems",
  "Custom Development",
  "Analytics & Reporting",
  "Local Business Focus",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Digital{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Expertise & Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
