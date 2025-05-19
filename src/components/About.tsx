import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
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
                WL Tech Pvt. Ltd.
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We at WL Tech Pvt. Ltd. are the specialized digital division of
                WL Foods, helping businesses thrive in the digital landscape. As
                a tech branch with food industry roots, we understand both
                traditional and digital business needs. We excel in website
                development, graphic design, and social media marketing for
                clients in various industries. Our team creates responsive
                websites, engaging designs, and effective digital campaigns that
                connect your brand with target audiences. We combine our parent
                company's business acumen with technical expertise to deliver
                digital strategies that drive measurable results.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
