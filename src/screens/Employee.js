import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import "../screens/Company.css";

const Employee = () => {

    const [employeeData, setEmployeeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const loadCompany = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/getComp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setEmployeeData(data[1]); // Assuming data is an array of company objects
        } catch (error) {
            console.error('Error loading company data:', error);
        }
    };

    useEffect(() => {
        loadCompany();
    }, []);

    const filteredEmployeeData = employeeData.filter(item => {
        const name = item.name ? item.name.toLowerCase() : '';
        const technologies = Array.isArray(item.technologies) ? item.technologies.join(' ').toLowerCase() : (item.technologies ? item.technologies.toLowerCase() : '');
        const skills = Array.isArray(item.skills) ? item.skills.join(' ').toLowerCase() : (item.skills ? item.skills.toLowerCase() : '');

        return (
            name.includes(searchTerm.toLowerCase()) ||
            technologies.includes(searchTerm.toLowerCase()) ||
            skills.includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="hm-gradient">
                <main>
                    <div className="container" style={{ "marginTop": "15px" }}>
                        <div className="card mb-4 rounded">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="pt-3 pb-4 mb-5 text-center font-bold font-up deep-purple-text">Employees</h2>
                                        <div className="search-bar mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search by employee name, skills, or technologies..."
                                                value={searchTerm}
                                                onChange={handleSearch}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Employee Name</th>
                                            <th>Skills</th>
                                            <th>Technologies</th>
                                            <th>Social Profile</th>
                                            <th>Get more details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEmployeeData.length > 0 ? filteredEmployeeData.map((employee, index) => (
                                            <tr key={employee._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{employee.name}</td>
                                                <td>{Array.isArray(employee.skills) ? employee.skills.join(', ') : employee.skills}</td>
                                                <td>{Array.isArray(employee.technologies) ? employee.technologies.join(', ') : employee.technologies}</td>
                                                <td><Link to={employee.link}>{employee.link}</Link></td>
                                                <td><Link className='btn btn-dark text-white mt-0 mb-0 mr-3' to={`/EmployeeDetails/emp/${employee._id}`}>More</Link></td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">No results found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Employee;
