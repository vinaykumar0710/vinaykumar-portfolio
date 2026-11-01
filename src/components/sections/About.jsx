import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Get To Know More</p>
          <h2>About Me</h2>
        </div>

        <div className="about-container">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/profile-photo.png"
              alt="Vinaykumar Takankhar"
              className="about-image"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Connecting Technologies to Build Complete Systems</h3>

            <p>
              I am a Cloud &amp; DevOps Engineer working across Cloud
              Computing, DevOps and Infrastructure Automation, with a
              focus on how cloud infrastructure is designed, provisioned
              and managed, and how applications move from development
              to deployment.
            </p>

            <p>
              Through hands-on projects, I've worked with AWS, Docker,
              Kubernetes, Terraform and CI/CD automation, building
              deployment pipelines, Kubernetes environments and
              observability solutions. I've also contributed to the AWS
              cloud infrastructure and web application of an IoT-based
              crash detection system.
            </p>

            <p>
              I believe effective engineering goes beyond knowing
              individual tools. It's about understanding how
              infrastructure, applications, automation and monitoring
              work together to create reliable systems. That's the
              approach I bring to every project I build and every
              problem I solve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
