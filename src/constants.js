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
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import powerbiLogo from './assets/tech_logo/powerbi.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import seabornLogo from './assets/tech_logo/seaborn.png';

// Experience Section Logo's
import webLogo from './assets/company_logo/web_logo.jpg';

// Education Section Logo's
import rvitLogo from './assets/education_logo/rvit_logo.png';
import cbseLogo from './assets/education_logo/cbse_logo.jpg';

// certificates
import weblogo from "./assets/certificates/web_logo.jpg"
import ibmlogo from "./assets/certificates/ibm.png"
import datalogo from "./assets/certificates/data.jpg"
import onelogo from "./assets/certificates/one.webp"
import qmlogo from "./assets/certificates/qm.jpg"
import hplogo from "./assets/certificates/hplife.png"

// Project Section Logo's
import netflixLogo from './assets/work_logo/netflix.png';
import pizzaLogo from './assets/work_logo/pizza.png';
import quizLogo from './assets/work_logo/quiz.png';
import ticLogo from './assets/work_logo/tic.png';
import virtualLogo from './assets/work_logo/virtual.png';
import wanderlustLogo from './assets/work_logo/wanderlust.png';
import movieLogo from './assets/work_logo/movie.png';
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
    title: 'Data Analysis',
    skills: [
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Numpy', logo: numpyLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'Power BI', logo: powerbiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Core Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Jupyter Notebook', logo: jupyterLogo },
    ],
  },
 
];

  export const experiences = [
    {
      id: 0,
      img: webLogo,
      role: " React.Js ",
      company: "Xtrude engineers",
      date: " 25 Aug 2025 - 13 Sep 2025",
      desc: "Assisted in developing interactive and responsive user interfaces using React.js while gaining hands-on experience in modern frontend development. Worked with reusable components, managed state efficiently, integrated RESTful APIs, and collaborated with team members to enhance application usability and performance in an agile learning environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: webLogo,
      role: "Web Desigining ",
      company: "Xtrude engineers",
      date: "30 Sep 2024- 18 Oct 2024",
      desc: "Supported the development of visually appealing and user-friendly websites as a Web Designing Trainee. Gained practical experience in HTML, CSS, JavaScript, and Bootstrap to create responsive layouts and enhance website functionality. Collaborated with team members to implement modern design practices, improve user experience, and ensure cross-browser compatibility while delivering high-quality web solutions.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rvitLogo,
      school: "RV Institute Of Technology,Bijnor(AKTU University)",
      date: "2022-2026",
      grade: "8.24 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) from RV Institute of Technology, Bijnor (2022-2026), maintaining a CGPA of 8.24. Throughout my academic journey, I have built a strong foundation in computer science and engineering concepts, including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems,Data Analysis, Web Development, and Software Engineering. I have actively participated in technical workshops and projects that enhanced my practical knowledge, problem-solving abilities, and teamwork skills, contributing significantly to my technical and professional development.",
      degree: "Bachelor Of Technology- B.Tech.",
    },
    {
      id: 1,
      img: cbseLogo,
      school: "Sarang Convent School,Dhampur",
      date: "2021-2022",
      grade: "86%",
      desc: "I completed my Intermediate (CBSE-XII) from Sarang Convent School, Dhampur (2021-2022) with an overall score of 86%, specializing in the PCM (Physics, Chemistry, Mathematics) stream. This academic background strengthened my analytical thinking, numerical ability, and problem-solving skills. Studying PCM built a solid foundation for my engineering journey and developed my logical approach to tackling complex concepts, while my participation in school activities enhanced my communication, discipline, and teamwork abilities",
      degree: "Intermediate(CBSE)- XII",
    },
    {
      id: 2,
      img: cbseLogo,
      school: "Sarang Convent School,Dhampur",
      date: "2019-2020",
      grade: "83%",
      desc: "I completed my High School (CBSE-X) from Sarang Convent School, Dhampur (2019–2020) with an overall score of 83%. During my secondary education, I developed a strong academic foundation across core subjects, which enhanced my analytical thinking and learning abilities. This phase played a crucial role in shaping my discipline, curiosity, and dedication toward academics, preparing me for higher studies and future career goals.",
      degree: "High School(CBSE)- X",
    },

  ];

export const certificates = [
  {
    id: 1,
    img: datalogo,
    title: "Mastering Data Magic:Power Bi+ Tableau +SQL",
    issuer: "Udemy",
    date: "10 Feb 2026",
   desc: "Learned SQL, Power BI, and Tableau to analyze data, design dashboards, and support data-driven decision-making.",
    link: "https://www.udemy.com/certificate/UC-dab70619-01f7-4625-8e64-193a9c8d257e/",
  },
   {
    id: 2,
    img: hplogo,
    title: "Success Mindset",
    issuer: "HP LIFE",
    date: "20 Nov 2025",
   desc: "Developed a growth mindset by learning goal setting, self-motivation, adaptability, and strategies for personal and professional success.",
    link: "https://photos.google.com/documents/ChhTY3JlZW5zaG90cyAmIHJlY29yZGluZ3MiCRIHCgWyAQIYDijkl+a0xDM%3D/photo/AF1QipNp2Mi6K5-LjdzASk8RKPvZudeVeabfnwPJNEwK",
  },
      {
    id: 3,
    img: ibmlogo,
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    date: "12 Nov 2025",
    desc: "Learned the fundamentals of data analytics, including data collection, cleaning, visualization, and deriving insights to support data-driven decision-making.",
    link: "https://www.coursera.org/account/accomplishments/verify/TZ0NNVTHOK16?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 4,
    img: qmlogo,
    title: "Power Bi Workshop",
    issuer: "OfficeMaster",
    date: "9 Nov 2025",
    desc: "Built interactive dashboards in Power BI to analyze data and present meaningful insights.",
    link: "https://oneroadmap.io/skills/python/certificate/CERT-61B03BE0",
  },
  {
    id: 5,
    img: weblogo,
    title: "React.Js",
    issuer: "Xtrude Engineers",
    date: "25 Aug 2025- 13 Sep 2025",
    desc: "Learned React.js fundamentals including components, hooks, routing, and API handling to develop interactive and modern web applications.",
    link: "https://drive.google.com/file/d/1gOCXRDuJG2ACiBjssdGVMyKrSUetnMKr/view",
  },
    {
    id: 6,
    img: datalogo,
    title: "Data Analyst",
    issuer: "Udemy",
    date: "25 Aug 2025",
    desc: "Gained hands-on experience in data analysis by working with datasets, performing data cleaning, creating visualizations, and extracting meaningful insights for business decisions.",
    link: "https://www.udemy.com/certificate/UC-c8301e33-39a1-4188-ba68-e260aba93a21/",
  },
      {
    id: 7,
    img: onelogo,
    title: "Python",
    issuer: "Oneroadmap",
    date: "24 Aug 2025",
    desc: "Learned Python programming fundamentals including   data structures, functions, object-oriented concepts, and   problem-solving to build efficient applications.",
    link: "https://oneroadmap.io/skills/python/certificate/CERT-61B03BE0",
  },

     {
    id: 8,
    img: datalogo,
    title: "MongoDB",
    issuer: "Udemy",
    date: "19 Aug 2025",
    desc: "Acquired practical knowledge of MongoDB, focusing on schema design, querying, indexing, and database performance.",
    link: "https://www.udemy.com/certificate/UC-a15406c1-6966-4c5f-90b5-275108b867be/",
  },
    {
    id: 9,
    img: weblogo,
    title: "Web Desigining",
    issuer: "Xtrude Engineers",
    date: "30 Sep 2024-18 Oct 2024",
    desc: "Learned modern web design principles, creating responsive and user-friendly websites using HTML, CSS, and JavaScript with a focus on UI/UX best practices.",
    link: "https://drive.google.com/file/d/1Ql6xeBH5u6Hr-vmyoUcHnzhsrv_2rrdd/view?usp=drivesdk",
  },
];
  
  export const projects = [
    {
      id: 0,
      title: "Wanderlust ",
      description:
        "Wanderlust is a dynamic  travel website that allows users to explore unique destinations, list properties, and plan memorable trips. The platform features secure user authentication, interactive map integration with Mapbox, image uploads, and review functionality to enhance user engagement. Developed using HTML, CSS, JavaScript, Node.js, Express, EJS, and MongoDB, Wanderlust delivers a responsive and intuitive interface, ensuring a smooth browsing experience across all devices while simplifying travel discovery and accommodation management.",
      image: wanderlustLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.JS","Experss","EJS","Mongodb","mapbox","Atlas", "API"],
      github: "https://github.com/RitikSingh2005/wanderlust-rs",
    },
    {
      id: 1,
      title: "Weather App",
      description:
        "A responsive weather application that provides real-time weather updates for cities worldwide. Users can search any location to view current temperature, humidity, wind speed, and overall weather conditions. Built with React.js and integrated with WeatherAPI, the app delivers accurate data through a clean and intuitive interface, ensuring a smooth user experience across devices while demonstrating efficient API handling and modern frontend development practices.",
      image: weatherLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","WeatherAPI"],
      github: "https://github.com/RitikSingh2005/weather-app",
      

    },
    {
      id: 2,
      title: "Movie App",
      description:
        "A modern movie browsing application that allows users to discover popular films, explore different genres, and access detailed information such as ratings, release dates, and summaries. Integrated with a Movie API, the app fetches real-time data to deliver accurate and engaging content. Built using HTML, CSS, and JavaScript, it features a clean, responsive design and smooth navigation, providing an enjoyable experience for movie enthusiasts while showcasing strong API integration and frontend development skills.",
      image: movieLogo,
      tags: [ " Movie API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/RitikSingh2005/movie-app",
    },
    {
      id: 3,
      title: "Quiz App",
      description:
        "An interactive quiz application developed using only HTML, CSS, and JavaScript that enables users to test their knowledge through engaging multiple-choice questions. The app features real-time score tracking, instant feedback on answers, and a clean, responsive interface for seamless use across devices. It highlights strong core web development skills, including DOM manipulation, event handling, and efficient client-side logic.",
      image: quizLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/RitikSingh2005/quiz-",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe",
      description:
        "A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript that delivers an engaging and interactive gameplay experience. The application features a responsive design, smooth turn-based logic, winner detection, and game reset functionality. It demonstrates strong fundamentals in JavaScript, including DOM manipulation, event handling, and logical problem-solving, while providing users with a clean and enjoyable interface.",
      image: ticLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/RitikSingh2005/tic-tac-toe",
     },
    {
      id: 5,
      title: "Netflix Clone",
      description:
        "A visually engaging Netflix-inspired landing page developed using HTML and CSS that replicates the look and feel of the popular streaming platform. The project focuses on modern layout techniques, responsive design, and clean UI elements to create an immersive browsing experience. It showcases strong frontend styling skills, including flexbox, grid, and effective use of typography and visual hierarchy.",
      image: netflixLogo,
      tags: ["HTML", "CSS",],
      github: "https://github.com/RitikSingh2005/netflix-clone",
    },
    {
      id: 6,
      title: "Virtual Assistant",
      description:
        "A smart virtual assistant web application developed using HTML, CSS, and JavaScript that responds to user commands through voice and text interactions. Integrated with browser-based APIs, it can perform tasks such as searching the web, opening applications, fetching information, and providing quick responses.",
      image: virtualLogo,
      tags: ["HTML", "CSS", "JavaScript","API"],
      github: "https://github.com/RitikSingh2005/virtual-assistant",
    },
    {
      id: 7,
      title: "Pizza Sales",
      description:
        "A data analysis project focused on extracting meaningful insights from pizza sales data using MySQL. The project involves importing CSV files into MySQL Workbench, performing advanced SQL queries, and analyzing key metrics such as total revenue, best-selling pizzas, order trends, and customer preferences. It demonstrates strong skills in data handling, query optimization, and business intelligence, helping transform raw data into actionable insights for better decision-making.",
      image: pizzaLogo,
      tags: ["MySQL","MySQL Workbench","CSV Files"],
      github: "https://github.com/RitikSingh2005/pizza-sales-sql",
    },
  ];  