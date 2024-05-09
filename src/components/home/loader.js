

export const homeProjectsListLoader = async () => {
  return await fetch("https://api.github.com/users/lucspt/repos");
};