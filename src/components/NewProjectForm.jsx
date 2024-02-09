/* eslint-disable react/prop-types */
export default function NewProjectForm({ onCancel }) {
  return (
    <>
      <form>
        <div className="action-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button className="save-btn">Save</button>
        </div>
        <div className="form-inputs">
          <div>
            <label>TITLE</label>
            <input type="text" />
          </div>
          <div>
            <label>DESCRIPTION</label>
            <input type="text" />
          </div>
          <div>
            <label>DUE DATE</label>
            <input type="date" />
          </div>
        </div>
      </form>
    </>
  );
}
