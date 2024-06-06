import {React,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import "../screens/Company.css";

const Company = () => {

    const [companyData, setCompanyData] = useState([]);
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
            setCompanyData(data[0]); // Assuming data is an array of company objects
        } catch (error) {
            console.error('Error loading company data:', error);
        }
    };

    useEffect(() => {
        loadCompany();
    }, []);

    const filteredCompanyData = companyData.filter(item => {
        const companyName = item.companyName ? item.companyName.toLowerCase() : '';
        const city = item.city ? item.city.toLowerCase() : '';
        const description = item.description ? item.description.toLowerCase() : '';
        
        return (
            companyName.includes(searchTerm.toLowerCase()) ||
            city.includes(searchTerm.toLowerCase()) ||
            description.includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="hm-gradient">
                <main>
                    <div className="container" style={{ marginTop: "15px" }}>
                        <div className="card mb-4 rounded">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="pt-3 pb-4 mb-5 text-center font-bold font-up deep-purple-text">Companies</h2>
                                        <div className="search-bar mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search by company name, city, or description..."
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
                                            <th>Company Name</th>
                                            <th>Description</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>Get more details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCompanyData.length > 0 ? (
                                            filteredCompanyData.map((company, index) => (
                                                <tr key={company._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{company.company_name}</td>
                                                    <td>{company.description}</td>
                                                    <td>{company.address}</td>
                                                    <td>{company.city}</td>
                                                    <td><Link className='btn btn-dark text-white mt-0 mb-0 mr-3' to={`/CompanyDetails/${company._id}`}>More</Link></td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">No companies found</td>
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

export default Company;
