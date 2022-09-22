import React, { useState } from "react";
import axios from "axios";

function Event(props) {
  const [event, setevent] = useState(false);
  const [data, setdata] = useState({});

  function handleclick() {
    try {
      axios
        .get("http://localhost:5000/events/" + props.id, {
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
  }

  return (
    <div className="eventslist">
      <h2
        onClick={() => {
          setevent(true);
          handleclick(props._id);
        }}
      >
        {props.title}
      </h2>
      <p>{props.content}</p>
      <i
        onClick={() => {
          props.delete(props.id);
        }}
        class="fas fa-trash"
      ></i>
    </div>
  );
}

export default Event;
