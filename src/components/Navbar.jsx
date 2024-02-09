/* eslint-disable react/prop-types */
export default function Navbar({ addProject, projects, projectChange }) {
  return (
    <nav>
      <h2>YOUR PROJECTS</h2>
      <button className="add-btn" onClick={addProject}>
        + Add Project
      </button>
      <ul>
        {projects.projectList.map((project) => {
          return (
            <li key={project.id} onClick={() => projectChange(project.id)}>
              {project.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
