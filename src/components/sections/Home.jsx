import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';
import Terminal from '../Terminal';
import './Home.css';

const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/vinaykumar-takankhar-a7672833a/',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/vinaykumar0710',
    label: 'GitHub',
  },
  {
    icon: FaEnvelope,
    url: 'mailto:vinaykumartakankhar@gmail.com',
    label: 'Email',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/vinaykumartakankhar/',
    label: 'Instagram',
  },
];

export default function Home() {
  return (
    <section id="home" className="home-section grid-background">
      <div className="container home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="home-intro">Hello, I'm</p>

          <h1>Vinaykumar Takankhar</h1>

          <h2>Cloud &amp; DevOps Engineer</h2>

          <p className="home-description">
            Building reliable cloud infrastructure, automated
            deployment pipelines and scalable applications.
          </p>

          <div className="home-buttons">
            <a
              href={`${import.meta.env.BASE_URL}Vinaykumar_Takankhar_resume.pdf`}
              className="home-button button-dark"
              download="Vinaykumar_Takankhar_resume.pdf"
            >
              Download Resume
            </a>

            <a href="#contact" className="home-button button-light">
              Contact Info
            </a>
          </div>

          <div className="home-socials">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
              >
                <Icon size={21} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="home-terminal"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}



