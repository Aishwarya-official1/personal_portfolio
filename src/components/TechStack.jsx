
function TechStack({ stack }) {
  return (
    <ul className="tech-stack">
      {stack.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}

export default TechStack;
