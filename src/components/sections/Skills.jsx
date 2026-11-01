import {
  SiGooglecloud,
  SiJenkins,
  SiGithubactions,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiGnubash,
  SiYaml,
  SiLinux,
  SiGit,
  SiGithub,
} from 'react-icons/si';

import './Skills.css';

const skills = [
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'AWS', mark: 'aws' },
      { name: 'Microsoft Azure', mark: 'AZ' },
      { name: 'OCI', mark: 'OCI' },
      { name: 'GCP', icon: SiGooglecloud },
    ],
  },
  {
    category: 'CI/CD & Automation',
    items: [
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Argo CD', mark: 'ARGO' },
    ],
  },
  {
    category: 'Containers & Orchestration',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Helm', icon: SiHelm },
      { name: 'Amazon EKS', mark: 'EKS' },
    ],
  },
  {
    category: 'Infrastructure as Code',
    items: [
      { name: 'Terraform', icon: SiTerraform },
      { name: 'CloudFormation', mark: 'CF' },
    ],
  },
  {
    category: 'Monitoring & Observability',
    items: [
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Amazon CloudWatch', mark: 'CW' },
      { name: 'Amazon CloudTrail', mark: 'CT' },
    ],
  },
  {
    category: 'Programming & Scripting',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Bash', icon: SiGnubash },
      { name: 'YAML', icon: SiYaml },
    ],
  },
  {
    category: 'Operating Systems',
    items: [
      { name: 'Linux', icon: SiLinux },
      { name: 'Windows', mark: 'WIN' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
];

function SkillItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="skill-item">
      <div className={`skill-icon ${item.mark === 'aws' ? 'aws-mark' : ''}`}>
        {Icon ? <Icon /> : item.mark === 'aws' ? 'aws' : item.mark}
      </div>
      <span>{item.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Explore My</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              className="skill-card"
              key={group.category}
              style={{ '--card-index': index }}
            >
              <h3>{group.category}</h3>

              <div className="skill-items">
                {group.items.map(item => (
                  <SkillItem key={item.name} item={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
