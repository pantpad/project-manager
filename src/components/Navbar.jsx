/* eslint-disable react/prop-types */

import Button from "./ui/Button/Button";
import ProjectList from "./Project/ProjectList";

export default function Navbar({ addProject, projects, projectChange }) {
  return (
    <nav>
      <h2>YOUR PROJECTS</h2>
      <Button
        className="pesce"
        variant="secondary"
        size="medium"
        onClick={addProject}
      >
        + Add Project
      </Button>
      <ProjectList projects={projects} onProjectChange={projectChange} />
    </nav>
  );
}
