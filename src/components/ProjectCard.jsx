import { useState } from 'react';
import { Link } from 'react-router-dom';
import TechStack from './TechStack.jsx';
import './ProjectCard.css';

function ProjectCard({ id, title, description, techStack, image, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>

      {/* techStack is drilled one level further down into TechStack */}
      <TechStack stack={techStack} />

      <p className={expanded ? 'description expanded' : 'description'}>
        {description}
      </p>

      <div className="project-actions">
        <button onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
        <Link to={`/projects/${id}`}>Open project page &rarr;</Link>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Source &rarr;
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
