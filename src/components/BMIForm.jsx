import React, { useState } from 'react';

function BMIForm({ onSubmit }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ weight, height });
  };

  return (
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
  );
}

export default BMIForm;
