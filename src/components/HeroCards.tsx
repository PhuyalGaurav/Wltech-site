import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, Facebook, Instagram } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { teamList } from "@/data/teamData"; // Import team data

export const HeroCards = () => {
  // Select a random team member to display
  const randomIndex = Math.floor(Math.random() * teamList.length);
  const randomTeamMember = teamList[randomIndex];

  // Function to render the appropriate social icon
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {" "}
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="Client" src="https://i.pravatar.cc/150?img=32" />
            <AvatarFallback>CL</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Happy Client</CardTitle>
            <CardDescription>Local Business Owner</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          WL Tech transformed our online presence ! Highly recommended.
        </CardContent>
      </Card>{" "}
      {/* Team Member */}
      <Card className="absolute right-[20px] w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={randomTeamMember.imageUrl}
            alt={randomTeamMember.name}
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">{randomTeamMember.name}</CardTitle>
          <CardDescription className="font-normal text-primary">
            {randomTeamMember.position}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            {randomTeamMember.fewWords ||
              "Dedicated to creating exceptional digital experiences."}
          </p>
        </CardContent>

        <CardFooter>
          <div>
            {randomTeamMember.socialNetworks.map((network) => (
              <a
                key={network.name}
                rel="noreferrer noopener"
                href={network.url}
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <span className="sr-only">{network.name} icon</span>
                {socialIcon(network.name)}
              </a>
            ))}
          </div>
        </CardFooter>
      </Card>
      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Website
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">NPR 15,000</span>
            <span className="text-muted-foreground"> – 50,000</span>
          </div>

          <CardDescription>
            Perfect for personal websites, blogs, portfolios, or small
            businesses.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Get Started</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Static website (up to 5 pages)",
              "Mobile-responsive design",
              "Basic SEO setup",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Creative Solutions</CardTitle>
            <CardDescription className="text-md mt-2">
              We provide innovative and creative solutions to help your business
              stand out in the digital world.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
