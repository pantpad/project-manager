/* eslint-disable react/prop-types */
import Task from "./Task/Task";

export default function TasksList({ currentProject, onTaskDelete }) {
  const tasksList = currentProject.tasks.map((task) => (
    <Task
      key={task.taskId}
      task={task}
      currentProject={currentProject}
      onTaskDelete={onTaskDelete}
    />
  ));

  return <ul className="tasks-list">{tasksList}</ul>;
}
