import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'Self-Healing CI/CD Deployment Pipeline',
    image: `${import.meta.env.BASE_URL}images/project-cicd.png`,
    description: 'Built an automated deployment system using blue-green deployment, application health checks and rollback mechanisms to recover from unhealthy releases and maintain a stable application version.',
    technologies: ['Jenkins', 'Docker', 'Docker Compose', 'Nginx', 'Python', 'Flask', 'PowerShell'],
    tags: ['CI/CD', 'Blue-Green Deployment', 'Automation', 'Rollback'],
    github: 'https://github.com/vinaykumar0710/self-healing-cicd-pipeline',
    details: '/projects/self-healing-cicd',
  },
  {
    title: 'Infrastructure as Code Kubernetes Platform',
    image: `${import.meta.env.BASE_URL}images/project-kubernetes.png`,
    description: 'Built a repeatable Kubernetes application platform using Terraform, Docker and Helm, with infrastructure provisioning, application deployment and deployment verification.',
    technologies: ['Terraform', 'Kubernetes', 'kind', 'Docker', 'Helm'],
    tags: ['Infrastructure as Code', 'Kubernetes', 'Containerisation', 'Automation'],
    details: '/projects/iac-kubernetes-platform',
    github: 'https://github.com/vinaykumar0710/iac-kubernetes-platform',
  },
  {
    title: 'Observability & Incident Diagnosis',
    image: `${import.meta.env.BASE_URL}images/project-observability.png`,
    description: 'Developed an observability environment to monitor application behaviour, collect telemetry and support troubleshooting through metrics, dashboards, logs and distributed tracing.',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Docker Compose'],
    tags: ['Observability', 'Monitoring', 'Incident Diagnosis', 'Troubleshooting'],
    details: '/projects/observability',
    github: 'https://github.com/vinaykumar0710/observability-ai-diagnosis',
  },
  {
    title: 'MESH-TRACE — Smart Crash Detection System',
    image: `${import.meta.env.BASE_URL}images/mesh-trace-logo.png`,
    description: 'Contributed to an IoT-based crash detection system using vehicle-to-vehicle and vehicle-to-infrastructure communication, including AWS cloud infrastructure for telemetry ingestion, crash data storage and notification workflows.',
    technologies: ['AWS IoT Core', 'Lambda', 'DynamoDB', 'S3', 'SNS', 'API Gateway', 'Cognito', 'Raspberry Pi', 'ESP32', 'LoRa'],
    tags: ['IoT', 'AWS Cloud', 'Embedded Systems', 'LoRa Communication'],
    details: '/projects/mesh-trace',
    github: 'https://github.com/mesh-trace/Mesh-Trace',
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={`${project.title} project visual`} />
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>

        <div className="project-tech">
          <span className="project-tech-label">Technologies</span>
          <p>{project.technologies.join(' · ')}</p>
        </div>

        <div className="project-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="project-button project-button-dark">
              GitHub Code
            </a>
          )}
          <Link to={project.details} className="project-button project-button-light">
            Project Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Explore My Work</p>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}




