import { Route, Routes } from "react-router-dom";
import "./Administrator.css"
function Administrator() {



  return (<><div class="administator-container">
    <header><center>Reward's List</center></header>
    <div class="administrator-input">
      <input type="text" placeholder="Add your rewards here."/>
      <button><i class="fas fa-plus"></i></button>
    </div>
    <div class="administrator-input">
        <input type="text" placeholder="Add your reward's address here."/>
        {/* <!-- <button><i class="fas fa-plus"></i></button> --> */}
      </div>
    <ul class="todoList">
      {/* <!-- data are comes from local storage --> */}
    </ul>
    <div class="administrator-footer">
      <span>You have added <span class="pendingTasks"></span> rewards.</span>
      <button>Clear All</button>
    </div>
  </div>
  </>
);
}
export default Administrator;
