import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setData(storedData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  return (
    <div>
      <h2>Stored Data</h2>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {data[0] && Object.keys(data[0]).map((key) => (
                <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data found in localStorage.</p>
      )}
    </div>
  );
};

export default DataDisplay;
