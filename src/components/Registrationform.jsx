import React, { useState } from "react";
import axios from "axios";

function Registrationform() {
  const [data, setdata] = useState({
    fullname: "",
    admission: "",
    classname: "",
    phonenumber: "",
    address: "",
    village: "",
  });

  function handlechange(e) {
    setdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function submitform(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/student", data, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <div className="registrationform-div">
      <h1 className="text-center">Students Registration Form</h1>
      <form onSubmit={submitform} method="POST">
        <div className="registrationform">
          <input
            onChange={handlechange}
            type="number"
            className="form-control"
            name="admission"
            id="admission"
            placeholder="admission-number"
          />
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            name="fullname"
            id="fullname"
            placeholder="full-name"
          />
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            name="classname"
            id="classname"
            placeholder="class"
          />
          <input
            onChange={handlechange}
            type="number"
            className="form-control"
            name="phonenumber"
            id="phonenumber"
            placeholder="phone-number"
          />
          <input
            onChange={handlechange}
            type="text"
            name="address"
            id="address"
            className="form-control"
            placeholder="Address"
          />
          <input
            onChange={handlechange}
            type="text"
            name="village"
            id="village"
            className="form-control"
            placeholder="Village"
          />
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registrationform;
