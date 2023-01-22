import { Link } from "react-router-dom";
import React from "react";

import "./Role.css";

function Role() {
  return (
    <>
      <div id="loginform">
        <h2 id="headerTitle">Select Role</h2>
        <Link to="/" id="button" className="row">
          <button>Administrator</button>
        </Link>
        <div id="button" class="row">
          <button>Admin</button>
        </div>
        <div id="button" class="row">
          <button>Student</button>
        </div>
      </div>
    </>
  );
}
export default Role;
