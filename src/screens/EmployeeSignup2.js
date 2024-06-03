import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EmployeeSignup2 = () => {
    const [formData, setFormData] = useState([
        {
            collegeName: '',
            joinDate: '',
            leaveDate: '',
            description: '',
            courseType: ''
        }
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;
        setFormData(newFormData);
    };

    const handleAddEducation = () => {
        setFormData([...formData, {
            collegeName: '',
            joinDate: '',
            leaveDate: '',
            description: '',
            courseType: ''
        }]);
    };
    
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        const Data = formData; 
        global.fData = [...global.fData,Data];
        console.log(global.fData);
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
                                <label className="form-label text-black" htmlFor={`collegeName-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>College Name:</label>
                                <input type="text" id={`collegeName-${index}`} name="collegeName" value={data.collegeName} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '0 1 48%', marginRight: '2%' }}>
                                        <label className="form-label text-black" htmlFor={`joinDate-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Join Date:</label>
                                        <input type="date" id={`joinDate-${index}`} name="joinDate" value={data.joinDate} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                    <div className="mx-2" style={{ flex: '0 1 48%' }}>
                                        <label className="form-label text-black" htmlFor={`leaveDate-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Leave Date:</label>
                                        <input type="date" id={`leaveDate-${index}`} name="leaveDate" value={data.leaveDate} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                </div>
                                
                                <label className="form-label text-black" htmlFor={`description-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Description:</label>
                                <textarea id={`description-${index}`} name="description" value={data.description} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />

                                <label className="form-label text-black" htmlFor={`courseType-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Course Type:</label>
                                <select id={`courseType-${index}`} name="courseType" value={data.courseType} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }}>
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
