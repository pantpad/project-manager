export default function ProjectListItem({id, title, currentProject, onProjectChange}){
    return(
            <li
              className={
                id == currentProject ? "current-project" : ""
              }
              onClick={() => onProjectChange(id)}
            >
              {title}
            </li>
    );
}