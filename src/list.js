// import { count } from "./selectors.js";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

export const existingTasks = ["to study JS Day 48", "to write Japanese N5 HW"];

// Business Logic
export const countTask = () => {
    const taskLists = document.querySelectorAll(".list").length;
    totalTask.innerText = taskLists;
}

export const addList = (text) => {
    // console.log(inputTask);
    listGroup.append(createList(text));
    inputTask.value = "";

   countTask();
}

export const countTaskDone = () => {
    const doneList = document.querySelectorAll(".list input:checked");
    totalTaskDone.innerText = doneList.length;
}

export const createList = (task) => {
    const taskList = listTemplate.content.cloneNode(true);
    // console.log(taskList);
    taskList.querySelector(".list").id = "List_id_" + uuidv4();
    taskList.querySelector(".taskName").innerText = task;
    // const taskList = document.createElement("div");
    // taskList.classList.add("list", "slide-in-left", "animate_animated", "animate__jackInTheBox");
    // taskList.id = "List_id_" + count++;
    // taskList.innerHTML = `
    //                 <div class=" flex justify-between items-center border border-slate-600 p-8 rounded-md mb-4">
    //                     <div class="flex justify-start items-center gap-2">
    //                         <input class="listCheck size-6 accent-slate-800" type="checkbox" >
    //                         <p class="taskName font-mono text-lg">${task}</p>
    //                     </div>
    //                     <div class="flex justify-end items-center gap-3">
    //                         <button id="btnEdit" class=" btnEdit hover:text-slate-500 hover:font-semibold">
    //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pointer-events-none">
    //                                 <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    //                             </svg>                              
    //                         </button>
    //                         <button id="btnDelete" class=" btnDelete hover:text-slate-500 hover:font-semibold">
    //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 pointer-events-none">
    //                                 <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    //                             </svg>                              
    //                         </button>
    //                     </div>
    //                 </div>`
                    // console.log(taskList);
// // Without using the Event Delegation  
    // const listCheck = taskList.querySelector(".listCheck");
    // const taskName = taskList.querySelector(".taskName");
    // const btnEdit = taskList.querySelector("#btnEdit");
    // const btnDelete = taskList.querySelector("#btnDelete");
    

    // listCheck.addEventListener("change", () => {
    //     countTaskDone();
    //     taskName.classList.toggle("line-through");
    //     taskList.classList.toggle("opacity-40");
    //     taskList.classList.toggle("scale-95");
    //     if(listCheck.checked) {
    //         btnEdit.setAttribute("disabled", true);
    //     }
    //     else {
    //         btnEdit.removeAttribute("disabled");
    //     }

    // });
    
    // btnEdit.addEventListener("click", () => {
    //     btnEdit.setAttribute("disabled", true);
    //     listCheck.setAttribute("disabled", true);

    //     const newInput = document.createElement("input");
    //     taskName.after(newInput);
    //     newInput.className = "border border-slate-800 p-1 w-[120px] focus:outline-none";
    //     newInput.value = taskName.innerText;
    //     taskName.classList.add("hidden");
    //     newInput.focus();


    //     newInput.addEventListener("blur", () => {
    //         btnEdit.removeAttribute("disabled");
    //         taskName.innerText = newInput.value;

    //         newInput.classList.add("hidden");
    //         taskName.classList.remove("hidden");
    //         listCheck.removeAttribute("disabled");
    //     })
    // })

    // btnDelete.addEventListener("click",() => {
    //     if(window.confirm("Are you sure to delete this task?")) {
    //         taskList.remove();
    //     }
    // } )
    
    return taskList;
}

export const deleteTask = (listID) => {
    const currentList = document.querySelector(`#${listID}`)    
   
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then((result) => {
        if (result.isConfirmed) {
            currentList.classList.add("animate_animated", "animate__hinge")
            currentList.addEventListener("animationend", () => {
                countTaskDone();
                countTask();
            })
            currentList.remove();
          Swal.fire({
            title: "Deleted!",
            text: "Your Task has been removed.",
            icon: "success"
          });
        }
    })
    
}

export const editTask = (listID) => {
    const currentList = document.querySelector(`#${listID}`)
    const listCheck = currentList.querySelector(".listCheck");
    const taskName = currentList.querySelector(".taskName");
    const btnEdit = currentList.querySelector("#btnEdit");
    btnEdit.setAttribute("disabled", true);
        listCheck.setAttribute("disabled", true);

        const newInput = document.createElement("input");
        taskName.after(newInput);
        newInput.className = "border border-slate-800 p-1 w-[120px] focus:outline-none";
        newInput.value = taskName.innerText;
        taskName.classList.add("hidden");
        newInput.focus();


        newInput.addEventListener("blur", () => {
            btnEdit.removeAttribute("disabled");
            taskName.innerText = newInput.value;

            newInput.classList.add("hidden");
            taskName.classList.remove("hidden");
            listCheck.removeAttribute("disabled");
        })
}

export const checkTask = (listID) => {
    const currentList = document.querySelector(`#${listID}`)
    const taskName = currentList.querySelector(".taskName");
    const listCheck = currentList.querySelector(".listCheck");

    // console.log("Check");
    countTaskDone();
        taskName.classList.toggle("line-through");
        currentList.classList.toggle("opacity-40");
        currentList.classList.toggle("scale-95");
        if(listCheck.checked) {
            btnEdit.setAttribute("disabled", true);
        }
        else {
            btnEdit.removeAttribute("disabled");
        }
}