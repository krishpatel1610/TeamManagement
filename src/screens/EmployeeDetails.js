import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CompanyDetails.css"; // Make sure to create and include this CSS file
import Header from "../utilities/Header";
import Footer from "../utilities/Footer";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null); // Initialize as null

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/emp/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setEmployeeData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error loading company data:", error);
      }
    };

    loadCompany();
  }, [id]); // Load data when id changes

  // Render loading indicator if data is still being fetched
  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="center-container"
        style={{ marginTop: "5px", marginBottom: "5px" }}
      >
        <div className="card custom-card">
          <section id="minimal-statistics">
            <div className="row">
              <section id="sec" className="col-12">
                <div className="company-info">
                  <h2>{employeeData.name}</h2>
                  <h4><a
                      href={employeeData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                    {employeeData.link}
                    </a>
                </h4>
                  <h5>
                    Email: {employeeData.email}
                  </h5>
                  <h6>
                    Contact: {employeeData.contact}
                  </h6>
                  <br />
                  <br />
                  <p>
                    <b>About me:</b>
                    <br />
                    Education:
                    {employeeData && employeeData.Education && (
                      <ul className="education-list">
                        {employeeData.Education.map((edu, index) => (
                          <li key={index}>
                            <p><b>Collage Name: {edu.collage_name}</b></p>
                            <p>
                              Starting Date: {edu.join_date} &nbsp; Ending
                              Date: {edu.leave_date}
                            </p>
                            <p>Course Type: {edu.course_type}</p>
                            <p>Description: {edu.description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                    <br />
                    Experience:
                    {employeeData && employeeData.Experience && (
                      <ul className="education-list">
                        {employeeData.Experience.map((exp, index) => (
                          <li key={index}>
                            <p><b>Company Name: {exp.company_name}</b></p>
                            <p>
                              Joining Date: {exp.join_date} &nbsp; Resign Date:{" "}
                              {exp.resine_date}
                            </p>
                            <p>Description: {exp.post_description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </p>
                  <p>
                    <b>Skills</b>
                    <br />
                    {employeeData.skills}
                  </p>
                  <p>
                    <b>Technologies</b>
                    <br />
                    {employeeData.technologies}
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EmployeeDetails;
