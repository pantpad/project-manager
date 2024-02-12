import styles from "./ProjectListItem.module.css";

export default function ProjectListItem({id, title, currentProject, onProjectChange}){
    return(
            <li
              className={
                id == currentProject ? `${styles.li} current-project` : styles.li
              }
              onClick={() => onProjectChange(id)}
            >
              {title}
            </li>
    );
}