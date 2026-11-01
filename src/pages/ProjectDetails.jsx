import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './ProjectDetails.css';

const projectData = {
  'self-healing-cicd': {
    title: 'Self-Healing CI/CD Deployment Pipeline',
    subtitle: 'Automated deployments with health checks and rollback.',
    image: '/images/project-cicd.png',
    overview: 'A local deployment system designed to identify unhealthy releases and recover automatically. It uses a blue-green deployment approach to switch between application versions while checking application health.',
    architecture: ['Source code', 'Jenkins pipeline', 'Docker image', 'Blue-green application environments', 'Nginx reverse proxy', 'Health checks and rollback'],
    implementation: [
      'Configured a Flask application with a health endpoint.',
      'Containerised the application using Docker and Docker Compose.',
      'Configured blue and green application environments behind Nginx.',
      'Used PowerShell deployment scripts to manage deployment state and health verification.',
      'Implemented rollback to the last known-good release when health checks fail.',
    ],
    features: ['Automated deployment workflow', 'Blue-green release strategy', 'Application health verification', 'Rollback mechanism', 'Containerised application and reverse proxy'],
    challenges: [
      ['Health-check failures', 'Debugged the application health endpoint and corrected the deployment check flow.'],
      ['Deployment script behaviour', 'Corrected PowerShell variable formatting and deployment-state handling.'],
      ['Traffic routing', 'Configured Nginx to route traffic through the active application environment.'],
    ],
    technologies: ['Jenkins', 'Docker', 'Docker Compose', 'Nginx', 'Python', 'Flask', 'PowerShell'],
    github: 'https://github.com/vinaykumar0710/self-healing-cicd-pipeline',
  },
  'iac-kubernetes-platform': {
    github: 'https://github.com/vinaykumar0710/iac-kubernetes-platform',
    title: 'Infrastructure as Code Kubernetes Platform',
    subtitle: 'A repeatable Kubernetes application platform provisioned with Terraform and Helm.',
    image: '/images/project-kubernetes.png',
    overview: 'A local Kubernetes platform project focused on infrastructure provisioning, containerised application deployment and repeatable environment management.',
    architecture: ['Terraform configuration', 'kind Kubernetes cluster', 'Docker application image', 'Helm chart', 'Kubernetes namespace and deployment', 'Service verification and tests'],
    implementation: [
      'Provisioned a local Kubernetes cluster using kind.',
      'Built a Docker image for the application.',
      'Created a Helm chart to package the Kubernetes application resources.',
      'Installed the application into the platform-dev namespace.',
      'Verified application endpoints and ran unit tests.',
    ],
    features: ['Infrastructure as Code workflow', 'Local Kubernetes cluster', 'Container image build', 'Helm-based deployment', 'Deployment and endpoint verification'],
    challenges: [
      ['Repeatable environment setup', 'Used Terraform and kind to define and create the local platform environment.'],
      ['Application packaging', 'Packaged deployment resources in a Helm chart for consistent installation.'],
      ['Deployment validation', 'Verified the deployed application and ran tests after installation.'],
    ],
    technologies: ['Terraform', 'Kubernetes', 'kind', 'Docker', 'Helm'],
  },
  observability: {
    github: 'https://github.com/vinaykumar0710/observability-ai-diagnosis',
    title: 'Observability & Incident Diagnosis',
    subtitle: 'Monitoring application behaviour with metrics, logs and tracing components.',
    image: '/images/project-observability.png',
    overview: 'A containerised observability environment designed to monitor an application and support operational troubleshooting using an observability stack.',
    architecture: ['Sample application', 'Prometheus metrics collection', 'Grafana dashboards', 'Loki log aggregation', 'Tempo distributed tracing', 'Incident investigation'],
    implementation: [
      'Created a sample application and Docker Compose environment.',
      'Configured Prometheus and verified scrape targets.',
      'Added Prometheus rules for monitoring conditions.',
      'Configured Grafana provisioning with a Prometheus data source.',
      'Prepared the environment for log aggregation and distributed tracing with Loki and Tempo.',
    ],
    features: ['Containerised observability environment', 'Prometheus metrics collection', 'Grafana data source provisioning', 'Monitoring rules', 'Logs and tracing components'],
    challenges: [
      ['Monitoring target validation', 'Checked Prometheus targets to verify that configured services were being scraped.'],
      ['Grafana data source setup', 'Verified the provisioned Prometheus data source configuration.'],
      ['Multi-service setup', 'Used Docker Compose to manage the observability services together.'],
    ],
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Docker Compose'],
  },
  'mesh-trace': {
    github: 'https://github.com/mesh-trace/Mesh-Trace',
    title: 'MESH-TRACE — Smart Crash Detection System',
    subtitle: 'IoT-based crash detection for low-connectivity zones.',
    image: '/images/mesh-trace-logo.png',
    overview: 'A team-built IoT crash detection system using vehicle-to-vehicle and vehicle-to-infrastructure communication. My primary contribution focused on AWS cloud infrastructure and the web application.',
    architecture: ['Embedded sensor nodes', 'BLE vehicle-to-vehicle communication', 'ESP32 LoRa relay', 'AWS IoT Core ingestion', 'Lambda processing', 'DynamoDB and S3 storage', 'API Gateway with Cognito authorisation', 'SNS notifications'],
    implementation: [
      'Worked on AWS IoT Core ingestion and IoT Rule integration.',
      'Implemented Lambda-based ingestion and processing.',
      'Used DynamoDB for node state and crash history data.',
      'Integrated S3 for crash-related data storage.',
      'Configured API Gateway HTTP API with a Cognito JWT authorizer.',
      'Worked on the React web application for presenting system data.',
    ],
    features: ['IoT telemetry ingestion', 'Crash event data storage', 'Cloud-based processing', 'Authenticated API access', 'Notification workflow', 'Web-based monitoring interface'],
    challenges: [
      ['API access and browser integration', 'Resolved CORS and Cognito authorisation configuration issues.'],
      ['Data consistency', 'Addressed DynamoDB schema and timestamp mismatches.'],
      ['Cloud data handling', 'Fixed duplicate node handling and S3 object key issues.'],
    ],
    technologies: ['AWS IoT Core', 'AWS Lambda', 'DynamoDB', 'S3', 'SNS', 'API Gateway', 'Cognito', 'React', 'Raspberry Pi', 'ESP32', 'LoRa'],
  },
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/#projects" className="detail-back"><ArrowLeft size={17} /> Back to projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <div className="container">
        <Link to="/#projects" className="detail-back"><ArrowLeft size={17} /> Back to projects</Link>

        <header className="detail-header">
          <p className="detail-eyebrow">PROJECT OVERVIEW</p>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </header>

        <div className="detail-hero-image">
          <img src={project.image} alt={project.title} />
        </div>

        <section className="detail-section">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="detail-section">
          <h2>Architecture & Workflow</h2>
          <ol className="architecture-list">
            {project.architecture.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
            ))}
          </ol>
        </section>

        <section className="detail-section">
          <h2>Technical Implementation</h2>
          <ul>{project.implementation.map(item => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>
          <ul className="detail-feature-list">{project.features.map(item => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="detail-section">
          <h2>Challenges & Solutions</h2>
          <div className="challenge-list">
            {project.challenges.map(([challenge, solution]) => (
              <article key={challenge}>
                <h3>{challenge}</h3>
                <p>{solution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>Technologies Used</h2>
          <div className="detail-tech-list">
            {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
          </div>
        </section>

        <div className="detail-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-button project-button-dark">
              GitHub Repository <ExternalLink size={15} />
            </a>
          )}
          <Link to="/#projects" className="project-button project-button-light">Back to all projects</Link>
        </div>
      </div>
    </main>
  );
}

