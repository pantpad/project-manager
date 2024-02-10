/* eslint-disable react/prop-types */
import Button from "../../../ui/Button/Button";

export default function Task({ description, taskId, projectId, onTaskDelete }) {
  return (
    <li>
      <span>{description}</span>
      <Button variant="clear" onClick={() => onTaskDelete(taskId, projectId)}>
        Clear
      </Button>
    </li>
  );
}
