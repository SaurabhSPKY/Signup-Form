import React, { useState } from 'react';
import "./SignupForm.css"
const SignupForm = () => {
  const [formData, setFormData] = useState({
     Username: '',
     Password: '',
     Phonenumber: '',
     Email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.firstName} ${formData.lastName}!`);
    console.log('Form Data:', formData);
    
  };

  return (
    <div className='card'>
    <h1>SignUp Form</h1>
    <form className="for" onSubmit={handleSubmit}>
     
        <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          id="Username" 
          name="Username" 
          value={formData.Username} 
          onChange={handleChange} 
          required 
        />
      <br/><br/>
     
        <label htmlFor="password">Password:  </label>
        <input 
          type="pass" 
          id="pass" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
      <br/><br/>
     
        <label htmlFor="email">Email Id  :            </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      <br/><br/>
     
        <label htmlFor="phonenumber">Phone No.:</label>
        <input 
          type="number" 
          id="phone" 
          name="phonenumber" 
          value={formData.phonenumber} 
          onChange={handleChange} 
          required 
        />
     <br/><br/>
      <button className="btn" type="login"><b>Login</b></button>
    </form>
    </div>
  );
};

export default SignupForm;

