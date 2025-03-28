import { useState, useEffect } from "react";
import "./FormStyles.css"; // We'll create this CSS file

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", hobby: [], gender: "", img: "" });
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData")) || [];
    setStoredData(Array.isArray(data) ? data : []);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedHobbies = checked
          ? [...prevData.hobby, value]
          : prevData.hobby.filter((hobby) => hobby !== value);
        return { ...prevData, hobby: updatedHobbies };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...storedData, formData];
    setStoredData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
    setFormData({ name: "", email: "", hobby: [], gender: "", img: "" });
  };

  return (
    <div className="form_container">
      <div className="form_area">
        <h2 className="form_title">User Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label className="form_label">Name</label>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="form_style" 
              placeholder="Enter name" 
              required 
            />
          </div>
          <div className="form_group">
            <label className="form_label">Email</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="form_style" 
              placeholder="Enter email" 
              required 
            />
          </div>
          <div className="form_group">
            <label className="form_label">Hobbies</label>
            <div className="hobbies_container">
              {["Reading", "Traveling", "Gaming"].map((hobby) => (
                <div key={hobby} className="checkbox_group">
                  <input 
                    type="checkbox" 
                    name="hobby" 
                    value={hobby} 
                    checked={formData.hobby.includes(hobby)} 
                    onChange={handleChange} 
                    className="checkbox_style" 
                  />
                  <label>{hobby}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form_group">
            <label className="form_label">Gender</label>
            <div className="gender_container">
              <div className="radio_group">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Male" 
                  checked={formData.gender === "Male"} 
                  onChange={handleChange} 
                  className="radio_style" 
                />
                <label>Male</label>
              </div>
              <div className="radio_group">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Female" 
                  checked={formData.gender === "Female"} 
                  onChange={handleChange} 
                  className="radio_style" 
                />
                <label>Female</label>
              </div>
            </div>
          </div>
          <div className="form_group">
            <label className="form_label">Profile Image</label>
            <input 
              type="text" 
              name="img" 
              value={formData.img} 
              onChange={handleChange} 
              className="form_style" 
              placeholder="Enter image URL" 
            />
            {formData.img && <img src={formData.img} alt="Preview" className="image_preview" />}
          </div>
          <button type="submit" className="submit_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;