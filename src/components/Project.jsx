/* eslint-disable react/prop-types */

import dateFormatter from "../utils/dateHandler";

export default function Project({ project }) {
  return (
    <>
      <div className="project-description">
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p className="date">{dateFormatter(project.date)}</p>
        <p className="description">{project.description}</p>
      </div>
      <div className="project-tasks">
        <h2>Tasks</h2>
        <div>
          <label> Add new task</label>
          <div>
            <input />
            <button className="add-btn-blank"> Add </button>
          </div>
        </div>
        <p>This project does not have any tasks yet.</p>
      </div>
    </>
  );
}
