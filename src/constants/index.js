import {
    mobile,
    backend,
    data,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    navy,
    dickinson,
    tesla,
    shopify,
    book,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    cpp,
    python,
    netflix,
    weather,
    portfolio,
    mancala,
    bookproject,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "AI Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "PC Gaming & Hardware Enthusiast",
      icon: data,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "java",
      icon: java,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "c++",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Help Room Teaching Assistant",
      company_name: "Dept. of Math & Computer Science at Dickinson",
      icon: dickinson,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - May 2018",
      points: [
        "Supported students in Java programming and course concepts with empathy, communication, and feedback.",
        "Helped students with Java programming and course concepts, while offering constructive feedback to improve their skills.",
      ],
    },
    {
      title: "Technical Assistant",
      company_name: "RSA & Student HelpDesk at Dickinson",
      icon: dickinson,
      iconBg: "#383E56",
      date: "Sep 2017 - May 2018",
      points: [
        "Managed hardware and software inventory, maintaining accurate database records.",
        "Assisted student workers in resolving technical issues promptly and effectively.",
        "Collaborated with colleagues to create and implement new technical support initiatives, improving customer satisfaction and reducing issue resolution time.",
      ],
    },
    {
      title: "Signaller Sergeant",
      company_name: "Republic of Korea Army",
      icon: navy,
      iconBg: "#383E56",
      date: "Oct 2018 - July 2020",
      points: [
        "Analyzed and interpreted information gathered from various teams.",
        "Assisted in the development and implementation of tactical communication strategies and plans to support military operations.",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "Book Project",
      icon: book,
      iconBg: "#383E56",
      date: "Sep 2020 - May 2021",
      points: [
        "Contributed to an open-source web application called Book Project, which was built using Spring Boot and React with Typescript.",
        "Developed REST endpoints to facilitate communication between two endpoints, allowing users to update their email addresses.",
        "Created mock objects using Mockito API to test new methods for correctness.",
      ],
    },

    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Netflix Clone",
      description:
        "A replica of the popular streaming platform built with React, CSS, and JavaScript, showcasing my ability to create engaging user interfaces and utilize popular libraries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      live_demo_link: "https://netflix-clone-fd763.web.app/",
      source_code_link: "https://github.com/seongholee4/netflix-clone",
    },
    {
      name: "Weather App",
      description:
        "A server-side rendered weather application developed using Flask, HTML, CSS, and JavaScript.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      live_demo_link: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio Website",
      description:
        "My personal portfolio website, built with TailwindCSS, Three.js, and React, showcasing my skills in modern web development and creative design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      live_demo_link: "https://seongholee.com",
      source_code_link: "https://github.com/seongholee4/seongholee.com",
    },
    {
      name: "Mancala Game",
      description:
        " A Java-based implementation of the classic board game, Mancala, showcasing my skills in game development and object-oriented programming.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "object-oriented-programming",
          color: "green-text-gradient",
        },
        {
          name: "mancala",
          color: "pink-text-gradient",
        },
      ],
      image: mancala,
      live_demo_link: "",
      source_code_link: "https://github.com/seongholee4/mancala",
    },
    {
      name: "Book Project",
      description:
        "Contributed to an open-source project, aimed at helping users manage their reading lists and discover new books.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: bookproject,
      live_demo_link: "",
      source_code_link: "https://github.com/Project-Books/book-project",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };