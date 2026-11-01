import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const contacts = [
  {
    name: 'Email',
    detail: 'vinaykumartakankhar@gmail.com',
    href: 'mailto:vinaykumartakankhar@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/vinaykumar-takankhar-a7672833a/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    detail: 'Explore my projects',
    href: 'https://github.com/vinaykumar0710',
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2>Let's Build Something <span>Meaningful.</span></h2>
            <p className="contact-description">
              I'm open to opportunities in Cloud Engineering, DevOps and
              Infrastructure Automation. Feel free to reach out and connect.
            </p>

            <div className="contact-links">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    className="contact-card"
                    href={contact.href}
                    key={contact.name}
                    target={contact.name === 'Email' ? undefined : '_blank'}
                    rel={contact.name === 'Email' ? undefined : 'noreferrer'}
                  >
                    <div className="contact-icon">
                      <Icon size={21} />
                    </div>
                    <div className="contact-card-text">
                      <h3>{contact.name}</h3>
                      <p>{contact.detail}</p>
                    </div>
                    <ArrowUpRight size={18} className="contact-arrow" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-content">
          <a href="#home" className="footer-logo">Portfolio.</a>
          <p>© {new Date().getFullYear()} Vinaykumar Takankhar. All rights reserved.</p>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
