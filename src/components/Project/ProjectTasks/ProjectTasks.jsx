/* eslint-disable react/prop-types */

import AddTask from "./Task/AddTask";
import TasksList from "./TasksList/TasksList";
import styles from "./ProjectTasks.module.css";

export default function ProjectTasks({
  id,
  tasks,
  handleOpenModal,
  onTaskAdd,
  onTaskDelete,
}) {
  let areThereTasks = tasks.length > 0;
  let noTaskSection = (
    <p className={styles.noTasks}>This project does not have any tasks yet.</p>
  );

  let tasksListSection = areThereTasks ? (
    <TasksList
      projectId={id}
      projectTasks={tasks}
      onTaskDelete={onTaskDelete}
    />
  ) : (
    noTaskSection
  );

  return (
    <>
      <div className={styles.projectTasks}>
        <h2>Tasks</h2>
        <AddTask
          handleOpenModal={handleOpenModal}
          onTaskAdd={onTaskAdd}
          projectId={id}
        />
        {tasksListSection}
      </div>
    </>
  );
}
