import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Logine = () => {
    const [credantials, setCredantials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const onChange = (event) => {
        setCredantials({ ...credantials, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch("http://localhost:5000/api/loginEmployee", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: credantials.email, password: credantials.password })
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const json = await response.json();
            console.log('Login response:', json);

            if (!json.success) {
                alert("Enter valid data!!");
                return;
            }

            localStorage.setItem("authToken", json.authToken); // Store the generated authToken to localStorage
            console.log('Stored authToken:', localStorage.getItem("authToken"));

            // Call the handleVerify function
            await handleVerify();
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred while logging in.');
        }
    };

    const handleVerify = async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            console.log('Using authToken:', authToken);

            const response = await fetch("http://localhost:5000/api/auth/protected-route", {
                method: 'GET',
                headers: {
                    'Authorization': `${authToken}`
                },
            });

            if (!response.ok) {
                throw new Error('Failed to verify');
            }

            const json = await response.json();
            console.log('Verification response:', json);

            if (!json.success) {
                alert("Data is not verified!!");
                return;
            }

            alert("Login successful!!");
            localStorage.setItem("userData", JSON.stringify(json));
            console.log(localStorage.getItem("userData"));
            navigate('/');

            // Optionally update the authToken if the response contains a new one
            if (json.authToken) {
                localStorage.setItem("authToken", json.authToken);
                console.log('Updated authToken:', localStorage.getItem("authToken"));
            }
        } catch (error) {
            console.error('Error during verification:', error);
            alert('An error occurred during verification.');
        }
    };   

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center ">
            <section className="mb-5 h-auto" style={{ backgroundColor: "dark" }}>
                <div className="container h-custom mt-5 text-dark rounded-3 animated bounceIn" style={{ borderRadius: "25px", backgroundColor: "#A1DD70" }}>
                    <div className="row d-flex justify-content-center align-items-center" style={{height:"auto"}}>
                        <div className="col-md-9 col-lg-6 col-xl-5 ">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center mt-3" style={{ opacity: "0.8" }}>
                                    <p className="lead fw-normal mb-0 me-2">New User..??</p><br />
                                    <Link to="/EmployeeSignup" className='mx-2 btn btn-m btn-info rounded-pill' >Employee</Link>
                                </div>

                                <div className="divider d-flex align-items-center justify-content-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div className="form-group mb-4">
                                    <label className="form-label text-black" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg" style={{ backgroundColor: "#416D19", color: "white" }} name="email" value={credantials.email} onChange={onChange} />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="form-label text-black" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg" style={{ backgroundColor: "#416D19", color: "white" }} name="password" value={credantials.password} onChange={onChange} />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" style={{ backgroundColor: "#416D19", color: "white" }} type="checkbox" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="mx-3 btn btn-sm" style={{ backgroundColor: "#416D19", color: "white" }}>Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2 pb-3">
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", backgroundColor: "#416D19", color: "white" }}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Logine;
