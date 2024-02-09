/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
import { styleClsx } from "../../../util/styleComponent";

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <button className={styleClsx(styles, className, variant, size)} {...props}>
      {children}
    </button>
  );
}
