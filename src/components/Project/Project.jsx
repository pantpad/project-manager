/* eslint-disable react/prop-types */

import ProjectDetails from "./ProjectDetails/ProjectDetails";
import ProjectTasks from "./ProjectTasks/ProjectTasks";

export default function Project({
  project,
  onProjectDelete,
  onTaskDelete,
  onTaskAdd,
  handleOpenModal,
}) {
  return (
    <section id="project-container">
      <ProjectDetails {...project} onProjectDelete={onProjectDelete} />
      <ProjectTasks
        {...project}
        handleOpenModal={handleOpenModal}
        onTaskAdd={onTaskAdd}
        onTaskDelete={onTaskDelete}
      />
    </section>
  );
}
