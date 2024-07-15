import { addEnterTaskHandler, addTaskListHandler, checkAllHandler, delAllHandler, listGroupHandler } from "./handlers.js";
import { btnCheckAll, btnDelAll, btnTaskAdd, inputTask, listGroup } from "./selectors.js";


// Listener
export const funListener = () => {
    inputTask.addEventListener("keyup",addEnterTaskHandler);
    btnTaskAdd.addEventListener("click",addTaskListHandler);
    listGroup.addEventListener("click", listGroupHandler);
    btnDelAll.addEventListener("click", delAllHandler);
    btnCheckAll.addEventListener("click", checkAllHandler);
}

export default funListener; //၁ခုပဲရှိရင် export default နဲ့သုံး
// အများကြီးဆိုရင် တစ်ခုချင်းစီရှေ့မှာ export ရေးပေး