import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center">
          <NavLink className="navbar-brand d-flex align-items-center" to="/" style={{ marginRight: '10px' }}>
            <img
              src="https://th.bing.com/th/id/OIP.f6mJ2k8jbchdiVPyOqKE8gHaE8?pid=ImgDet&w=206&h=137&c=7&dpr=1.3"
              alt=""
              width="100"
              height="70"
              className="d-inline-block align-text-top"
            />
            <p className="m-0 p-0">Team Management</p>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="btn" exact activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              {(!userData || (userData && userData.user && userData.user.user && userData.user.user.type === "company")) && (
                <li className="nav-item">
                  <NavLink className="btn" activeClassName="active" to="/Employee">
                    Employees
                  </NavLink>
                </li>
              )}
              {(!userData || (userData && userData.user && userData.user.user && userData.user.user.type === "employee")) && (
                <li className="nav-item">
                  <NavLink className="btn" activeClassName="active" to="/Company">
                    Companies
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="btn" activeClassName="active" to="/About">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="btn" activeClassName="active" to="/Contact">
                  Contact us
                </NavLink>
              </li>
              {userData && (
                <li className="nav-item">
                  <NavLink className="btn" style={{ backgroundColor: "black", color: "white" }} onClick={handleLogout} to="/">
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
