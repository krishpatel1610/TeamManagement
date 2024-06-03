import React from "react";
import webcreta from "../utilities/logo.jpg";

const Footer = () => {
  return (
    <div style={{ position: "relative", bottom: 0, left: 0, width: "100%", margin: 0, padding: 0 }}>
      <div className="container-fluid my-0 p-0" style={{ marginBottom: 0 }}>
        <footer
          className="text-center text-lg-start text-black w-100"
          style={{ backgroundColor: "white" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "black" }}
          >
            <div className="me-5 text-white">
              <span>Get connected with us</span>
            </div>

            <div>
              <a href="/" className="text-black me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-black me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-black me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="text-black me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-black me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="text-black me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-2" style={{height:"auto"}}>
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Team Management</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "black",
                      height: "2px",
                    }}
                  />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "black",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      Bootstrap Angular
                    </a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-black" style={{ textDecoration: "none", color: "black" }}>
                      Help
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@teammanagement.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3  text-white"
            style={{ backgroundColor: "black", paddingBottom: '0'}}
          >
            <img
            src={webcreta}
            alt="sample"
            width="25"
            height="25"
            className="d-inline-block align-text-top mx-2"
          />
            © 2024 Webcreta Technologies. All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
