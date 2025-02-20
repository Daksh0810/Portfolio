import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import "./styles.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: "/", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/certifications", label: "Certifications" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar flex justify-between items-center p-4 shadow-md bg-white relative z-50">
      <span className="logo text-xl font-bold">Daksh Gulati</span>

      {/* Desktop Navbar - visible only on md and larger */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            className={`nav-link ${
              location.pathname === link.path
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            } hover:text-blue-500`}
            to={link.path}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Icon - visible only on small screens */}
      <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`block py-2 px-4 ${
                location.pathname === link.path
                  ? "text-blue-500 font-semibold"
                  : "text-gray-700"
              } hover:bg-gray-100`}
              to={link.path}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
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

const Footer = () => (
  <footer className="footer bg-gray-800 text-white text-center py-4 mt-8">
    <div className="social-icons">
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
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
          <Route path="/experience" element={<Section title="Experience" content="New Associate at Accenture | Research Intern at F13 Technologies | Consultant Intern at Genpact." />} />
          <Route path="/projects" element={<Section title="Projects" content="Emotion Detection System, AI Chatbot, COVID-19 Detection, Image Processing using CNN." />} />
          <Route path="/skills" element={<Section title="Tech Stack" content="Python, R, JavaScript, TensorFlow, Keras, Power BI, Tableau." />} />
          <Route path="/certifications" element={<Section title="Certifications" content="Generative AI, AI & ML, Business Intelligence, Power BI, R Programming." />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;