import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import "./styles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Close menu on link click

  return (
    <nav className="navbar">
      <span className="logo">Daksh Gulati</span>

      {/* Hamburger Button */}
      <button className="hamburger md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>About</Link>
        <Link className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`} to="/experience" onClick={closeMenu}>Experience</Link>
        <Link className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects" onClick={closeMenu}>Projects</Link>
        <Link className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`} to="/skills" onClick={closeMenu}>Skills</Link>
        <Link className={`nav-link ${location.pathname === "/certifications" ? "active" : ""}`} to="/certifications" onClick={closeMenu}>Certifications</Link>
        <Link className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`} to="/resume" onClick={closeMenu}>Resume</Link>
        <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};
const Section = ({ title, content }) => (
  <motion.section className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2 className="section-title">{title}</h2>
    <p className="section-content">{content}</p>
  </motion.section>
);

const About = () => (
  <Section 
    title="About Me"
    content={
      <>
        <p>
          I am Daksh Gulati, an Aspiring Data Scientist with a strong analytical mindset and a passion for transforming complex data into actionable insights. 
          With hands-on experience in Machine Learning, Data Visualization, and AI, I have worked on diverse projects, including real-time emotion detection 
          and COVID-19 diagnosis using deep learning.
        </p>
        <p>
          Currently, I work as a Program, Project, and Service Management New Associate at Accenture, where I specialize in automating processes, 
          building dashboards, and leveraging AI-driven insights to enhance operational efficiency.
        </p>
        <p>
          Previously, I interned at F13 Technologies and Genpact, applying Natural Language Processing (NLP), Sentiment Analysis, and Power BI 
          to solve real-world business challenges.
        </p>
        <p>
          Beyond my professional experience, I have earned multiple certifications from leading MOOC platforms, further strengthening my expertise in 
          Artificial Intelligence, Machine Learning, and Data Science. I also have a strong portfolio of projects spanning predictive modeling, 
          deep learning, and business intelligence solutions.
        </p>
        <p>
          My skills include Python, R, JavaScript, Power BI, Tableau, TensorFlow, and MySQL, and I constantly explore the latest advancements in AI 
          and Data Science to stay ahead in this rapidly evolving field.
        </p>
        <p>
          A notable achievement in my academic journey was securing second place in a Data Science competition conducted at my college, where I demonstrated 
          my ability to extract meaningful insights from complex datasets.
        </p>
        <p>
          With a strong foundation in data-driven problem-solving, I am eager to contribute innovative solutions and drive impactful decisions using 
          data science and artificial intelligence.
        </p>
      </>
    }
  />
);

const Experience = () => (
  <Section 
    title="Professional and Internship Experience"
    content={
      <>
        <h1>PROFESSIONAL EXPERIENCE</h1>
        <h2>Program, Project, and Service Management New Associate | Accenture</h2>
        <p><strong>Jun 2024 – Present</strong></p>
        <p>At Accenture, I have been instrumental in optimizing onboarding processes and enhancing team efficiency by creating data-driven visualizations and automating routine tasks. My work focuses on the following:</p>

        <h3>Prepared Dashboards and Reports:</h3>
        <p>Created detailed dashboards and reports that provided key insights into onboarding data. These visualizations helped the team track progress and identify trends, ensuring that the onboarding process was efficient and effective.</p>

        <h3>Automated Processes:</h3>
        <p>Developed a web application using Flask, HTML, and CSS to automate the creation of headcount files. This automation reduced manual effort, minimized errors, and sped up the process, allowing the team to focus on more strategic tasks.</p>

        <h1>INTERNSHIP EXPERIENCE</h1>

        <h2>Research Intern | F13 Technologies</h2>
        <p><strong>Jan 2024 – April 2024</strong></p>
        <p>During my internship at F13 Technologies, I was responsible for in-depth social media monitoring for a prominent government entity. My tasks included:</p>

        <h3>Social Media Monitoring:</h3>
        <p>Conducted daily in-depth social media monitoring to track the public response to various government initiatives, providing valuable insights that helped shape communication strategies.</p>

        <h3>Applied Sentiment Analysis and NLP:</h3>
        <p>Leveraged sentiment analysis and natural language processing (NLP) techniques on real-time data to gauge public sentiment and study responses effectively.</p>

        <h3>Developed Dashboards:</h3>
        <p>Created visually appealing and user-friendly dashboards that presented key data in a digestible format, ensuring stakeholders could easily interpret and act on the findings.</p>

        <h2>Consultant Intern | Genpact</h2>
        <p><strong>May 2023 – Jul 2023</strong></p>
        <p>At Genpact, I was involved in working with multiple business intelligence tools and contributing to several impactful reporting tasks:</p>

        <h3>Worked with BI Tools:</h3>
        <p>Worked with tools like Visual Studio's Analysis Services, Power BI Desktop, Power BI Service, Azure SQL DB, and Azure Analysis Service, gaining hands-on experience in analyzing and visualizing business data.</p>

        <h3>Created Impactful Reports:</h3>
        <p>Developed three major reports using Power BI:</p>
        <ul>
          <li>Budget vs. Actual report</li>
          <li>Supervisor Headcount report</li>
          <li>Hiring Data report</li>
        </ul>
        <p>These reports provided valuable insights into business operations, helping the company make informed decisions.</p>

      </>
    }
  />
);

const projectsData = [
  {
    title: "Emotion Detection System",
    description: "A real-time emotion detection system using OpenCV, DeepFace, and Tkinter, integrating face detection and emotion recognition with a user-friendly GUI.",
    techStack: ["OpenCV", "DeepFace", "Tkinter", "Python"],
    githubLink: "https://github.com/Daksh0810/Emotion-Detection-System",
  },
  {
    title: "AI Chatbot using Gemma API",
    description: "Developed an AI chatbot using the Gemma API to provide automated responses to user queries, implementing NLP techniques.",
    techStack: ["Gemma API", "NLP", "Python"],
    githubLink: "https://github.com/Daksh0810/Chatbot-using-Gemma-API",
  },
  {
    title: "COVID-19 Detection from Chest X-rays",
    description: "Created a CNN model to predict COVID-19 using chest X-ray images.",
    techStack: ["Python", "CNN", "TensorFlow"],
    githubLink: "https://github.com/Daksh0810/COVID-19-Prediction",
  },
  {
    title: "Simple Calculator",
    description: "A web application for a simple calculator using HTML, CSS, and JavaScript with a user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Daksh0810/Calculator",
  },
  {
    title: "Iris Dataset Sepal Length Prediction",
    description: "Used simple linear regression to predict sepal length in the Iris dataset and visualized results.",
    techStack: ["Python", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/Daksh0810/Simple-Linear-Regression",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Developed a CNN model to recognize handwritten digits from the MNIST dataset.",
    techStack: ["Python", "CNN", "TensorFlow"],
    githubLink: "https://github.com/Daksh0810/Image-Processing-using-CNN",
  },
];

// Inline Projects Component
const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Repo"
      >
        <motion.div
          key={index}
          className="project-card"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
        </a>
      ))}
    </div>
  </div>
);

const skillsData = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "scikit-learn", logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Power BI", logo: "/PowerBI.png" },
      { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "Microsoft Excel", logo: "/Excel.png" },
      { name: "Matplotlib", logo: "https://matplotlib.org/stable/_static/logo2.svg" },
      { name: "Seaborn", logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", logo: "https://www.r-project.org/logo/Rlogo.png" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
];

const Skills = () => (
  <div className="skills-container flex flex-col justify-center items-center p-10 min-h-screen bg-gray-900" style={{ paddingTop: '70px', textAlign: "center" }}>
    <h1>Skills</h1>
    <div className="w-full max-w-6xl space-y-12">
      {skillsData.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4 text-left">{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <Section 
    title="Contact Me"
    content={
      <form 
        className="contact-form"
        action="https://formspree.io/f/xpwqkjrg"  // Replace with your Formspree endpoint
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
        <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
        <textarea name="message" placeholder="Your Message" required className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    }
  />
);

const Resume = () => (
  <motion.section 
    className="section flex flex-col items-center text-center bg-gray-900 text-white py-12 rounded-lg shadow-lg"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <h2 className="section-title text-4xl font-semibold mb-6 tracking-wide">Resume</h2>
    <p className="section-content text-xl text-gray-300 mb-8 max-w-2xl">
      You can view or download my resume using the buttons below.
    </p>
    <div className="flex flex-col items-center gap-4"> {/* Stacking buttons vertically */}
      <button 
        onClick={() => window.open(process.env.PUBLIC_URL + "/Daksh Gulati Updated Resume - Feb 2025.pdf", "_blank")}
        className="downloadbutton"
      >
        📄 View Resume
      </button>
      <button 
        onClick={() => {
          const link = document.createElement("a");
          link.href = process.env.PUBLIC_URL + "/Daksh Gulati Updated Resume - Feb 2025.pdf";
          link.download = "Daksh_Gulati_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="downloadbutton"
      >
        ⬇️ Download Resume
      </button>
    </div>
  </motion.section>
);

const Certifications = () => (
  <div className="certifications-container flex flex-col justify-center items-center p-10 min-h-screen bg-gray-900" style={{ paddingTop: '70px', textAlign: "center" }}>
    <h1 className="text-4xl font-bold text-cyan-400 mb-10">Certifications</h1>

    <div className="certifications-grid w-full max-w-6xl">
      {certificationsData.map((cert, idx) => (
        <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
          <h2 className="cert-title">{cert.title}</h2>
          <p className="cert-date">{cert.issueDate}</p>
        </a>
      ))}
    </div>
  </div>
);

const certificationsData = [
  { title: "An Introduction to Generative AI", issueDate: "February 2025", link: "https://skillsoft.digitalbadges.skillsoft.com/231b6abe-63fc-4a53-93d0-15886b48dc23#acc.uWiqJo14" },
  { title: "Artificial Intelligence and Machine Learning", issueDate: "October 2024", link: "https://skillsoft.digitalbadges.skillsoft.com/2a22f052-6ca8-40f5-a28d-a29ca16a8c1f#acc.rexkh1VB" },
  { 
    title: "Generative AI Landscape", 
    issueDate: "July 2024", 
    link: "/Generative AI Landscape Course Certificate.pdf", // Local path or hosted image link
    isImage: true // Flag to indicate it's an image
  },
  { 
    title: "Introduction to Business Intelligence ", 
    issueDate: "May 2024", 
    link: "/Introduction to Business Intelligence Certificate.pdf", // Local path or hosted image link
    isImage: true // Flag to indicate it's an image
  },
  { title: "Application of Data Analysis in Business with R Programming", issueDate: "August 2023", link: "https://www.coursera.org/account/accomplishments/certificate/8NCCEU28FYV6" },
  { title: "Learning Microsoft Power BI", issueDate: "June 2023", link: "/Power BI Course Certificate.pdf", isImage:true },
  { title: "Excel Basics for Data Analysis", issueDate: "August 2022", link: "https://www.coursera.org/account/accomplishments/certificate/AC4VXNKN6F8E" }
];

const Footer = () => (
  <footer className="footer bg-gray-800 text-white text-center py-4 mt-8">
    <div className="social-icons">
      <a href="https://github.com/Daksh0810" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/daksh-gulati-33596621a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content-container"> 
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;