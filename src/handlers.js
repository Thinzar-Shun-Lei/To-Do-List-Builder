import Swal from "sweetalert2";
import { addList, checkTask, deleteTask, editTask } from "./list.js";

// // Handler Group
export const listGroupHandler = (event) => {
    const taskList = event.target.closest(".list");
    if(event.target.classList.contains("btnEdit")) {
        // console.log("Edit");
        editTask(taskList.id);
    }taskList.id
    if(event.target.classList.contains("btnDelete")) {
        // console.log("Delete");
        deleteTask(taskList.id);
    }
    if(event.target.classList.contains("listCheck")) {
        checkTask(taskList.id);
    }
    }
    
export    const addTaskListHandler = () => {
        if(inputTask.value.trim()) {
            addList(inputTask.value);
        }
        else {
            alert("Please enter the task");
        }
    }
    
 export   const addEnterTaskHandler = (e) => {
        if(e.key == "Enter") {
            if(inputTask.value.trim()) {
                addList(inputTask.value);
            }
            else {
                alert("Please enter the task");
            }
        }
    }
    
 export   const delAllHandler = () => {
        // console.log(listGroup.childNodes); //childNodes include enter spaces
        // console.log(listGroup.children); //children does not include enter spaces
    
        
        Swal.fire({
            title: "Are you sure to remove all lists?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const allList = document.querySelectorAll(".list");
                allList.forEach((list) => {
                list.remove(); //remove all list with looping
            })
            }
        })
    }
 export   const checkAllHandler = () => {
        if(confirm("Do you want to check all lists ?")) {
            const allList = document.querySelectorAll(".list");
            allList.forEach((list) => {
            list.querySelector(".listCheck").checked = true;
            checkTask(list.id); //reuse the checkTask function to check all tasks
        })
        } 
    }