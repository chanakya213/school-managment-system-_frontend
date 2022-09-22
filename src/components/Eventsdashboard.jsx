import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Event from "./Event";
import { Navigate } from "react-router-dom";

function Eventsdashboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/");
    }
    try {
      axios
        .get("http://localhost:5000/events", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setdata(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function deleteevent(id) {
    try {
      axios
        .delete("http://localhost:5000/events/" + id, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="eventsdashboard">
      <div className="addstudentdiv">
        <a href="/events">
          <div className="addstudent text-center">
            <i class="fas fa-plus"></i>
          </div>
        </a>
      </div>
      <h1 className="text-center"> EVENTS HANDLER </h1>
      <div className="allevents">
        {data.map((item) => {
          return (
            <Event
              key={item._id}
              id={item._id}
              title={item.title}
              content={item.content}
              delete={deleteevent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Eventsdashboard;
