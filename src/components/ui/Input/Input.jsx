/* eslint-disable react/prop-types */
import styles from "./Input.module.css";
import { styleClsx } from "../../../util/styleComponent";

export default function Input({
  children,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <input className={styleClsx(styles, className, variant, size)} {...props}>
      {children}
    </input>
  );
}
