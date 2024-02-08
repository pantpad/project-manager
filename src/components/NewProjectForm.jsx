/* eslint-disable react/prop-types */
export default function NewProjectForm({ onCancel }) {
  return (
    <>
      <form>
        <div className="action-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button>Save</button>
        </div>
        <div className="resto-del-form"></div>
      </form>
    </>
  );
}
