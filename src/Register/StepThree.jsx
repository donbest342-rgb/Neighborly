import React, { useState } from 'react';
import './Styling.css';

export default function StepThree({ onBack, formData }) {
    const [pricing, sePricing] = useState('');
    const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    alert("Submitted for approval!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pricing & Verification</h2>

      <select name="pricing"
        value={pricing}
        onChange={(event) => sePricing(event.target.value)}>
        <option>Hourly</option>
        <option>Fixed</option>
      </select>

      <input name="price" placeholder="Base Price" 
        value={price} 
        onChange={(event) => setPrice(event.target.value)} />

      <label className="checkbox">
        <input type="checkbox" required /> Confirm accuracy
      </label>

      <div className="buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
