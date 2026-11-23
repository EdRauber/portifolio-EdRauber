import { Button, Card, Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProjectGallery } from '../components/ProjectGallery.jsx';
import { PortfolioImage } from '../components/PortfolioImage.jsx';
import { ProjectDetails, ProjectMeta } from '../components/ProjectDetails.jsx';
import { experienceFields, profile, projects, skills } from '../data/portfolio.js';

function ExperienceCard({ project }) {
  return (
    <Card component="article" className="experience-card">
      <div>
        <Typography component="h3" className="experience-title">{project.name}</Typography>
        <ProjectMeta project={project} />
      </div>
      <dl className="experience-details">
        {experienceFields.map(({ key, label }) => (
          <div key={key}>
            <Typography component="dt" variant="subtitle2" color="primary">{label}</Typography>
            <Typography component="dd" className="body-copy">{project.experience[key]}</Typography>
          </div>
        ))}
      </dl>
      <ProjectDetails project={project} />
    </Card>
  );
}

export function Home() {
  const featured = projects.find((project) => project.id === 'cuida-mais');

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <Typography color="primary" className="hero-education">{profile.education}</Typography>
          <Typography component="h1" id="home-title" className="hero-title">{profile.name}</Typography>
          <Typography className="lead-copy">{profile.bio}</Typography>
          <Button component={Link} to="/projects" variant="contained">Ver projetos</Button>
        </div>
        <Card className="profile-card">
          <PortfolioImage className="profile-photo" image={profile.photo} />
        </Card>
      </section>

      <section className="home-section" aria-labelledby="skills-title">
        <Typography component="h2" id="skills-title" className="section-title">Habilidades</Typography>
        <div className="skills-grid">
          {skills.map((skill) => (
            <Card component="article" className="skill-card" key={skill.name}>
              <Typography component="h3" className="skill-title">{skill.name}</Typography>
              <Typography className="body-copy">{skill.tools.join(' · ')}</Typography>
            </Card>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="experience-title">
        <Typography component="h2" id="experience-title" className="section-title">Experiências</Typography>
        <Typography className="body-copy">O que fiz e aprendi nos projetos acadêmicos.</Typography>
        <div className="experiences-grid">
          {projects.map((project) => <ExperienceCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="home-section" aria-labelledby="featured-title">
        <Typography component="h2" id="featured-title" className="section-title">Projeto em destaque</Typography>
        <Card component="article" className="featured-card">
          <ProjectGallery project={featured} />
          <div className="featured-copy">
            <Typography component="p" variant="subtitle2" color="primary">Projeto acadêmico · PUC Minas</Typography>
            <Typography component="h3" className="featured-title">{featured.name}</Typography>
            <ProjectMeta project={featured} />
            <Typography className="body-copy">{featured.description}</Typography>
            <div className="tech-list" aria-label="Tecnologias">
              {featured.technologies.map((technology) => <Chip label={technology} key={technology} />)}
            </div>
            <Button component={Link} to="/projects" variant="outlined">Ver projetos</Button>
          </div>
        </Card>
      </section>
    </>
  );
}
