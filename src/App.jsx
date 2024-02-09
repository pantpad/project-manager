/* eslint-disable react/no-unknown-property */
import "./App.css";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

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
      <Navbar addProject={handleAddProject} projects={projects} projectChange={handleProjectChange} />
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
