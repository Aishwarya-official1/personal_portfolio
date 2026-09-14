// Central data source for all project cards.
// Each object is passed as props into <ProjectCard />, and the same
// object (looked up by id) powers the /projects/:projectId detail page.
const projects = [
  {
    id: 'todo-list-app',
    title: 'To-Do List Web Application',
    description:
      "Built a full-stack task management application that allows users to create, update, delete, and organize tasks with persistent database storage.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    image: null,
    link: 'https://github.com/Aishwarya-official1',
  },
  {
    id: 'abac-policy-compiler',
    title: 'ABAC Policy Compiler',
    description:
      'Developed a compiler for Attribute-Based Access Control (ABAC) policies that performs lexical analysis, syntax parsing, semantic validation, and generates structured policy outputs while detecting redundant rules and policy conflicts.',
    techStack: ['C++', 'Compiler Design'],
    image: null,
    link: 'https://github.com/Aishwarya-official1',
  },
  {
    id: 'colorcatcher',
    title: 'ColorCatcher',
    description:
      'Created a Java-based arcade game featuring real-time gameplay, collision detection, score tracking, and an interactive graphical user interface.',
    techStack: ['Java', 'Swing'],
    image: null,
    link: 'https://github.com/Aishwarya-official1',
  },
];

module.exports = projects;
