/* eslint-disable react/no-unknown-property */
import "./App.css";
import NewProjectForm from "./components/Project/NewProjectForm/NewProjectForm";
import NoProjectSelected from "./components/Project/NoProjectSelected/NoProjectSelected";
import Project from "./components/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/ui/Modal/Modal";

import { useState, useRef } from "react";

const defaultProjects = {
  projectList: [
    {
      id: "p1",
      title: "Primo Progetto",
      description: "Test del primo progetto",
      date: new Date(),
      tasks: [
        {
          taskId: "t1",
          description: "Prima task",
        },
      ],
    },
    {
      id: "p2",
      title: "Secondo Progetto",
      description: "Test del secondo progetto",
      date: new Date(),
      tasks: [
        {
          taskId: "t1",
          description: "Prima task",
        },
        {
          taskId: "t2",
          description: "Seconda task",
        },
      ],
    },
  ],
  currentProject: null,
};

//find currentProject inside projectList
function getCurrentProject(projects) {
  return projects.projectList.find(
    (project) => project.id == projects.currentProject
  );
}

function App() {
  const [projects, setProjects] = useState(defaultProjects);
  const dialog = useRef();
  //gestione apertura form

  function handleFormOpen() {
    setProjects((prevProjects) => ({
      ...prevProjects,
      currentProject:
        prevProjects.currentProject !== undefined ? undefined : null,
    }));
  }

  //project
  function addProject(title, description, date) {
    setProjects((prevProjects) => {
      const newList = [
        ...prevProjects.projectList,
        {
          id: `p${prevProjects.projectList.length + 1}`,
          title: title,
          description: description,
          date: new Date(date),
          tasks: [],
        },
      ];
      return {
        ...prevProjects,
        projectList: newList,
        currentProject: null,
      };
    });
  }

  function deleteProject(id) {
    setProjects((prevProjects) => {
      const newList = [
        ...prevProjects.projectList.filter((project) => project.id != id),
      ];
      return {
        projectList: newList,
        currentProject: null,
      };
    });
  }

  function handleProjectChange(index) {
    setProjects((prevProjects) => ({ ...prevProjects, currentProject: index }));
  }

  //tasks
  function addTask(taskDescription, projectId) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.projectList.map((proj) => {
        if (proj.id == projectId) {
          const newTasks = [
            {
              taskId: `t${proj.tasks.length + 1}`,
              description: taskDescription,
            },
            ...proj.tasks,
          ];
          return { ...proj, tasks: newTasks };
        }
        return proj;
      });

      return {
        ...prevProjects,
        projectList: updatedProjects,
      };
    });
  }

  //refactored deleted Task using map
  function deleteTask(taskId, projectId) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.projectList.map((proj) => {
        if (proj.id == projectId) {
          return {
            ...proj,
            tasks: [...proj.tasks.filter((task) => task.taskId != taskId)],
          };
        }
        return proj;
      });

      return {
        ...prevProjects,
        projectList: updatedProjects,
      };
    });
  }

  //dialogModal
  function areInputsEmpty(...inputs) {
    return inputs.some((input) => input == "");
  }

  function openModal() {
    dialog.current.open();
  }

  function handleOpenModal(...inputs) {
    if (areInputsEmpty(...inputs)) {
      openModal();
      return true;
    }
    return false;
  }

  //Possibile migliorare la logica mettendo noProjectSelected dentro Project
  let currentProject = projects.currentProject ? (
    <Project
      project={getCurrentProject(projects)}
      onProjectDelete={deleteProject}
      onTaskDelete={deleteTask}
      onTaskAdd={addTask}
      handleOpenModal={handleOpenModal}
    />
  ) : (
    <NoProjectSelected onAdd={handleFormOpen} />
  );

  return (
    <>
      <Modal ref={dialog} />
      <Navbar
        addProject={handleFormOpen}
        projects={projects}
        projectChange={handleProjectChange}
      />
      <main>
        {projects.currentProject === undefined ? (
          <NewProjectForm
            onCancel={handleFormOpen}
            onAdd={addProject}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          currentProject
        )}
      </main>
    </>
  );
}

export default App;
