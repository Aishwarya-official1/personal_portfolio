import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(true);

  // Runs once on mount ([] dependency array): simulates a brief
  // loading sequence before revealing the hero content.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="hero-section loading">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section id="home" className="hero-section">
      <div className="text">
        <h1>I'm Aishwarya</h1>
        <p>
          I'm a Computer Science undergraduate at NIT Warangal who enjoys building
          web applications and solving programming problems. I'm passionate about
          learning new technologies, writing clean code, and turning ideas into
          real projects. Currently, I'm focused on full-stack development, data
          structures &amp; algorithms, and growing as a software developer while
          preparing for future internship opportunities.
        </p>
      </div>
    </section>
  );
}

export default Home;
