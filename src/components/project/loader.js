import { projects } from "../../data/projects-data";

export const projectLoader = async ({ params }) => {
  const { projectId } = params;
  console.log(projectId);
  return projects.find(({ id }) => id === projectId);
};
