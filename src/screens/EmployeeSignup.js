import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmployeeSignup = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        password: '',
        link:'',
        technologies: [],
        skills: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTechnologyChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...formData,
            technologies: checked ? [...prevState.technologies, name] : prevState.technologies.filter(tech => tech !== name)
        }));
    };

    const handleSkillsChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...formData,
            skills: checked ? [...prevState.skills, name] : prevState.skills.filter(skill => skill !== name)
        }));
    };
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        const Data = formData;
        global.fData = [Data];
        console.log(global.fData);
        navigate('/EmployeeSignup2');
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <section className="mb-5 h-auto" style={{ backgroundColor: "dark" }}>
                <div className="container h-custom mt-5 text-dark rounded-3 animated bounceIn" style={{ borderRadius: "25px", backgroundColor: "#A1DD70" }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{height:"auto"}}>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="signup-container">
                        <h2 className="signup-header mt-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Employee Signup</h2>
                        <form>
                            <div className="row mb-2 mt-2">
                                <div className="col">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control"  style={{ backgroundColor: "#416D19", color: "white" }} id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row mb-2 mt-2">
                                <div className="col">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="text" className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row mb-2 mt-2">
                                <div className="col">
                                    <label htmlFor="link">Social Media Link</label>
                                    <input type="text" className="form-control" style={{ backgroundColor: "#416D19", color: "white" }} id="link" name="link" value={formData.link} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="col d-flex flex-column">
                                    <label className="form-label text-black" style={{ marginBottom: '0.5rem' }}>Technologies</label>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="PHP" name="PHP" checked={formData.technologies.includes("PHP")} onChange={handleTechnologyChange} />
                                        <label className="form-check-label" htmlFor="PHP">PHP</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="Java" name="Java" checked={formData.technologies.includes("Java")} onChange={handleTechnologyChange} />
                                        <label className="form-check-label" htmlFor="Java">Java</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="C" name="C" checked={formData.technologies.includes("C")} onChange={handleTechnologyChange} />
                                        <label className="form-check-label" htmlFor="C">C</label>
                                    </div>
                                </div>

                                <div className="col d-flex flex-column">
                                    <label className="form-label text-black" style={{ marginBottom: '0.5rem' }}>Skills</label>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="HTML" name="HTML" checked={formData.skills.includes("HTML")} onChange={handleSkillsChange} />
                                        <label className="form-check-label" htmlFor="HTML">HTML</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="CSS" name="CSS" checked={formData.skills.includes("CSS")} onChange={handleSkillsChange} />
                                        <label className="form-check-label" htmlFor="CSS">CSS</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{ backgroundColor: '#416D19', color: 'white' }} type="checkbox" id="BOOTSTRAP5" name="BOOTSTRAP5" checked={formData.skills.includes("BOOTSTRAP5")} onChange={handleSkillsChange} />
                                        <label className="form-check-label" htmlFor="BOOTSTRAP5">Bootstrap 5</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="col">
                                    <Link type="button" className="btn btn-primary btn-block" onClick={handleSubmit} style={{ width: '100%', padding: '0.5rem', backgroundColor: '#416D19', color: 'white' }} to="/EmployeeSignup2">Add Education</Link>
                                </div>
                            </div>
                            <p className='text-center mt-3'> 1 of 3</p>
                        </form>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmployeeSignup;
