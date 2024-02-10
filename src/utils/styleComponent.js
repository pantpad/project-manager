export function styleClsx(styles, className, ...inputs) {
  let classes = `${styles.base ?? ""}`;

  inputs.forEach((input) => {
    classes += ` ${styles[input] ?? ""}`;
  });

  classes += ` ${styles[className] ?? className ?? ""}`;

  return classes.trimEnd();
}
