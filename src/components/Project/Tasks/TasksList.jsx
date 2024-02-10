/* eslint-disable react/prop-types */
import Task from "./Task/Task";

export default function TasksList({ projectId, projectTasks, onTaskDelete }) {
  const tasksList = projectTasks.map((task) => (
    <Task
      key={task.taskId}
      projectId={projectId}
      onTaskDelete={onTaskDelete}
      {...task}
    />
  ));

  return <ul className="tasks-list">{tasksList}</ul>;
}
