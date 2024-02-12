/* eslint-disable react/prop-types */
import styles from "./NewProjectForm.module.css";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

import { useRef } from "react";

export default function NewProjectForm({ handleOpenModal, onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const inputs = [title, description, date];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputsValues = inputs.map((input) => input.current.value);
          if (!handleOpenModal(...inputsValues)) {
            onAdd(...inputsValues);
          }
        }}>
        <div className={styles.actionButtons}>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="save">
            Save
          </Button>
        </div>
        <div className={styles.formInputs}>
          <div>
            <label>TITLE</label>
            <Input type="text" ref={title} minLength={3} maxLength={20} />
          </div>
          <div>
            <label>DESCRIPTION</label>
            <Input isInput={false} ref={description} maxLength={250} />
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
