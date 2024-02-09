/* eslint-disable react/no-unknown-property */
import "./App.css";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import Project from "./components/Project";

const defaultProjects = {
  projectList: [
    {
      id: "p1",
      title: "Primo Progetto",
      description: "Test del primo progetto",
      date: new Date(),
      tasks: [],
    },
    {
      id: "p2",
      title: "Secondo Progetto",
      description: "Test del secondo progetto",
      date: new Date(),
      tasks: [],
    },
  ],
  currentProject: null,
};

function App() {
  const [projects, setProjects] = useState(defaultProjects);
  console.log(projects);

  const [isFormActive, setIsFormActive] = useState(false);

  function handleFormCancel() {
    setIsFormActive(false);
  }

  function handleAddProject() {
    setIsFormActive(true);
  }

  function handleProjectChange(index) {
    setIsFormActive(false);
    setProjects((prevProjects) => ({ ...prevProjects, currentProject: index }));
  }

  let currentProject = projects.currentProject ? (
    <Project
      project={projects.projectList.find(
        (project) => project.id == projects.currentProject
      )}
    />
  ) : (
    <NoProjectSelected onAdd={handleAddProject} />
  );

  return (
    <>
      <nav className="nav">
        <h2>YOUR PROJECTS</h2>
        <button className="add-btn" onClick={handleAddProject}>
          + Add Project
        </button>
        <ul>
          {projects.projectList.map((project) => {
            return (
              <li
                key={project.id}
                onClick={() => handleProjectChange(project.id)}
              >
                {project.title}
              </li>
            );
          })}
        </ul>
      </nav>
      <main>
        {isFormActive ? (
          <NewProjectForm onCancel={handleFormCancel} />
        ) : (
          currentProject
        )}
      </main>
    </>
  );
}

export default App;
