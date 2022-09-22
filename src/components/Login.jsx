import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login(){
    
   const [auth,setauth] = useState(false);
    const [tempdata,setdata] = useState({
        email:"",
        password:""
    });

    function handlechange(e){
        setdata(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    };
    function handlesubmit(e){
        e.preventDefault();
        axios.post("http://localhost:5000/login",tempdata).then(res=>{
            if(res.data.token){
                localStorage.setItem("token",res.data.token);
            }
            setauth(true);
        });
    };
    
    if(localStorage.getItem("token") || auth){
        return <Navigate to="/dashboard" />
    };

    return (
        <div className="login">
            <div className="row">
                <div className="col col-6">
                <h1>LogIn To Access The Dashboard</h1>
                </div>
            </div>
            <div className="col col-6">
            <form onSubmit={handlesubmit} method="POST">
            <div className="loginitems">
            <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="image not found" />
          <input type="email" onChange={handlechange} className="form-control" placeholder="EMAIL" name="email" />
          <input type="password" onChange={handlechange}  className="form-control" placeholder="PASSWORD" name="password" />
          <button type="submit" className="btn btn-info">Submit</button>
          </div>
          </form>
          
      </div>
      </div>
    )
};

export default Login;