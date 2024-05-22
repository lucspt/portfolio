import { projects } from "../../data/projects-data";

export const projectLoader = async ({ params }) => {
  const { projectId } = params;
  const projectIdx = projects.findIndex(({ id }) => id === projectId);
  return {
    ...projects[projectIdx], 
    nextProjectId: projects[projectIdx + 1]?.id
  };
};
