import React, { useState } from 'react';
import './Styling.css';

export default function StepTwo({ onNext, onBack, updateForm }) {
    const [service, setService] = useState('');
    const [experience, setExperience] = useState('');
    const [city, setCity] = useState('');
    const [radius, setRadius] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    updateForm(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Professional Details</h2>

      <select name="service" required
        value={service} 
        onChange={(event) => setService(event.target.value)}>
        <option value="">Select Service</option>
        <option value="plumber">Plumber</option>
        <option value="electrician">Electrician</option>
        <option value="cleaner">House Cleaner</option>
        <option value="barber">Barber</option>
        <option value="tutor">Tutor</option>
        <option value="gardener">Gardener</option>
        <option value="painter">Painter</option>
        <option value="carpenter">Carpenter</option>
        <option value="mechanic">Mechanic</option>
        <option value="other">Other</option>
      </select>

      <input name="experience" placeholder="Years of Experience" 
        value={experience} 
        onChange={(event) => setExperience(event.target.value)} />

      <input name="city" placeholder="City" required 
        value={city} 
        onChange={(event) => setCity(event.target.value)} />

      <select name="radius"
       value={radius} 
        onChange={(event) => setRadius(event.target.value)}>
        <option>5 km</option>
        <option>10 km</option>
        <option>20 km</option>
      </select>

      <div className="buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Continue</button>
      </div>
    </form>
  );
}
