import { Route, Routes } from "react-router-dom";
import "./Student.css";

function Student() {
  return (
    <>
      <div className="student-container">
        <form>
          <h1>PAYMENT</h1>
          <label for="username">Pay to</label>
          <input
            type="text"
            placeholder="Enter your recipient's Address"
            id="username"
          />
          <label for="password">Tokens</label>
          <input type="password" placeholder="Token Numbers to send" id="password" />
          <button>PAY to Student</button>
          <p>or</p>
          <button>PAY to Vendor</button>
        </form>
      </div>
    </>
  );
}
export default Student;
