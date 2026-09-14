import Skills from '../components/Skills.jsx';
import './About.css';

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science undergraduate at NIT Warangal with an interest in
          web development, software engineering and problem solving. I enjoy
          learning new technologies and building responsive applications.
        </p>
      </section>
      <Skills />
    </>
  );
}

export default About;
