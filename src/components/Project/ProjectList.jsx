import ProjectListItem from "./ProjectListItem";

export default function ProjectList({projects, onProjectChange}){
    return(
        <ul>
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