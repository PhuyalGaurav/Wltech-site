import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                ECS Tech Pvt. Ltd.
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
             We at ECS Tech Pvt. Ltd. are a passionate team of tech enthusiasts based in Nepal, dedicated to helping businesses grow in the digital world. We specialize in website development, graphic designing, and social media marketing. Whether it’s building a modern, responsive website or creating eye-catching designs and digital campaigns, we make sure your brand stands out and connects with the right audience. With a focus on creativity, quality, and client satisfaction, we turn your ideas into impactful digital solutions.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
