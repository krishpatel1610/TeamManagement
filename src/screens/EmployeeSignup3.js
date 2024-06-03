import React, { useState } from 'react';

const EmployeeSignup3 = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <section style={{ marginBottom: '5rem', height: 'auto', backgroundColor: 'dark' }}>
                <div className="container h-custom mt-5 text-dark rounded-3 animated bounceIn" style={{ borderRadius: '25px', backgroundColor: '#A1DD70', padding: '2rem' }}>
                    <h1 style={{ textAlign: 'center', color: '#333' }}>Employee Signup</h1>
                    <form onSubmit={handleSubmit}>
                        {formData.map((data, index) => (
                            <div key={index} className="form-container" style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', textAlign: 'left' }}>Experience</h2>
                                <label className="form-label text-black" htmlFor={`collegeName-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Company Name:</label>
                                <input type="text" id={`collegeName-${index}`} name="collegeName" value={data.collegeName} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ flex: '0 1 48%', marginRight: '2%' }}>
                                        <label className="form-label text-black" htmlFor={`joinDate-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Join Date:</label>
                                        <input type="date" id={`joinDate-${index}`} name="joinDate" value={data.joinDate} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                    <div className="mx-2" style={{ flex: '0 1 48%' }}>
                                        <label className="form-label text-black" htmlFor={`leaveDate-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Resign Date:</label>
                                        <input type="date" id={`leaveDate-${index}`} name="leaveDate" value={data.leaveDate} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />
                                    </div>
                                </div>
                                
                                <label className="form-label text-black" htmlFor={`description-${index}`} style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Position Description:</label>
                                <textarea id={`description-${index}`} name="description" value={data.description} onChange={(e) => handleChange(index, e)} required style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', boxSizing: 'border-box',backgroundColor: '#416D19', color: 'white' }} />

                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <div style={{ flex: '1', marginRight: '5px' }}>
                                <button type="button" onClick={handleAddEducation} style={{ padding: '10px', border: 'none',  borderRadius: '5px', cursor: 'pointer', width: '100%',backgroundColor: '#416D19', color: 'white' }}>Add Experience</button>
                            </div>
                            <div style={{ flex: '1', marginLeft: '5px' }}>
                                <button type="button"  style={{ padding: '10px', border: 'none',  borderRadius: '5px', cursor: 'pointer', width: '100%',backgroundColor: '#416D19', color: 'white' }}>Submit</button>
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
