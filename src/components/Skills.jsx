import './Skills.css';

const skillGroups = [
  { label: 'Languages', items: 'C++, Java, JavaScript, HTML5, CSS3' },
  {
    label: 'Core CS',
    items:
      'Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks',
  },
  { label: 'Tools', items: 'Git, GitHub, VS Code' },
  {
    label: 'Soft Skills',
    items:
      'Problem Solving, Teamwork & Collaboration, Communication, Critical Thinking, Attention to Detail',
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="text">
        {skillGroups.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.items}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Skills;
