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
      <h1>Ciao</h1>
      <form method="dialog">
        <Button variant="primary" size="medium">
          Okay
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
