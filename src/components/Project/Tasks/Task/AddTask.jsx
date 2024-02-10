/* eslint-disable react/prop-types */
import Button from "../../../ui/Button/Button";
import Input from "../../../ui/Input/Input";

import { useRef } from "react";

function clearInput(input) {
  return (input.current.value = "");
}

export default function AddTask({
  handleOpenModal,
  onTaskAdd,
  currentProject,
}) {
  const taskDescription = useRef();

  return (
    <>
      <div className="add-task">
        <label>New task</label>
        <div className="input-wrapper">
          <Input ref={taskDescription} />
          <Button
            type="button"
            onClick={() => {
              if (!handleOpenModal(taskDescription.current.value)) {
                onTaskAdd(currentProject, taskDescription.current.value);
                clearInput(taskDescription);
              }
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
}
