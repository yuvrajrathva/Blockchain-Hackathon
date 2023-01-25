import { Route, Routes } from "react-router-dom";
import "./Administrator.css"
function Administrator() {
let inputEle = document.querySelector(".input");
let submitEle = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let containerDiv = document.querySelector(".container");
let deleteAll = document.querySelector(".delete-all");
let arrayOfTasks = [];
window.onload = function () {
  // console.log(inputEle)

  if (window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
  }
  getTaskFromLocalStorage();
  submitEle.onclick = function () {
    if (inputEle.value !== "") {
      addTaskToArray(inputEle.value);
      inputEle.value = "";
    }
  };

  function addTaskToArray(taskText) {
    const task = {
      id: Date.now(),
      title: taskText,
      complated: false,
    };
    arrayOfTasks.push(task);
    // console.log(arrayOfTasks);
    addTaskToPage(arrayOfTasks);

    addTaskToLocalStorage(arrayOfTasks);
  }

  function addTaskToPage(arrayOfTasks) {
    tasksDiv.innerHTML = "";

    arrayOfTasks.forEach((task) => {
      let div = document.createElement("div");
      div.className = "task";
      if (task.complated) {
        div.className = "task done";
      }
      div.setAttribute("data-id", task.id);
      div.appendChild(document.createTextNode(task.title));
      let span = document.createElement("span");
      span.className = "del";
      span.appendChild(document.createTextNode("Delete"));
      div.appendChild(span);
      tasksDiv.appendChild(div);
      // console.log(div)
    });
  }

  function addTaskToLocalStorage(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  }
  function getTaskFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
      let tasks = JSON.parse(data);
      // console.log(tasks)
      addTaskToPage(tasks);
    }
  }

  function addElementsToPageFrom(arrayOfTasks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
      // Create Main Div
      let div = document.createElement("div");
      div.className = "task";
      // Check If Task is Done
      if (task.completed) {
        div.className = "task done";
      }
      div.setAttribute("data-id", task.id);
      div.appendChild(document.createTextNode(task.title));
      // Create Delete Button
      let span = document.createElement("span");
      span.className = "del";
      span.appendChild(document.createTextNode("Delete"));
      // Append Button To Main Div
      div.appendChild(span);
      // Add Task Div To Tasks Container
      tasksDiv.appendChild(div);
    });
  }

  // Click On Task Element
  tasksDiv.onclick = (e) => {
    if (e.target.classList.contains("del")) {
      // e.target.parentElement.remove();
      e.target.parentElement.remove();
      deleteTaskFromLocalStorage(
        e.target.parentElement.getAttribute("data-id")
      );
    }
    if (e.target.classList.contains("task")) {
      e.target.classList.toggle("done");
      updateStatusInLocalStorage(e.target.getAttribute("data-id"));
    }
  };

  function deleteTaskFromLocalStorage(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addTaskToLocalStorage(arrayOfTasks);
  }
  function updateStatusInLocalStorage(taskId) {
    arrayOfTasks.forEach((task) => {
      if (task.id == taskId)
        task.complated == false
          ? (task.complated = true)
          : (task.complated = false);
    });

    addTaskToLocalStorage(arrayOfTasks);
  }

  deleteAll.onclick = function (e) {
    tasksDiv.innerHTML = "";
    window.localStorage.removeItem("tasks");
  };
};




  return (
    <>
      <div class="container">
      <h1>Manage Rewards</h1>
        <div class="form">
          <input type="text" class="input" />
          <input type="submit" class="add" value="Add Reward" />
        </div>
        <div class="tasks"></div>
        <div class="delete-all">Delete all Rewards</div>
      </div>
    </>
  );
}
export default Administrator;
