import styles from "./ProjectList.module.css";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

export default function ProjectList({ projects, onProjectChange }) {
  return (
    <ul className={styles.ul}>
      {projects.projectList.map((project) => {
        return (
          <ProjectListItem
            key={project.id}
            {...project}
            currentProject={projects.currentProject}
            onProjectChange={onProjectChange}
          />
        );
      })}
    </ul>
  );
}
