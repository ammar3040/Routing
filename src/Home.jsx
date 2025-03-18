

import React, { useState } from 'react';

function Home() {


    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Data has been saved to localStorage!');
      };
    
      return (
        <div className="form-container">
          <h2>Form Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Home


