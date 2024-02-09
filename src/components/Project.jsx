/* eslint-disable react/prop-types */
import Button from "./ui/Button/Button";
import dateFormatter from "../utils/dateHandler";

export default function Project({ project }) {
  return (
    <div id="project-container">
      <div className="project-details">
        <div className="title-delete-wrapper">
          <h1>{project.title}</h1>
          <Button variant="delete">Delete</Button>
        </div>
        <p className="date">{dateFormatter(project.date)}</p>
        <p className="description">{project.description}</p>
      </div>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <div>
          <label> New task</label>
          <div className="input-wrapper">
            <input />
            <Button> Add </Button>
          </div>
        </div>
        <ul className="tasks-list">
          <li>
            <span>Task 1</span>
            <Button variant="clear">Clear</Button>
          </li>
          <li>
            <span>Task 1</span>
            <Button variant="clear">Clear</Button>
          </li>
          <li>
            <span>Task 1</span>
            <Button variant="clear">Clear</Button>
          </li>
        </ul>
        <p className="no-tasks">This project does not have any tasks yet.</p>
      </div>
    </div>
  );
}
