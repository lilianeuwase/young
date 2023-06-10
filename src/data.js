// import images
import Logo from "../src/img/header/logo RYC.png";
import GalleryImg1 from "../src/img/background/back1.jpeg";
import GalleryImg2 from "../src/img/background/back2.jpeg";
import GalleryImg3 from "../src/img/background/back3.jpeg";
import GalleryImg4 from "../src/img/background/back4.jpeg";
import GalleryImg5 from "../src/img/background/back5.jpeg";
import GalleryImg6 from "../src/img/background/back6.jpeg";
import GalleryImg7 from "../src/img/background/back8.jpeg";
import GalleryImg8 from "../src/img/background/back9.jpeg";
import GalleryImg9 from "../src/img/background/blackkid.jpeg";
import GalleryImg10 from "../src/img/background/blackkid2.jpeg";
import GalleryImg11 from "../src/img/background/Dad+kid.jpeg";
import GalleryImg12 from "../src/img/background/pexels-daniel-tijesuni-2113709.jpg";
import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navDataHome = {
  items: [{ href: "/", name: "Home" }],
};

export const navDataProg = {
  items: [{ href: "/ourprograms", name: "Our programs" }],
};
export const navDataWork = {
  items: [{ href: "/workwithus", name: "Work with us" }],
};
export const navData = {
  items: [{ href: "/", name: "Home" }],
  items: [{ href: "/whoweare", name: "Our Approach" }],
  items: [{ href: "/ourteam", name: "Our Team" }],
  items: [{ href: "/partners", name: "Our Partners" }],
  items: [{ href: "/ourprograms", name: "Our programs" }],
  items: [{ href: "/workwithus", name: "Work with us" }],

};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  { href: "/", icon: <IoLogoInstagram /> },
  { href: "/", icon: <IoLogoPinterest /> },
  { href: "/", icon: <IoLogoTwitter /> },
  { href: "/", icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: "Rwanda Youth Voice for Change",
  subtitle2:
    "The primary objective of this organization is to initiate programs that promote improved living standards for both youth and marginalized populations.",
  subtitle1:
    "RYVC Is a non-Political, non-Governmental, and non-Profit organization that was founded in 2009; It is duly registered and recognized by the Rwanda Governance Board. ",
  btnText: "Our Programs",
  btnIcon: <IoMdArrowForward />,
  href: "/ourprograms",
};

export const aboutData = {
  title1: "Our Vision",
  title2: "Our Mission",
  subtitle1:
    "A healthy and prosperous Rwanda where young people are empowered to drive sustainable development and innovation.",
  subtitle2:
    "Our mission is to harness the power of data and human-centered design to improve the health and wellbeing of Rwandans, particularly youth and other under-served groups, through innovative solutions, research, education, and sustainable livelihoods, while also contributing to the achievement of SDG 3.",
  // subtitle2:
  //   "We believe in using evidence-based approaches to drive decision-making and advocacy efforts, in collaboration with other stakeholders and communities. By leveraging the latest technologies and working closely with our beneficiaries, we strive to create sustainable solutions that address the unique needs and challenges among our beneficiaries.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Our gallery:",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 565,
      height: 412,
    },
    // {
    //   src: GalleryImg2,
    //   original: GalleryImg2,
    //   width: 465,
    //   height: 540,
    // },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 565,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
  moreimages: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 565,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 565,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg10,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg11,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg12,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title: "“Transforming lives through health, education, and innovation.”",
  subtitle: "- Our motto -",
  btnText: "Some Video",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "A healthy and prosperous Rwanda where young people are empowered to drive sustainable development and innovation.",
    name: "Our Vision",
    occupation: "RYVC",
  },
  // {
  //   quoteImg: QuoteImg,
  //   message:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
  //   name: "Douglas Hane",
  //   occupation: "Tattoo Artist",
  // },
];

export const contactData = {
  title: "Get in touch to support our mission:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Kigali, Rwanda",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "++250 786 111 498",
      },
      email: {
        icon: <FaEnvelope />,
        address: "info@rwandayvchange.org",
      },
      link: "Get location",
    },
    // {
    //   title: 'NYC office',
    //   subtitle:
    //     'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    //   address: {
    //     icon: <FaMapMarkerAlt />,
    //     name: '1630 Elm Drive, New York City',
    //   },
    //   phone: {
    //     icon: <FaPhoneAlt />,
    //     number: '+49 34 36573355',
    //   },
    //   email: {
    //     icon: <FaEnvelope />,
    //     address: 'contact@yourcompany.com',
    //   },
    //   link: 'Get location',
    // },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "About RYVC",
    subtitle:
      "Non-political, non-governmental, and non-profit organization that was founded in 2009",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "Kigali, Rwanda",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+250 786 111 498",
    },
    email: {
      icon: <FaEnvelope />,
      address: "info@rwandayvchange.org",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "/whoweare", name: "Who we are" },
      { href: "/gallery", name: "Our gallery" },
      { href: "/ourprograms", name: "Our programs" },
      { href: "/workwithus", name: "Work with us" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle: "Subscribe to our newsletter.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
