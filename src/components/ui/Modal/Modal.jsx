/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";

import styles from "./Modal.module.css";
import { styleClsx } from "../../../utils/styleComponent";

export default forwardRef(function Modal({ className, ...props }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={styleClsx(styles, className)} {...props}>
        <h2>Invalid input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
        <form method="dialog">
          <Button variant="primary" size="medium">
            Okay
          </Button>
        </form>
    </dialog>,
    document.getElementById("modal")
  );
});
