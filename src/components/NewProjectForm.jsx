/* eslint-disable react/prop-types */

import Button from "./ui/Button/Button";
import Input from "./ui/Input/Input";

import { useRef } from "react";

export default function NewProjectForm({ handleOpenModal, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          title.current.value = "";
          description.current.value = "";
          date.current.value = "";
        }}
      >
        <div className="action-buttons">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            type="submit"
            variant="save"
            onClick={() => {
              handleOpenModal(
                "",
                title.current.value,
                description.current.value,
                date.current.value
              );
            }}
          >
            Save
          </Button>
        </div>
        <div className="form-inputs">
          <div>
            <label>TITLE</label>
            <Input type="text" ref={title} />
          </div>
          <div>
            <label>DESCRIPTION</label>
            <Input isInput={false} ref={description} />
          </div>
          <div>
            <label>DUE DATE</label>
            <Input type="date" ref={date} />
          </div>
        </div>
      </form>
    </>
  );
}
