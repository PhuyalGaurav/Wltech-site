import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Facebook } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-6xl md:text-7xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#37B34A] to-[#8CC63F] text-transparent bg-clip-text text-8xl md:text-10xl">
              WL Tech
            </span>{" "}
            <br />
          </h1>{" "}
          We Link,
          <br />{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text">
              We Create.
            </span>{" "}
          </h2>
        </main>{" "}
        <p className="text-xl md:text-2xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Elevating your business with cutting-edge web development, innovative
          design, and strategic digital marketing solutions customized for
          maximum impact.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 text-lg py-6">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://facebook.com/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Connect With Us
            <Facebook className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
