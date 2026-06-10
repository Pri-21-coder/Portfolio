// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import rLogo from './assets/tech_logo/r.png';
import dockerLogo from './assets/tech_logo/docker.png';
import cloudinaryLogo from './assets/tech_logo/cloudinary.png';
import canvaLogo from './assets/tech_logo/canva.png';

// Experience Section Logo's
import gssocLogo from './assets/company_logo/gssoc.png';
import swocLogo from './assets/company_logo/swoc.png';
import wocLogo from './assets/company_logo/woc.png';

// Education Section Logo's
import mckvLogo from './assets/education_logo/mckvie.png';
import chbvLogo from './assets/education_logo/chbv.jpeg';
import ubvLogo from './assets/education_logo/ubv.png';

// Project Section Logo's
import stayoLogo from './assets/work_logo/stayo.png';
import weatherLogo from './assets/work_logo/weather.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name: 'R', logo: rLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      {name: 'Cloudinary', logo: cloudinaryLogo},
      {name: 'Canva', logo: canvaLogo},
      {name: 'Docker', logo: dockerLogo},
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: gssocLogo, 
    role: "Open Source Contributor",
    company: "GSSOC",
    date: "September 2025 - October 2025",
    desc: "Contributed 6 high-impact (Level 2/3) PRs and identified 14 project enhancements for GSSOC.",
    skills: ["Open Source", "Issue Tracking", "Pull Requests", "Bug fixing", "MERN Stack"]
  },
  {
    id: 1,
    img: swocLogo, 
    role: "Open Source Contributor",
    company: "SWOC",
    date: "January 2025 - March 2025",
    desc: "Merged 50+ high-impact PRs and identified critical issues across multiple open-source projects during SWOC.",
    skills: ["Open Source", "Bug fixing", "Innovative feature implementation", "MERN Stack"]
  },
  {
    id: 2,
    img: wocLogo, 
    role: "Open Source Contributor",
    company: "WOC",
    date: "January 2025 - April 2025",
    desc: "Selected project proposal for the WallGodds Web organization and successfully merged 2+ high-impact Pull Requests.",
    skills: ["Web Development", "Version Control", "Pull Requests"]
  },
  {
    id: 3,
    img: swocLogo, 
    role: "Project Admin",
    company: "SWOC",
    date: "Present", 
    desc: "Currently serving as a Project Admin, overseeing contributions and managing project roadmaps.",
    skills: ["Project Management", "Leadership", "Open Source"]
  }
];
  
 
  export const education = [
  {
    id: 0,
    img: mckvLogo, 
    school: "MCKV Institute of Engineering",
    degree: "B.Tech in Computer Science & Engineering",
    date: "2023 - 2027",
    grade: "Current SGPA (2nd Year): 9.69",
    desc: "Currently pursuing a Bachelor of Technology with a perfect academic record. Focusing on core computer science principles, advanced data structures, and modern software engineering practices.",
  },
  {
    id: 1,
    img: chbvLogo, 
    school: "Chandannagore Banga Vidyalaya",
    degree: "Higher Secondary Examination (WBCHSE)",
    date: "2021 - 2023",
    grade: "74%",
    desc: "Completed higher secondary education with a rigorous focus on science and mathematics, laying a strong analytical foundation for engineering.",
  },
  {
    id: 2,
    img: ubvLogo, 
    school: "Ushangini Balika Vidyalaya",
    degree: "Madhyamik Examination (WBBSE)",
    date: "2015 - 2021",
    grade: "79%",
    desc: "Completed secondary education with a strong academic record and a developing passion for technology and logical problem-solving.",
  }
];
  export const projects = [
  {
    id: 1,
    title: "Stayo: Stay your way",
    description: "A community-driven platform built for travelers seeking unique homes and experiences worldwide. Features secure bookings and trusted reviews.",
    fullDescription: "Welcome to Stayo! Tired of the ordinary? Stayo is a community built for travelers who seek more than just a place to sleep. We connect you with incredible hosts offering unique homes around the world, from a sun-drenched villa in Italy to a modern apartment in the heart of Tokyo. Experience the world like a local, with the comfort and personality of a real home. Every stay is backed by our secure platform, trusted reviews, and dedicated support, so you can book with confidence and travel with peace of mind.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    image: stayoLogo, 
    github: "https://github.com/Pri-21-coder/Stayo.git",
    webapp: "https://stayo-rwf8.onrender.com",
  },
  {
    id: 2,
    title: "Weather-Application",
    description: "A production-grade React application delivering real-time weather data, showcasing scalable component design and resilient data pipelines.",
    fullDescription: "This isn't just a weather display—it is a demonstration of modern frontend architecture. Built with React.js and integrated with the Weatherstack API, this application moves beyond basic functionality to showcase custom hook engineering, scalable component design, and graceful error handling. Key features include Custom API Hooks for async fetching, a Resilient Data Pipeline, Modular Architecture for easy maintenance, and a Dynamic UI that adapts to current weather conditions.",
    tags: ["React.js", "Weatherstack API", "Custom Hooks", "Dynamic UI"],
    image: weatherLogo, 
    github: "https://github.com/Pri-21-coder/Weather-Application.git",
    webapp: "https://weather-application-h4v5.onrender.com",
  }
];
  