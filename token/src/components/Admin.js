import { Route, Routes } from "react-router-dom";
import "./Admin.css";
function Admin() {
  return (
    <>
      <div className="admin-container">
        <form>
          <h1>ISSUE TOKENS</h1>
          <label for="username">Address</label>
          <input
            type="text"
            placeholder="Enter Address of student"
            id="username"
          />
          <label for="password">Tokens</label>
          <input type="password" placeholder="Token Numbers" id="password" />
          <button>ISSUE</button>
        </form>
      </div>
    </>
  );
}
export default Admin;
