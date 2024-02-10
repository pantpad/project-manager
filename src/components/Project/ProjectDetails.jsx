/* eslint-disable react/prop-types */
import Button from "../ui/Button/Button";
import dateFormatter from "../../utils/dateHandler";

export default function ProjectDetails({ currentProject, onProjectDelete }) {
  return (
    <>
      <div className="project-details">
        <div className="title-delete-wrapper">
          <h1>{currentProject.title}</h1>
          <Button
            variant="delete"
            onClick={() => onProjectDelete(currentProject.id)}
          >
            Delete
          </Button>
        </div>
        <p className="date">{dateFormatter(currentProject.date)}</p>
        <div className="description">
          <p>{currentProject.description}</p>
        </div>
      </div>
    </>
  );
}
