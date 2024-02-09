/* eslint-disable react/prop-types */
import noProject from "../assets/no-projects.png";
export default function NoProjectSelected({ onAdd }) {
  return (
    <section className="no-project-container">
      <img src={noProject} alt="no-project.img" width="150" height="150" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={onAdd}> Create new project</button>
    </section>
  );
}