import React, { useState } from "react";
import axios from "axios";

function Facultyregistration() {
  const [data, setdata] = useState({
    name: "",
    designation: "",
    phonenumber: "",
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
      .post("http://localhost:5000/faculty", data, {
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
      <h1 className="text-center">Faculty Registration Form</h1>
      <form onSubmit={submitform} method="POST">
        <div className="registrationform">
          <input
            onChange={handlechange}
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Teacher-Name"
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
            name="designation"
            id="designation"
            className="form-control"
            placeholder="Designation"
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

export default Facultyregistration;
