import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registrationform from "./components/Registrationform";
import Dashboard from "./components/Dashboard";
import Studentsdashboard from "./components/Studentsdashboard";
import Facultydashboard from "./components/Facultydashboard";
import Eventsdashboard from "./components/Eventsdashboard";
import Facultyregistration from "./components/Facultyregistration";
import Eventform from "./components/Eventsform";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/administration" element={<Login />} />
        {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentregistration" element={<Registrationform />} />
        <Route path="/facultydashboard" element={<Facultydashboard />} />
        <Route path="/events" element={<Eventform />} />
        <Route path="/facultyregistration" element={<Facultyregistration />} />
        <Route path="/eventsdashboard" element={<Eventsdashboard />} />
        <Route path="/studentsdashboard" element={<Studentsdashboard />} />
      </Routes>
    </div>
  );
}

export default App;
