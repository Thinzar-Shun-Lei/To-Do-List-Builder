import { countTask, countTaskDone } from "./list.js";
import { listGroup } from "./selectors.js";

export const observer = () => {

//Callback function
    const watchJob = () => {
        console.log("You change");
        countTaskDone();
        countTask();
    }
    const listObserver = new MutationObserver(watchJob);
    const config = { 
        attributes: true, 
        childList: true, 
        subtree: true 
    };
    listObserver.observe(listGroup, config);
    
}