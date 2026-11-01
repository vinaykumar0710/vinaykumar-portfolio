import { motion } from 'framer-motion';
import './Badges.css';

const badges = [
  {
    title: 'AWS Partner Accreditation (Technical)',
    issuer: 'Amazon Web Services',
    image: '/images/aws-technical-accreditation-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/b6d95599-3983-4582-9ce7-ab005171baea',
  },
  {
    title: 'AWS Partner Cloud Economics',
    issuer: 'Amazon Web Services',
    image: '/images/aws-cloud-economics-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/75dbbff2-4fdb-4b1b-af93-8f4f02492406',
  },
  {
    title: 'AWS Partner Digital Sovereignty',
    issuer: 'Amazon Web Services',
    image: '/images/aws-digital-sovereignty-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/49d8a49b-9b51-469f-b11a-0a6ae0768b4a',
  },
  {
    title: 'AWS Partner Generative AI Essentials',
    issuer: 'Amazon Web Services',
    image: '/images/aws-generative-ai-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/517c2cbc-c44f-4c41-a29e-3d327411405f',
  },
  {
    title: 'Harness Certified Continuous Delivery & GitOps Developer',
    issuer: 'Harness',
    image: '/images/harness-cd-gitops-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/94d713f5-0cba-4194-aae5-461a5887f923',
  },
  {
    title: 'Linux Foundation LFS162 – Introduction to DevOps and SRE',
    issuer: 'Linux Foundation',
    image: '/images/linux-foundation-lfs162-badge.png',
    url: 'https://www.credly.com/earner/earned/badge/5f9858fb-98c3-4ebc-9baf-2c93ca022a6d',
  },
  {
    title: 'OCI Foundations Associate',
    issuer: 'Oracle',
    image: '/images/oracle-foundations-badge.png',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=D2A81EFA80D5FFF005FC7142DF170D1DF57681E4C427CB61AEE992A436584865',
  },
  {
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle',
    image: '/images/oracle-ai-foundations-badge.png',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E2D5FDDFC22BD2BDF15C2E6AE3056CD9C5AA0AB7AD91F66C56FBC2F6886BD563',
  },
  {
    title: 'OCI Generative AI Professional',
    issuer: 'Oracle',
    image: '/images/oracle-generative-ai-badge.png',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=AAD1BE8172AAB44269C4C6CBABE0C9AFF1D6D5D9742C9ED2B559F9CCE6A3DB2D',
  },
];

function Badges() {
  return (
    <section id="badges" className="section badges-section">
      <div className="container">
        <div className="section-heading">
          <span>PROFESSIONAL RECOGNITION</span>
          <h2>Badges & Achievements</h2>
        </div>

        <div className="badges-grid">
          {badges.map((badge, index) => (
            <motion.a
              className="badge-card"
              key={badge.title}
              href={badge.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Verify ${badge.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
            >
              <div className="badge-image">
                <img src={badge.image} alt={badge.title} loading="lazy" />
              </div>

              <div className="badge-info">
                <h3>{badge.title}</h3>
                <p>{badge.issuer}</p>
                <span>Verify credential ↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Badges;

