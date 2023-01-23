import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthProvider from "./Context/Authprovider";
import React, { Fragment } from "react";

import Homepage from "./Pages/Homepage/Homepage";
import DashboardPage from "./Pages/Admin/Dashboardpage";

import AddServices from "./Components/AdminDashboard/AddServices";
import Register from "./Pages/RegistrationPage/Singup";
import Login from "./Pages/LoginPage/LoginPage";
import AdminRoute from "./Pages/LoginPage/AdminRoute";
import PrivateRoute from "./Pages/LoginPage/PrivateRoute";
import Allservice from "./Components/AdminDashboard/AllServices";
import OrderPlace from "./Components/OrderPlace/PlaceOrder";
import Allorders from "./Components/AdminDashboard/AllOrders";
import Userorders from "./Components/Userorders/UserOrders";
import ServcieDetail from "./Components/Services/ServceDetails";
import { Placeholder } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/admindashboard" element={<DashboardPage />} />
            <Route path="/addservice" element={<AddServices />} />
            <Route path="/singup" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allservices" element={<Allservice />} />
            <Route path="/placeorder/:serviceId" element={<OrderPlace />} />
            {/* <PrivateRoute path="/placeorder/:serviceId">
                <OrderPlace></OrderPlace>
              </PrivateRoute> */}
            <Route path="/allorders" element={<Allorders />} />
            <Route path="/myorders" element={<Userorders />} />
            <Route
              path="/serviceDetail/:serviceId"
              element={<ServcieDetail />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
