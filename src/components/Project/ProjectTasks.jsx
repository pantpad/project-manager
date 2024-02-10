/* eslint-disable react/prop-types */

import AddTask from "./Tasks/Task/AddTask";
import TasksList from "./Tasks/TasksList";

export default function ProjectTasks({
  handleOpenModal,
  onTaskAdd,
  onTaskDelete,
  currentProject,
}) {
  let areThereTasks = currentProject.tasks.length > 0;
  let noTaskSection = (
    <p className="no-tasks">This project does not have any tasks yet.</p>
  );

  let tasksListSection = areThereTasks ? (
    <TasksList currentProject={currentProject} onTaskDelete={onTaskDelete} />
  ) : (
    noTaskSection
  );

  return (
    <>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <AddTask
          handleOpenModal={handleOpenModal}
          onTaskAdd={onTaskAdd}
          currentProject={currentProject}
        />
        {tasksListSection}
      </div>
    </>
  );
}
