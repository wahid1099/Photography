import React from "react";
import Header from "../Navbar/head";
import Navbar from "./Navbar.jsx";
import admingimng from "./admin.jpg";
function Dashboard() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <h2 className="pt-4">Admin Dashboard</h2>

      <img src={admingimng} className="img-fluid" alt="Admin" />
    </div>
  );
}

export default Dashboard;
