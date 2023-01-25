import { Link } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Role.css";

function Role() {
  return (
    <>
      <div id="loginform">
        <h2 id="headerTitle">Select Your Role</h2>
        <Link
          to="/administrator"
          style={{ textDecoration: "none"}}
        >
          <div id="button" class="row">
            <button>Administrator</button>
          </div>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <div id="button" class="row">
            <button>Admin</button>
          </div>
        </Link>
        <Link to="/student" style={{ textDecoration: "none" }}>
          <div id="button" class="row">
            <button>Student</button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Role;
