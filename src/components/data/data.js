import {
  ColorLens,
  CropRotate,
  ViewInAr,
  AssignmentInd,
  Groups,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  GitHub,
  LinkedIn,
  Work,
  WhatsApp,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "HELLO I'M",
    name: "CRISTIAN BENITEZ",
    post: "Full-Stack Developer",
    design: "Web Designer",
    desc: "Full-Stack web developer graduated from Henry. My passion for programming started when I was 14 years old and since then I have never stopped learning more and more about this world. Today I can proudly say that I am a FullStack Developer with a wide range of technologies learned.",
  },
];
export const about = [
  {
    desc: "Hello World! I'm Cristian Benitez, I'm 20 years old and I'm a Full-Stack Web Developer. My path in programming began at the age of 14 programming my first addition and subtraction in JAVA, today after 6 years taking courses and learning in a self-taught way I consider myself a very competent Web Developer capable of facing any challenge and overcoming it with success.",
    cover: "./images/man.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <ColorLens />,
    title: "Creative Design",
    desc: "Creative designs oriented to the best possible user experience. Attractive animations and clean, minimalist design.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Development focused on an orderly, clean, efficient and scalable code",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Knowledge in responsive designs, adaptation to any type of device. I have the ability to correctly apply Mobile First work methodologies",
  },
  {
    id: 4,
    icon: <AssignmentInd />,
    title: "Agile Methodologies",
    desc: "Knowledge of agile SCRUM-type work methodologies",
  },
  {
    id: 5,
    icon: <Groups />,
    title: "Teamwork",
    desc: "Ability to work in a team correctly and efficiently, quick adaptation to any work team.",
  },
  {
    id: 6,
    icon: <Work />,
    title: "Project Experience",
    desc: "Experience in multiple personal projects created from known technologies",
  },
];

export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "CB Portfolio",
    category: "react",
    title: "Personal Portfolio - React",
    urlGit: "https://github.com/cbenitez02/my-portfolio",
    urlDemo: "https://cbportfolioweb.netlify.app/",
  },
  {
    id: 2,
    cover: "../images/port/port2.png",
    name: "youAdmin",
    category: "react",
    title: "Dashboard - React",
    urlGit: "https://github.com/cbenitez02/dashboard-react",
    urlDemo: "https://youadminpanel.netlify.app/",
  },
  {
    id: 3,
    cover: "../images/port/port3.png",
    name: "amazona",
    category: "react",
    title: "MERN - Copy Amazon",
    urlGit: "https://github.com/cbenitez02/copy-amazon-MERN",
    urlDemo: "https://mern-amazona-app.herokuapp.com/",
  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "DARDO BOTTO PAGE",
    category: "javascript",
    title: "Landing Page",
    urlGit: "",
    urlDemo: "http://www.estudiodardobotto.com/",
  },
  {
    id: 5,
    cover: "../images/port/port5.png",
    name: "Shoping Cart",
    category: "angular",
    title: "with Angular",
    urlGit: "",
    urlDemo: "https://github.com/cbenitez02/simple-eccomerce-angular",
  },
];

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Rosario, Santa Fe, Argentina",
  },
  {
    icon: <PhoneIphone />,
    text1: "(+54) 341 5008550",
  },
  {
    icon: <EmailOutlined />,
    text1: "cbenitez1265@gmail.com",
  },
];
export const social = [
  {
    icon: <GitHub />,
    url: "https://github.com/cbenitez02",
  },
  {
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/cristian-benitez-5b817b242/overlay/contact-info/",
  },
  {
    icon: <WhatsApp />,
    url: "https://wa.me/543415008550",
  },
];
