import { s } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  soundcloud,
  threejs,
  amazon,
  home,
  kick,
  rust,
  solidity,
  spiced,
  ableton,
  jenaround,
  artgallery,
  tourio,
  portfolio,
  lotr,
} from "../assets";

import {
  esteban,
  cachetona,
  gonzi,
  marc,
  harry,
  amy,
} from "../assets/testimonials";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Music Producer",
    icon: ableton,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Ableton",
    icon: ableton,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "figma",
    icon: figma,
  },

  {
    name: "my face",
    icon: jenaround,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Spiced Academy",
    icon: spiced,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "JavaScript: I acquired a solid foundation in JavaScript, the backbone of web development. I can leverage its powerful features to create interactive and dynamic web applications, handle events, manipulate the DOM, and perform asynchronous operations.",
      "Next.js: I gained a deep understanding of Next.js, a popular React framework that allows for server-side rendering and efficient client-side navigation. I can now build dynamic and high-performance web applications using Next.js.",
      "React: I learned React, a powerful JavaScript library for building user interfaces. I now have the skills to create reusable components, manage application state efficiently, and implement a virtual DOM for optimized rendering.",
      "Throughout the bootcamp, I became proficient in CSS and HTML, which are essential languages for web development. I can now structure and style web pages effectively, ensuring proper layout, responsiveness, and visual appeal.",
      "MongoDB: The bootcamp also covered MongoDB, a popular NoSQL database. I learned how to design and interact with databases using MongoDB's query language. This knowledge enables me to store, retrieve, and manipulate data in a flexible and scalable manner, which is crucial for building robust full-stack applications.",
    ],
  },
  {
    title: "Trust & Safety ",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2023",
    points: [
      "Played a critical role in ensuring the platform's integrity and user safety by implementing robust trust and safety measures.",
      "Vetted SoundCloud Premier, saving the company tens of thousands of dollars monthly.",
      "Handled complex tickets involving collaboration with government agencies, including the FBI.",
      "Bridged the gap between the Trust and Safety team and the surrounding tech team.",
      "Demonstrated exceptional problem-solving skills for intricate trust and safety challenges.",
      "Received accolades for professionalism, dedication, and commitment to a secure environment.",
    ],
  },
  {
    title: "Community Support ",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "May 2017 - Jan 2020",
    points: [
      "Managed incoming support requests from users via Zendesk, ensuring that every query was effectively tracked and resolved.",
      "Provided timely and accurate responses to user inquiries, including troubleshooting steps, explanations of product features, and solutions to technical issues.",
      "Collaborated with the technical team to escalate complex issues and worked together to find solutions, improving the overall user experience.",
      "Assisted in maintaining the knowledge base by documenting common user issues and their solutions, helping to streamline the support process.",
      "Contributed to the improvement of SoundCloud's products and services by collecting and analyzing user feedback, and communicating this information to relevant teams.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jenagan is a shining example of dedication, passion, and creativity, consistently achieving outcomes and objectives across numerous projects. If you're looking to drive growth in your organization, having Jenagan on your team is an undeniable asset.   ",
    name: "Holly Shepherdson",
    designation: "Head of Trust & Safety",
    company: "SoundCloud",
    image: soundcloud,
  },

  {
    testimonial:
      "Jenagan is a true standout, embodying unwavering dedication, passion, and creativity across all projects. With his exceptional abilities in achieving outcomes and objectives, he is an invaluable addition to any team looking to drive growth and excel in their endeavors.",

    name: "Maria de la Plaza",
    designation: "Head of Community Operations",
    company: "SoundCloud",
    image: soundcloud,
  },

  {
    testimonial:
      "Jenagan brings a spark to every project, fusing technical knowlegde with a contagious, offbeat energy. His unorthodox approach has turned the most mundane tasks into electrifying experiences, making work feel like a playground.",
    name: "Harold Haftsadi",
    designation: "QA",
    company: "TikTok",
    image: soundcloud,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "A link to this portfolio! Built with React, Tailwind, and Three.js. and Framermotion",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jenagansivakumar/jenagan-portfolio",
  },
  {
    name: "Gallery App",
    description:
      "The purpose of this app is to recreate an art gallery experience by showcasing art pieces and implementing interactive features.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: artgallery,
    source_code_link: "https://github.com/jenagansivakumar/recap-project-5",
  },
  {
    name: "Tourio App",
    description:
      "Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tourio,
    source_code_link: "https://github.com/jenagansivakumar/recap-project-6",
  },
  {
    name: "Lord of the Rings App",
    description:
      "A very simple app about The Lord of the Rings. It displays characters and their information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lotr,
    source_code_link: "https://github.com/jenagansivakumar/lotr-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
