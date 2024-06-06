import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeSignup2 = () => {
    const [formData, setFormData] = useState([{
            collage_name: '',
            join_date: '',
            leave_date: '',
            description: '',
            course_type: ''
        }
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;
        setFormData(newFormData);
    };

    const handleAddEducation = () => {
        setFormData([...formData,  {
                collage_name: '',
                join_date: '',
                leave_date: '',
                description: '',
                course_type: ''
            }
        ]);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Data = formData;

        // Retrieve the data from local storage
        let storedData = JSON.parse(localStorage.getItem('fData'));
        
        // Check if fData is null or if it doesn't have the expected structure
        if (!storedData || !Array.isArray(storedData) || !storedData[0]) {
            storedData = [{ Education: [] }];
        }
        
        // Ensure storedData[0].Education is an array
        if (!Array.isArray(storedData[0].Education)) {
            storedData[0].Education = [];
        }
        
        // Update the Education property with the new data
        storedData[0].Education = [...storedData[0].Education, ...Data];
        
        // Store the updated data back to local storage
        localStorage.setItem('fData', JSON.stringify(storedData));
        
        console.log(storedData); // You can perform further actions like sending the data to your backend here
        
        
        navigate('/EmployeeSignup3');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <section style={{ marginBottom: '5rem', height: 'auto', backgroundColor: 'dark' }}>
                <div className="container h-custom mt-5 text-dark rounded-3 animated bounceIn" style={{ borderRadius: '25px', backgroundColor: '#A1DD70', padding: '2rem' }}>
                    <h1 style={{ textAlign: 'center', color: '#333' }}>Employee Signup</h1>
                    <form>
                        {formData.map((data, index) => (
                            <div key={index} className="form-container" style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textAlign: 'left' }}>Education</h2>
                                <label className="form-label text-black" htmlFor={`collage_name-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>College Name:</label>
                                <input type="text" id={`collage_name-${index}`} name="collage_name" value={data.collage_name} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '0 1 48%', marginRight: '2%' }}>
                                        <label className="form-label text-black" htmlFor={`join_date-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Join Date:</label>
                                        <input type="date" id={`join_date-${index}`} name="join_date" value={data.join_date} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                    <div className="mx-2" style={{ flex: '0 1 48%' }}>
                                        <label className="form-label text-black" htmlFor={`leave_date-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Leave Date:</label>
                                        <input type="date" id={`leave_date-${index}`} name="leave_date" value={data.leave_date} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                </div>
                                
                                <label className="form-label text-black" htmlFor={`description-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Description:</label>
                                <textarea id={`description-${index}`} name="description" value={data.description} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />

                                <label className="form-label text-black" htmlFor={`course_type-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Course Type:</label>
                                <select id={`course_type-${index}`} name="course_type" value={data.course_type} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }}>
                                    <option value="" disabled>Select Course Type</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="BCA">BCA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                </select>
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div style={{ flex: '1', marginRight: '5px' }}>
                                <button type="button" onClick={handleAddEducation} style={{ padding: '10px', border: 'none',  borderRadius: '5px', cursor: 'pointer', width: '100%',backgroundColor: '#416D19', color: 'white' }}>Add Education</button>
                            </div>
                            <div style={{ flex: '1', marginLeft: '5px' }}>
                                <Link type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} style={{ padding: '10px', border: 'none', backgroundColor: '#416D19', color: 'white', borderRadius: '5px', cursor: 'pointer', width: '100%' }} to="/EmployeeSignup3">Add Experience</Link>
                            </div>
                        </div>
                        <p className='text-center mt-3'> 2 of 3</p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EmployeeSignup2;
