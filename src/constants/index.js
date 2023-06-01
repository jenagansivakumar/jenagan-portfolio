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
  kryptr,
  threejs,
  amazon,
  home,
  kick,
  rust,
  solidity,
  smartcontract,
  decentrafund,
  spiced,
  cardgame,
  ableton,
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
    title: "Solution Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Product Manager",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Trust & Safety ",
    company_name: "SoundCloud",
    icon: spiced,
    iconBg: "#383E56",
    date: "Sept 2010 - Nov 2015",
    points: [
      "Manage Customer Service projects for the Amazon.com website.",
      "Manage a wide range of stakeholders including business owners, product managers, and developers.",
      "Organize and led weekly SCRUM ceremonies.",
      "Suporting Marketing campaigns and other business initiatives.",
    ],
  },
  {
    title: "Sr Project Manager",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "June 2017 - Oct 2018",
    points: [
      "Develop bussines case and project plan for new project development.",
      "Develop an operational team as well as the workflow, KPIs and the whole operation of the team from scratch.",
      "Analysing the metadata of the catalogue content and assuring its adequate distribution was the team's main function, as well as cleaning up the catalog and verifying the catalogue from possible copy rights infringements.",
      "Learn SQL in order to write queries and handle the team's data.",
    ],
  },
  {
    title: "React Developer",
    company_name: "SoundCloud",
    icon: soundcloud,
    iconBg: "#383E56",
    date: "Oct 2018 - Dec 2021",
    points: [
      "Develope and maintain the web app using React.js and other related technologies.",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality outcomes.",
      "Build and maintain the component library and the design system.",
      "Participate in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Aroundhome",
    icon: home,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
    points: [
      "Built a tech case for a new API gateway.",
      "Build, deploy and document the new API gateway.",
      "Maintain and scale app infrastructure with AWS.",
      "Develop and support the internal design system library.",
    ],
  },
  {
    title: "Technical Product Manager",
    company_name: "KickID",
    icon: kick,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Develop OKRs along with KPIs and the Product Roadmap.",
      "Introduce and maintain Dual Track Agile Development.",
      "Craft surveys and interviews in order to enrich the personas and create an adequate product market fit.",
      "Extensive use of Jira and Confluence to manage the product development process.",
      "Work closely with Tech and Design in order to refactor the whole system architecture and user facing apps.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Over numerous projects, Jenagan has been the depiction of dedication, passion and creativity all whilist achieving outcomes and objectives. If you want to bring growth to your organisation, he is definitely an asset to have on your team.",
    name: "Camille Adrienne",
    designation: "Chief Marketing ",
    company: "Sellpy France",
    image: cachetona,
  },
  // {
  //   testimonial:
  //     "He's the coding punk you never knew you needed, but once you've tasted his distinctive blend of brilliance and cheekiness, there's no going back. Buckle up and get ready for the ride of a lifetime!",
  //   name: "Esteban Torres",
  //   designation: "Sr Engineering Manager",
  //   company: "Spotify",
  //   image: esteban,
  // },
  {
    testimonial:
      "He is a natural leader and visionary, inspiring cross-functional teams to move from ideation to high-quality outcomes. His ability to start from scratch - with keen observation, creativity, and leadership - and deliver something truly valuable is unparalleled. When working with Jenagan, fun, success and excellence are a given.",
    name: "Gonzalo Mendoza",
    designation: "Project Manager",
    company: "Parity Technologies",
    image: gonzi,
  },
  // {
  //   testimonial:
  //     "Working with Jenagan has been a thrilling ride of problem solving, charisma, banter and pure creative chaos. Imagine the visionary prowess of Steve Jobs intertwined with the unapologetic flair of Dennis Rodman, all bundled up in one software engineering wunderkind.",
  //   name: "Marc Tuduri",
  //   designation: "Sr Backend Engineer",
  //   company: "Grafana Labs",
  //   image: marc,
  // },
  // {
  //   testimonial:
  //     "Genuine courious mind with a high energy style and a lot of passion for what he does which make him super fun and engaging to work with. Any team would be lucky to have him on board!",
  //   name: "Amy Nguyen",
  //   designation: "Backend Engineer",
  //   company: "Spotify",
  //   image: amy,
  // },
  {
    testimonial:
      "Jenagan brings a spark to every project, fusing technical knowlegde with a contagious, offbeat energy. His unorthodox approach has turned the most mundane tasks into electrifying experiences, making work feel like a playground.",
    name: "Harold Haftsadi",
    designation: "QA",
    company: "TikTok",
    image: harry,
  },
];

const projects = [
  {
    name: "Kryptr",
    description:
      "My very first dApp!(proud tear). It's a simple SPA that allows users to connect their wallets and transfer their currency to anyone anywhere anytime. Built with React, Solidity, and Tailwind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kryptr,
    source_code_link: "https://github.com/jenagansivakumar",
  },
  {
    name: "PolkaFund",
    description:
      "My very first smart contract written in Rust using the node template from Substrate for the Polkadot ecosystem. I takes a donation and distrubutes it to the selected projects.",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "substrate",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
      {
        name: "WIP",
        color: "orange-text-gradient",
      },
    ],
    image: smartcontract,
    source_code_link: "https://github.com/edisonabdiel/PolkaFund",
  },
  {
    name: "DecentraFund",
    description:
      "A decentralised free platform for the community to CrowdFund their favourite Web3.0/Blockchain projects with cryptocurrency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "WIP",
        color: "orange-text-gradient",
      },
    ],
    image: decentrafund,
    source_code_link: "https://github.com/edisonabdiel/DecentraFund",
  },
  {
    name: "BattleCards",
    description:
      "NFT battle-style card game. With a stunning design, interactive gameplay, smart wallet pairing, live interaction with smart contracts, and, most importantly, the ability to battle other players in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "WIP",
        color: "orange-text-gradient",
      },
    ],
    image: cardgame,
    source_code_link: "https://github.com/edisonabdiel/BattleCardGame",
  },
];

export { services, technologies, experiences, testimonials, projects };
