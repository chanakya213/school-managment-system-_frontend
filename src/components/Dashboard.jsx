import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const [student, setstudent] = useState([]);
  const [faculty, setfaculty] = useState([]);
  const [events, setevents] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/");
    }
    try {
      axios
        .get("http://localhost:5000/student", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setstudent(res.data);
        });

      axios
        .get("http://localhost:5000/faculty", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setfaculty(res.data);
        });
      axios
        .get("http://localhost:5000/events", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setevents(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function deletetoken() {
    localStorage.removeItem("token");
  }

  return (
    <div id="dashboard">
      <div className="controlpannel text-center">
        <a href="/studentsdashboard">
          <div className="box">
            <h3>Total Students</h3>
            <h3>{student.length}</h3>
          </div>
        </a>
        <a href="/facultydashboard">
          <div className="box">
            <h3>Total faculty</h3>
            <h3>{faculty.length}</h3>
          </div>
        </a>
        <a href="/eventsdashboard">
          <div className="box">
            <h3>Total Events</h3>
            <h3>{events.length}</h3>
          </div>
        </a>
        <div onClick={deletetoken} className="addstudentdiv">
          <a href="/administration">
            <div className="addstudent text-center">
              <i class="fas fa-sign-out-alt">Sign Out</i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
