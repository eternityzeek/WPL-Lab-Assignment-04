import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiRecords, setBmiRecords] = useState([]);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    let bmiStatus;

    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obese';
    }

    const newRecord = { weight, height, bmi: bmiValue, status: bmiStatus };
    setBmiRecords([...bmiRecords, newRecord]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmiRecords.length > 0 && (
        <div>
          <h2>BMI Records</h2>
          <table>
            <thead>
              <tr>
                <th>Weight (kg)</th>
                <th>Height (cm)</th>
                <th>BMI</th>
                <th>Status</th> {/* New column for BMI status */}
              </tr>
            </thead>
            <tbody>
              {bmiRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.weight}</td>
                  <td>{record.height}</td>
                  <td>{record.bmi}</td>
                  <td>{record.status}</td> {/* Display BMI status */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
