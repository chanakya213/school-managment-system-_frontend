import React, { useState } from "react";
import axios from "axios";

function Eventform() {
  const [data, setdata] = useState({
    title: "",
    content: "",
  });

  function handlechange(e) {
    setdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function submitform(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/events", data, {
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
      <h1 className="text-center">Add Events With Title and Content</h1>
      <form onSubmit={submitform} method="POST">
        <div className="registrationform">
          <input
            onChange={handlechange}
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Title"
          />
          <input
            onChange={handlechange}
            type="text"
            name="content"
            id="content"
            className="form-control"
            placeholder="content"
          />
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Eventform;
