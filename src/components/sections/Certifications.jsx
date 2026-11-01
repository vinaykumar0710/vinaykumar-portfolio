import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: 'AWS Partner: Containers on AWS (Technical)',
    issuer: 'Amazon Web Services',
    date: 'November 9, 2025',
    image: '/images/aws-containers-certificate.png',
  },
  {
    title: 'AWS Partner: Migrating Workloads to AWS (Technical)',
    issuer: 'Amazon Web Services',
    date: 'November 20, 2025',
    image: '/images/aws-migrating-workloads-certificate.png',
  },
  {
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    date: 'November 9, 2025',
    image: '/images/aws-technical-essentials-certificate.png',
  },
  {
    title: 'Amazon CloudWatch – Troubleshooting',
    issuer: 'Amazon Web Services',
    date: 'October 30, 2026',
    image: '/images/cloudwatch-troubleshooting-certificate.png',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-heading">
          <span>MY LEARNING JOURNEY</span>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.article
              className="certification-card"
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <a
                className="certification-image"
                href={cert.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${cert.title}`}
              >
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <span className="certificate-view">View certificate ↗</span>
              </a>

              <div className="certification-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
