/* eslint-disable react/prop-types */
import Button from "./ui/Button/Button";
import Input from "./ui/Input/Input";
import dateFormatter from "../utils/dateHandler";

import { useRef } from "react";

export default function Project({
  project,
  onProjectDelete,
  onTaskDelete,
  onTaskAdd,
}) {
  const taskDescription = useRef();

  return (
    <div id="project-container">
      <div className="project-details">
        <div className="title-delete-wrapper">
          <h1>{project.title}</h1>
          <Button variant="delete" onClick={() => onProjectDelete(project.id)}>
            Delete
          </Button>
        </div>
        <p className="date">{dateFormatter(project.date)}</p>
        <p className="description">{project.description}</p>
      </div>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <div>
          <label> New task</label>
          <div className="input-wrapper">
            <Input ref={taskDescription} />
            <Button
              onClick={() => {
                onTaskAdd(project, taskDescription.current.value);
              }}
            >
              Add
            </Button>
          </div>
        </div>
        {project.tasks.length > 0 ? (
          <ul className="tasks-list">
            {project.tasks.map((task) => {
              return (
                <li key={task.taskId}>
                  <span>{task.description}</span>
                  <Button
                    variant="clear"
                    onClick={() => onTaskDelete(task.taskId, project)}
                  >
                    Clear
                  </Button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="no-tasks">This project does not have any tasks yet.</p>
        )}
      </div>
    </div>
  );
}
