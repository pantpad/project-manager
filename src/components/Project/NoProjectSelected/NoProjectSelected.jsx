/* eslint-disable react/prop-types */
import noProject from "../../../assets/no-projects.png";
import Button from "../../ui/Button/Button";
import styles from "./NoProjectSelected.module.css";
export default function NoProjectSelected({ onAdd }) {
  return (
    <section className={styles.noProjectContainer}>
      <img src={noProject} alt="no-project.img" width="150" height="150" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button variant="primary" size="medium" onClick={onAdd}>
        Create new project
      </Button>
    </section>
  );
}
