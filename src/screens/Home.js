import React, { useEffect, useState } from "react";
import Carousle from "../utilities/Carousle";
import Header from "../utilities/Header";
import Footer from "../utilities/Footer";
import "../screens/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
      <Header />
      <Carousle />
      <div className="px-10 my-5">
        <div className="container mx-10">
          {userData ? (
            <div className="welcome-message my-5 ">
              <center><h1>Welcome, {userData.user.user.name}!!</h1></center>
            </div>
          ) : (
            <div className="row justify-content-center" style={{ width: "auto" }}>
              <div className="col-md-6 col-lg-4 column my-5">
                <div className="card gr-1">
                  <div className="txt">
                    <h1>
                      EMPLOYEE <br />
                    </h1>
                    <p>Employees are the backbone, turning vision into reality</p>
                  </div>
                  <Link to="/Logine">Login</Link>
                  <div className="ico-card">
                    <i className="fa fa-rebel"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-4 column my-5">
                <div className="card gr-2">
                  <div className="txt">
                    <h1>
                      COMPANY <br />
                    </h1>
                    <p>Companies thrive by providing opportunities and employment to many.</p>
                  </div>
                  <Link to="/Login">Login</Link>
                  <div className="ico-card">
                    <i className="fa fa-codepen"></i>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
