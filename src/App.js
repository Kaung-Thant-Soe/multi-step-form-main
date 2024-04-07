import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="number">
        <div className="sub-number" id="1" onClick={handleClicik(1)}>
          1
        </div>
        <div className="sub-number" id="2" onClick={handleClicik(2)}>
          2
        </div>
        <div className="sub-number" id="3">
          3
        </div>
        <div className="sub-number" id="4">
          4
        </div>
      </div>
      <div className="card">
        
        <Button />
      </div>
    </div>
  );
}
// function Step1() {
//   return console.log("step1");
// }
function Step1() {
  return (
    <>
      <h2> Personal info</h2>
      <h3> Please provide your name, email address, and phone number.</h3>
      <label>
        Name
        <br /> <input placeholder=" e.g. Stephen King" type="text" />
      </label>
      <label>
        Email Address <br />
        <input placeholder=" e.g. stephenking@lorem.com" type="email" />
      </label>
      <label>
        Phone Number <br />
        <input placeholder=" e.g. +1 234 567 890" type="number" />
      </label>
    </>
  );
}
//select your plan
function Step2() {
  return console.log("step2");
}
//add ons
function Step3() {
  return console.log("step3");
}
//summary //
function Step4() {
  return console.log("step4");
}
function Button() {
  return (
    <div className="btn">
      <button className="back" style={{ visibility: "hidden" }}>
        Go Back
      </button>
      <button className="next ">Next Step</button>
    </div>
  );
}
function handleClicik(i) {
  
}

export default App;
