import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="/" style={{ marginRight: '10px' }}>
          <img
            src="https://th.bing.com/th/id/OIP.f6mJ2k8jbchdiVPyOqKE8gHaE8?pid=ImgDet&w=206&h=137&c=7&dpr=1.3"
            alt=""
            width="100"
            height="70"
            className="d-inline-block align-text-top"
          />
          <p className="m-0 p-0">Team Management</p>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="btn active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn"
                href="/services"
                tabIndex="-1"
              >
                
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="/">
              Employees
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" href="/">
                Companies
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
