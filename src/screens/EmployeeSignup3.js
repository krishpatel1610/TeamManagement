import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EmployeeSignup3 = () => {
    const [formData, setFormData] = useState([
        
         {
            company_name: '',
            join_date: '',
            resine_date: '',
            post_description: ''
        },
]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;
        setFormData(newFormData);
    };

    const handleAddEducation = () => {
        setFormData([...formData, {
            company_name: '',
            join_date: '',
            resine_date: '',
            post_description: ''
        }]);
    };

    let navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Form submission logic here
        const Data = formData; 
        global.fData[0].Experience = [...global.fData[0].Experience, ...Data];
        console.log(global.fData);
        const response = await fetch("http://localhost:5000/api/createemployee", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(global.fData[0])
        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter valid data!!");
        }
        if (json.success) {
            alert("Registered!!");
            navigate('/');
        }

    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <section style={{ marginBottom: '5rem', height: 'auto', backgroundColor: 'dark' }}>
                <div className="container h-custom mt-5 text-dark rounded-3 animated bounceIn" style={{ borderRadius: '25px', backgroundColor: '#A1DD70', padding: '2rem' }}>
                    <h1 style={{ textAlign: 'center', color: '#333' }}>Employee Signup</h1>
                    <form>
                        {formData.map((data, index) => (
                            <div key={index} className="form-container" style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textAlign: 'left' }}>Experience</h2>
                                <label className="form-label text-black" htmlFor={`company_name-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Company Name:</label>
                                <input type="text" id={`company_name-${index}`} name="company_name" value={data.company_name} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '0 1 48%', marginRight: '2%' }}>
                                        <label className="form-label text-black" htmlFor={`join_date-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Join Date:</label>
                                        <input type="date" id={`join_date-${index}`} name="join_date" value={data.join_date} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                    <div className="mx-2" style={{ flex: '0 1 48%' }}>
                                        <label className="form-label text-black" htmlFor={`resine_date-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Resign Date:</label>
                                        <input type="date" id={`resine_date-${index}`} name="resine_date" value={data.resine_date} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                </div>
                                
                                <label className="form-label text-black" htmlFor={`post_description-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Position Description:</label>
                                <textarea id={`post_description-${index}`} name="post_description" value={data.post_description} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />

                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div style={{ flex: '1', marginRight: '5px' }}>
                                <button type="button" onClick={handleAddEducation} style={{ padding: '10px', border: 'none',  borderRadius: '5px', cursor: 'pointer', width: '100%',backgroundColor: '#416D19', color: 'white' }}>Add Experience</button>
                            </div>
                            <div style={{ flex: '1', marginLeft: '5px' }}>
                                <button type="button" onClick={handleSubmit} style={{ padding: '10px', border: 'none',  borderRadius: '5px', cursor: 'pointer', width: '100%',backgroundColor: '#416D19', color: 'white' }}>Submit</button>
                            </div>
                        </div>
                        <p className='text-center mt-3'> 3 of 3</p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EmployeeSignup3;
