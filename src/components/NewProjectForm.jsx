/* eslint-disable react/prop-types */
export default function NewProjectForm({ onCancel }) {
  return (
    <>
      <form>
        <h2>FORM</h2>
        <div className="action-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button>Save</button>
        </div>
        <div className="resto-del-form"></div>
      </form>
    </>
  );
}
