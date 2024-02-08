import "./App.css";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const projects = {
    projectList: [],
    currentProject: null,
  };

  //capire se ci sono progetti

  const [isFormActive, setIsFormActive] = useState(false);

  function handleFormCancel() {
    setIsFormActive(false);
  }

  function handleAddProject() {
    setIsFormActive(true);
  }

  let areThereProjects = projects.projectList.length > 0;

  let currentProject = <NoProjectSelected onAdd={handleAddProject} />;
  if (areThereProjects) {
    currentProject = (
      <>
        <h1>PRIMO PROGETTO</h1>
      </>
    );
  }

  return (
    <>
      <nav>
        <h2>YOUR PROJECTS</h2>
        <button>+ Add Project</button>
        <h3>My project/s</h3>
        <ul>
          <li>My Project</li>
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
