import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TechStack from '../components/TechStack.jsx';
import './Projects.css';

function ProjectDetail() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5050/api/projects/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Project not found');
        }

        return response.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <section className="projects-section">
        <h2>Loading project...</h2>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="projects-section">
        <h2>Project not found</h2>
        <p>{error}</p>
        <Link to="/projects">&larr; Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="projects-section">
      <h2>{project.title}</h2>

      <TechStack stack={project.techStack} />

      <p style={{ margin: '20px 0', lineHeight: 1.7 }}>
        {project.description}
      </p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          View source &rarr;
        </a>
      )}

      <p style={{ marginTop: '30px' }}>
        <Link to="/projects">&larr; Back to Projects</Link>
      </p>
    </section>
  );
}

export default ProjectDetail;