import arnavImg from "../assets/userIcons/arnav.jpg";
import shuvaImg from "../assets/userIcons/shuva.jpg";
import manishImg from "../assets/userIcons/manish.jpg";

export interface TeamMemberProps {
  imageUrl: string;
  name: string;
  fewWords: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

export interface SocialNetworkProps {
  name: string;
  url: string;
}

export const teamList: TeamMemberProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Gaurav Phuyal",
    fewWords:
      "Passionate about creating robust and scalable software solutions.",
    position: "Lead Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: manishImg,
    name: "Manish Bagale",
    fewWords: "Creating beautiful interfaces that users love to interact with.",
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: shuvaImg,
    name: "Shuva Aashish Gyawali",
    fewWords: "Working at WL Tech is a dream come true. I love it here with my team.",
    position: "Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/shuva_aashish9/",
      },
    ],
  },
  {
    imageUrl: arnavImg,
    name: "Arnav Adhikari",
    fewWords: '"Death is what gives life a meaning." 😆',
    position: "UI/UX Designer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/iamyself._/",
      },
    ],
  },
  {
    imageUrl: arnavImg,
    name: "Saurav Khatri",
    fewWords: '"ok."',
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/iamyself._/",
      },
    ],
  },
];
