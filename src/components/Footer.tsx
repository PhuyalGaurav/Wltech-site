import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            WL Tech
          </a>
          <p className="mt-4 text-muted-foreground">
            The digital division of WL Food.<br/>
            Providing digital solutions for businesses across Nepal.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Website Development
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Social Media Management
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Digital Marketing
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About Us
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className="opacity-60 hover:opacity-100"
            >
              Kathmandu Office
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="tel:+9779800000000"
              className="opacity-60 hover:opacity-100"
            >
              +977-9800000000
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:info@wltech.com.np"
              className="opacity-60 hover:opacity-100"
            >
              info@wltech.com.np
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 WL Tech Pvt. Ltd. | All Rights Reserved | The Digital Division of{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            WL Food
          </a>
        </h3>
      </section>
    </footer>
  );
};
