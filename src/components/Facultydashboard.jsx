import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Facultydashboard() {
  const [data, setdata] = useState([]);
  const [editdata, seteditdata] = useState({});
  const [form, showform] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/");
    }
    try {
      axios
        .get("http://localhost:5000/faculty", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setdata(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handledit(id) {
    try {
      showform(true);
      axios
        .get("http://localhost:5000/faculty/" + id, {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          seteditdata(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handlechange(e) {
    seteditdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function submitform(e) {
    e.preventDefault();
    axios
      .patch("http://localhost:5000/faculty/" + editdata._id, editdata, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function deletefaculty(id) {
    try {
      axios
        .delete("http://localhost:5000/faculty/" + id, {
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
    <div className="studentdashboard text-center">
      {form && (
        <div className="studenteditform">
          <form onSubmit={submitform} method="POST">
            <div className="registrationform">
              <div className="close">
                <i
                  class="fas fa-times"
                  onClick={() => {
                    showform(false);
                  }}
                ></i>
              </div>
              <input
                onChange={handlechange}
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Teacher-Name"
                value={editdata.name}
              />
              <input
                onChange={handlechange}
                type="number"
                className="form-control"
                name="phonenumber"
                id="phonenumber"
                placeholder="phone-number"
                value={editdata.phonenumber}
              />
              <input
                onChange={handlechange}
                type="text"
                name="designation"
                id="designation"
                className="form-control"
                placeholder="Designation"
                value={editdata.designation}
              />
              <input
                onChange={handlechange}
                type="text"
                name="village"
                id="village"
                className="form-control"
                placeholder="Village"
                value={editdata.village}
              />
              <button type="submit" class="btn btn-warning">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="addstudentdiv">
        <a href="/facultyregistration">
          <div className="addstudent text-center">
            <i class="fas fa-user-plus"></i>
          </div>
        </a>
      </div>
      <div className="studentslist">
        <h1>SCHOOL FACULTY</h1>
        <table className="table table-light table-striped table-hover">
          <thead>
            <tr>
              <th>Teacher Name</th>
              <th>Designation</th>
              <th>Phone-number</th>
              <th>village</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.designation}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.village}</td>
                  <td>
                    <i
                      onClick={() => {
                        handledit(item._id);
                      }}
                      className="fas fa-edit"
                    ></i>

                    <i
                      onClick={() => {
                        deletefaculty(item._id);
                      }}
                      className="fas fa-trash-alt"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Facultydashboard;
