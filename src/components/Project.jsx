/* eslint-disable react/prop-types */

import dateFormatter from "../utils/dateHandler";

export default function Project({ project }) {
  return (
    <div id="project-container">
      <div className="project-details">
        <div className="title-delete-wrapper">
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p className="date">{dateFormatter(project.date)}</p>
        <p className="description">{project.description}</p>
      </div>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <div>
          <label> New task</label>
          <div>
            <input />
            <button className="add-btn-blank"> Add </button>
          </div>
        </div>
        <ul className="tasks-list">
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
          <li>
            <span>Task 1</span>
            <button>Clear</button>
          </li>
        </ul>
        <p className="no-tasks">This project does not have any tasks yet.</p>
      </div>
    </div>
  );
}
