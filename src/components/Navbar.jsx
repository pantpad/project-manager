/* eslint-disable react/prop-types */

import Button from "./ui/Button/Button";

export default function Navbar({ addProject, projects, projectChange }) {
  return (
    <nav>
      <h2>YOUR PROJECTS</h2>
      <Button
        className="pesce"
        variant="secondary"
        size="big"
        onClick={addProject}
      >
        + Add Project
      </Button>
      <ul>
        {projects.projectList.map((project) => {
          return (
            <li
              className={
                project.id == projects.currentProject ? "current-project" : ""
              }
              key={project.id}
              onClick={() => projectChange(project.id)}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
