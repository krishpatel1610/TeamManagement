import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for animations and styling

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        directorName: '',
        description: '',
        technologies: [],
        numProjects: '',
        numEmployees: '',
        city: '',
        location: ''
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            let updatedTechnologies = [...formData.technologies];
            if (checked) {
                updatedTechnologies.push(value);
            } else {
                updatedTechnologies = updatedTechnologies.filter(tech => tech !== value);
            }
            setFormData({ ...formData, [name]: updatedTechnologies });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/registercompany", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid data!!");
        }
        if (json.success) {
            navigate('/');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-light h-auto rounded-3" style={{ padding: "0", minHeight: "100vh" }}>
            <div className="container h-auto mt-2 text-dark rounded-3 shadow-lg p-2 rounded-4 animated bounceIn" style={{ borderRadius: "25px", backgroundColor: "#A1DD70" }}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column mb-3 mx-4">
                        <h2 className="text-center mb-4">Company Registration</h2>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Company" className="img-fluid rounded-3 shadow-lg" style={{ maxHeight: '400px' }} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1 mb-0" style={{ height: "auto" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-2 mt-2">
                                <div className="col">
                                    <label htmlFor="name">Company Name</label>
                                    <input type="text" className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="directorName">Director Name</label>
                                    <input type="text" className="form-control"  style={{ backgroundColor: "#416D19", color: "white" }} id="directorName" name="directorName" value={formData.directorName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" style={{ backgroundColor: "#416D19", color: "white" }} name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <div className="row mb-2">
                                <div className="col d-flex flex-column">
                                    <label>Technologies</label>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="tech1" name="technologies" value="PHP" onChange={handleChange} />
                                        <label className="form-check-label"  htmlFor="tech1">PHP</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="tech2" name="technologies" value="React.js" onChange={handleChange} />
                                        <label className="form-check-label"  htmlFor="tech2">React.js</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="tech3" name="technologies" value="Node.js" onChange={handleChange} />
                                        <label className="form-check-label"  htmlFor="tech3">Node.js</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="tech4" name="technologies" value="Express.js" onChange={handleChange} />
                                        <label className="form-check-label"  htmlFor="tech4">Express.js</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="tech5" name="technologies" value="Flutter" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="tech5">Flutter</label>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column">
                                    <div className="form-group mb-2">
                                        <label htmlFor="numProjects">Number of Projects</label>
                                        <select className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="numProjects" name="numProjects" value={formData.numProjects} onChange={handleChange} required>
                                            <option value="0-100">0-100</option>
                                            <option value="100-200">100-200</option>
                                            <option value="200-300">200-300</option>
                                            <option value="300-400">300-400</option>
                                            <option value="500+">500+</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="numEmployees">Number of Employees</label>
                                        <select className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="numEmployees" name="numEmployees" value={formData.numEmployees} onChange={handleChange} required>
                                            <option value="0-100">0-100</option>
                                            <option value="100-200">100-200</option>
                                            <option value="200-300">200-300</option>
                                            <option value="300-400">300-400</option>
                                            <option value="500+">500+</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="city">City</label>
                                        <select className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="city" name="city" value={formData.city} onChange={handleChange} required>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Gandhinagar">Gandhinagar</option>
                                            <option value="Pune">Pune</option>
                                            <option value="Delhi">Delhi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="location">Location</label>
                                <textarea className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="location" name="location" rows="3" value={formData.location} onChange={handleChange} required></textarea>
                            </div>
                            <div className="text-center mb-2">
                                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: "#416D19", color: "white" }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
