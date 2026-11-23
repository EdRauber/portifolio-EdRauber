import { Card, Typography } from '@mui/material';
import { ProjectGallery } from '../components/ProjectGallery.jsx';
import { ProjectDetails, ProjectMeta } from '../components/ProjectDetails.jsx';
import { projects } from '../data/portfolio.js';
import timelineMark from '../assets/marco-projeto.svg';

function ProjectCard({ project }) {
  return (
    <Card component="article" className="timeline-card">
      <div className="timeline-copy">
        <ProjectMeta project={project} />
        <Typography component="h2" className="project-title">{project.name}</Typography>
        {project.description && <Typography className="body-copy">{project.description}</Typography>}
        {project.features?.length > 0 && (
          <>
            <Typography component="h3" className="features-title">Principais funcionalidades</Typography>
            <ul className="project-features">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </>
        )}
        {project.statusNote && <Typography className="body-copy">{project.statusNote}</Typography>}
        <ProjectDetails project={project} />
      </div>
      <ProjectGallery project={project} />
    </Card>
  );
}

export function Projects() {
  return (
    <>
      <div className="projects-intro">
        <Typography component="h1" className="projects-title">Projects</Typography>
      </div>
      <ol className="timeline" role="list" aria-label="Linha do tempo dos projetos">
        {projects.map((project) => (
          <li className="timeline-entry" key={project.id}>
            <img src={timelineMark} alt="" className="timeline-dot" />
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </>
  );
}
