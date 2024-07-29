import project1 from "./project-1.jpg";
import project2 from "./project-2.jpg";
import project3 from "./project-3.jpg";
import project4 from "./project-4.jpg";
import food from './food del.jpeg'
import portfolio from './portfolio.jpg'

export const HERO_CONTENT = `At 19, I'm all about tech – it's my playground and my passion. I'm a natural learner, so diving into new coding languages is like cracking open a good mystery novel. Web development was my first conquest, and I've built some projects I'm pretty proud of.Now, I'm obsessed with Android development. The challenge of crafting intuitive apps for people to use every day is super exciting, and my learning curve is practically vertical. Give me a coding problem, and I'll be itching to solve it with an innovative approach!`;

export const ABOUT_TEXT = `I'm a highly motivated student with a strong foundation in Java and a passion for exploring new technologies. In addition to Java, I've delved into C, C++, and Python, further expanding my programming skillset..


I'm also eager to learn the ropes of app development. I've recently gained experience with design tools like Figma, particularly focusing on prototyping, and have been actively learning Android development using Kotlin.


My passion for innovation extends beyond the classroom. Participating in hackathons like the New India Vibrant Hackathon 2023 and the Accenture Innovation Challenge 2023 has not only honed my leadership and teamwork skills, but has also led me to win several hackathons! I even represented my team in the finals of the prestigious HACK-Ai competition held by IIT Bombay.


Beyond software development, I find enjoyment in playing sports. This not only reflects my dedication but also highlights my ability to work effectively within a team.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "IIT BOMBAY HACK AI FINALIST",
    description: `Led a team in developing a AI agent that can manage and optimze personal schedules. The agent can intelligently handle appointments and set reminders based on users past preferences.`,
    technologies: ["Javascript", "React.js", "NLP", "mongoDB"],
  },
  {
    year: "2023",
    role: "Winner in Prototest Hackathon [KDKCOE Nagpur]",
    description: `Led a team in developing an app called "Road Buddy," designed to address the daily challenges people face while traveling. Road Buddy is a vehicle towing app that enables users to share and request rides easily, making their journeys more convenient and stress-free.`,
    technologies: ["Kotlin", "Firebase", "Google Maps API"],
  },
  {
    year: "2023",
    role: "Got appreciated in New India Vibrant Hackathon",
    description: `I led a team in developing a cross-platform mobile application focused on ensuring public safety. This app allows users to discreetly record videos of any suspicious or mischievous behavior happening nearby. In case of an emergency, these videos can be sent directly to police headquarters without revealing the user's identity, ensuring both safety and anonymity.`,
    technologies: ["Flutter", "Firebase", "Google Maps API"],
  },
];

export const PROJECTS = [
  {
    title: "Food Delivery Website",
    image: food,
    description:
      "A fully functional food delivery website with features like selectiong product, food cart, and user authentication, online payment.",
    technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
  },
  {
    title: "Trading Automation Platform",
    image: project4,
    description:
      "A platform that simplify the process of buying or selling stocks by enabling users to execute trades across all linked accounts simultaneously with just one click",
    technologies: ["React.js", "Flask", "MongoDB", "Auth0"],
  },
  {
    title: "Easy Notes App",
    image: project2,
    description:
      "An application for managing semester Notes with ease, with features such as viewing the pdf's, assignment's, and also uploading it.",
    technologies: ["Kotlin", "XML", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
