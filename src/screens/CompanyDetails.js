import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CompanyDetails.css"; // Make sure to create and include this CSS file
import Header from "../utilities/Header";
import Footer from "../utilities/Footer";

const CompanyDetail = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null); // Initialize as null

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCompanyData(data); // Update state with fetched data
      } catch (error) {
        console.error("Error loading company data:", error);
      }
    };

    loadCompany();
  }, [id]); // Load data when id changes

  // Render loading indicator if data is still being fetched
  if (!companyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className="center-container" style={{ marginTop: '5px', marginBottom: '5px' }}>
      <div className="card custom-card">
        <section id="minimal-statistics">
          <div className="row">
            <section id="sec" className="col-12">
              <div className="company-info">
                <h2>{companyData.company_name}</h2>
                <h4>{companyData.director_name}</h4>
                <h6>{companyData.location}</h6><br/><br/>
                <p>
                  <b>About Company</b>
                  <br />
                  {companyData.description}
                </p>
                <p>
                  <b>Technologies</b>
                  <br />
                  {companyData.technologies}
                </p>
              </div>
            </section>
          </div>
        </section>
        <section id="stats-subtitle" className="px-2">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card overflow-hidden stats-card">
                <div className="card-content">
                  <div className="card-body clearfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-pencil primary font-medium mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Employees</h5>
                      </div>
                      <div className="align-self-center">
                        <h3 className="mb-0">{companyData.number_of_employees}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-md-6 mb-3">
              <div className="card stats-card">
                <div className="card-content">
                  <div className="card-body clearfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-speech warning font-medium mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Projects</h5>
                      </div>
                      <div className="align-self-center">
                        <h3 className="mb-0">{companyData.number_of_projects}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card stats-card">
                <div className="card-content">
                  <div className="card-body clearfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-speech warning font-medium mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Located in</h5>
                      </div>
                      <div className="align-self-center">
                        <h3 className="mb-0">{companyData.city}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card stats-card">
                <div className="card-content">
                  <div className="card-body clearfix">
                    <div className="media align-items-stretch">
                      <div className="align-self-center">
                        <i className="icon-speech warning font-medium mr-2"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Contact us</h5>
                      </div>
                      <div className="align-self-center">
                        <h3 className="mb-0">{companyData.email}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default CompanyDetail;
