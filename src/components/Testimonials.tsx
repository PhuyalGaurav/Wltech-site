import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  business?: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=52",
    name: "Anish Sharma",
    userName: "Founder",
    business: "Himalayan Brews",
    comment: "WL Tech transformed our café's online presence! Our website now brings in 30% more customers, and their social media management has created a loyal community around our brand. Best digital investment we've made for our business in Kathmandu.",
  },
  {
    image: "https://i.pravatar.cc/150?img=42",
    name: "Priya Thapa",
    userName: "Owner",
    business: "Nepali Handicrafts",
    comment: "Our e-commerce sales have doubled since WL Tech redesigned our website. They understood our traditional crafts business and created a modern platform that appeals to both local and international customers. Their team is responsive and professional.",
  },
  {
    image: "https://i.pravatar.cc/150?img=51",
    name: "Rajesh Magar",
    userName: "Managing Director",
    business: "Mountain Tours Nepal",
    comment: "The booking system WL Tech built for our trekking company has streamlined our operations completely. Their understanding of tourism in Nepal combined with their technical expertise delivered exactly what we needed. Highly recommend!",
  },
  {
    image: "https://i.pravatar.cc/150?img=30",
    name: "Sunita Gurung",
    userName: "CEO",
    business: "Kathmandu Fashion House",
    comment: "WL Tech's social media marketing has put our clothing brand on the map. Their team creates engaging content that resonates with our audience, and their strategic approach has helped us build a strong online community.",
  },
  {
    image: "https://i.pravatar.cc/150?img=48",
    name: "Binod Paudel",
    userName: "Director",
    business: "Himalaya Fresh Foods",
    comment: "As a sister company to WL Food, we've seen firsthand how the WL Tech team delivers digital excellence. Their website development and online marketing strategies have helped our organic food business reach customers throughout Nepal.",
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Meera Shrestha",
    userName: "Proprietor",
    business: "Mandala Arts Gallery",
    comment: "Working with WL Tech was an excellent decision for our small gallery. Their affordable website package was perfect for our needs, and the added SEO work has helped art lovers from across Nepal and abroad discover our unique collections.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        See How We've
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Helped Businesses{" "}
        </span>
        Across Nepal
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Don't just take our word for it. Hear from Nepali businesses that have grown their online presence with WL Tech's digital solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto space-y-0">
        {testimonials.map(
          ({ image, name, userName, business, comment }: TestimonialProps) => (
            <Card
              key={name + business}
              className="max-w-md overflow-hidden h-full"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={`Photo of ${name}`}
                    src={image}
                  />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}{business ? ` • ${business}` : ''}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <p className="text-muted-foreground">"{comment}"</p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
