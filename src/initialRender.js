import { addList, existingTasks } from "./list.js";

const render = () => {
    existingTasks.forEach((task) => addList(task));
};
export default render;