/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
import { styleClsx } from "../../../utils/styleComponent";

export default function Input({
  isInput = true,
  variant,
  size,
  className,
  ...props
}) {
  if (!isInput) {
    return (
      <textarea
        className={styleClsx(styles, className, variant, size)}
        {...props}
      />
    );
  }

  return (
    <input className={styleClsx(styles, className, variant, size)} {...props} />
  );
}
