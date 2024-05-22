import { projects } from "../../data/projects-data";

export const projectLoader = async ({ params }) => {
  const { projectId } = params;
  const projectIdx = projects.findIndex(({ id }) => id === projectId);
  return {
    ...projects[projectIdx], 
    nextProjectIdx: projectIdx + 1 >= projectIdx.length ? null : projectIdx + 1,
    previousProjectIdx: projectIdx - 1 < 0 ? null : projectIdx - 1
  };
};
