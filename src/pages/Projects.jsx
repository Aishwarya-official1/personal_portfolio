import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/api/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load projects. Please start the backend server.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <p>Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Projects;

