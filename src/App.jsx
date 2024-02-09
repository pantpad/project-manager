/* eslint-disable react/no-unknown-property */
import "./App.css";
import NewProjectForm from "./components/NewProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

import { useState } from "react";

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

function App() {
  const [projects, setProjects] = useState(defaultProjects);
  const [isFormActive, setIsFormActive] = useState(false);

  //gestione apertura form
  function handleFormOpen() {
    setIsFormActive((prev) => !prev);
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
        projectList: newList,
        currentProject: prevProjects.currentProject,
      };
    });
    handleFormOpen();
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
    setIsFormActive(false);
    setProjects((prevProjects) => ({ ...prevProjects, currentProject: index }));
  }

  //tasks
  function addTask(project, taskDescription) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.projectList.map((proj) => {
        if (proj.id == project.id) {
          const newTasks = [
            {
              taskId: `t${project.tasks.length + 1}`,
              description: taskDescription,
            },
            ...project.tasks,
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

  function deleteTask(taskId, project) {
    setProjects((prevProjects) => {
      const newTasks = project.tasks.filter((task) => task.taskId != taskId);
      const newProject = prevProjects.projectList.find(
        (projectObj) => projectObj.id == project.id
      );

      newProject.tasks = newTasks;

      const newList = [...prevProjects.projectList];
      return {
        projectList: newList,
        currentProject: project.id,
      };
    });
  }

  //Possibile migliorare la logica mettendo noProjectSelected dentro Project
  let currentProject = projects.currentProject ? (
    <Project
      project={projects.projectList.find(
        (project) => project.id == projects.currentProject
      )}
      onProjectDelete={deleteProject}
      onTaskDelete={deleteTask}
      onTaskAdd={addTask}
    />
  ) : (
    <NoProjectSelected onAdd={handleFormOpen} />
  );

  return (
    <>
      <Navbar
        addProject={handleFormOpen}
        projects={projects}
        projectChange={handleProjectChange}
      />
      <main>
        {isFormActive ? (
          <NewProjectForm onCancel={handleFormOpen} onAdd={addProject} />
        ) : (
          currentProject
        )}
      </main>
    </>
  );
}

export default App;
