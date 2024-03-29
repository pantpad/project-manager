/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
import { styleClsx } from "../../../utils/styleComponent";
import { forwardRef } from "react";

export default forwardRef(function Input(
  { isInput = true, variant, size, className, ...props },
  ref
) {
  if (!isInput) {
    return (
      <textarea
        className={styleClsx(styles, className, variant, size)}
        ref={ref}
        {...props}
      />
    );
  }

  return (
    <input
      className={styleClsx(styles, className, variant, size)}
      ref={ref}
      {...props}
    />
  );
});
