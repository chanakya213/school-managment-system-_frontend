import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Studentsdashboard() {
  const [data, setdata] = useState([]);
  const [editdata, seteditdata] = useState({});
  const [form, showform] = useState(false);
  const [input, setinput] = useState("");

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/student", {
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

  function handledit(id) {
    try {
      showform(true);
      axios
        .get("http://localhost:5000/student/" + id, {
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
      .patch("http://localhost:5000/student/" + editdata._id, editdata, {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function deletestudent(id) {
    try {
      axios
        .delete("http://localhost:5000/student/" + id, {
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
                type="number"
                className="form-control"
                name="admission"
                id="admission"
                placeholder="admission-number"
                value={editdata.admission}
              />
              <input
                onChange={handlechange}
                type="text"
                className="form-control"
                name="fullname"
                id="fullname"
                placeholder="full-name"
                value={editdata.fullname}
              />
              <input
                onChange={handlechange}
                type="text"
                className="form-control"
                name="classname"
                id="classname"
                placeholder="class"
                value={editdata.classname}
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
                name="address"
                id="address"
                className="form-control"
                placeholder="Address"
                value={editdata.address}
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
        <a href="/studentregistration">
          <div className="addstudent text-center">
            <i class="fas fa-user-plus"></i>
          </div>
        </a>
      </div>
      <div className="me-2">
        <input
          className="form-control serchfield"
          type="search"
          placeholder="Search-By-Name"
          aria-label="Search"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        ></input>
      </div>
      <div className="studentslist">
        <h1>All STUDENTS</h1>
        <table className="table table-light table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Admission</th>
              <th>Classname</th>
              <th>Phone-number</th>
              <th>village</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((student) => {
                if (input == "") {
                  return student;
                } else if (
                  student.fullname.toLowerCase().includes(input.toLowerCase())
                ) {
                  return student;
                }
              })
              .map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.fullname}</td>
                    <td>{item.admission}</td>
                    <td>{item.classname}</td>
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
                          deletestudent(item._id);
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

export default Studentsdashboard;
