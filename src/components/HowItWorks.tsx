import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Consultation",
    description:
      "We start by understanding your business goals, target audience, and specific requirements to create a tailored digital strategy.",
  },
  {
    icon: <MapIcon />,
    title: "2. Strategic Planning",
    description:
      "Our team develops a comprehensive roadmap with detailed timelines, deliverables, and key performance metrics for your project.",
  },
  {
    icon: <PlaneIcon />,
    title: "3. Implementation",
    description:
      "We bring your digital presence to life with professional development, design, and content creation that aligns with your brand.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Growth & Support",
    description:
      "After launch, we provide ongoing maintenance, analytics reporting, and optimization to ensure continued success and ROI.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Process{" "}
        </span>
        From Concept to Success
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We follow a proven methodology that ensures your digital project is completed efficiently, 
        on time, and delivers real business results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
