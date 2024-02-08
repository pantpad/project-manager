/* eslint-disable react/prop-types */
export default function NoProjectSelected({ onAdd }) {
  return (
    <>
      <img src="" alt="" width="72" height="72" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button onClick={onAdd}> Create new project</button>
    </>
  );
}
