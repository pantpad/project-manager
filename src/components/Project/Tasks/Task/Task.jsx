/* eslint-disable react/prop-types */
import Button from "../../../ui/Button/Button";

export default function Task({ task, currentProject, onTaskDelete }) {
  return (
    <li>
      <span>{task.description}</span>
      <Button
        variant="clear"
        onClick={() => onTaskDelete(task.taskId, currentProject)}
      >
        Clear
      </Button>
    </li>
  );
}
