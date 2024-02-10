/* eslint-disable react/prop-types */
import Button from "../ui/Button/Button";
import dateFormatter from "../../utils/dateHandler";

export default function ProjectDetails({
  id,
  title,
  description,
  date,
  onProjectDelete,
}) {
  return (
    <>
      <div className="project-details">
        <div className="title-delete-wrapper">
          <h1>{title}</h1>
          <Button variant="delete" onClick={() => onProjectDelete(id)}>
            Delete
          </Button>
        </div>
        <p className="date">{dateFormatter(date)}</p>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
