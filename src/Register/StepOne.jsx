import React, { useState } from 'react';
import './Styling.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';

export default function StepOne({ onNext, updateForm }) {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    updateForm(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <input name="firstName" placeholder="First Name" required
        value={firstName} 
        onChange={(event) => setFirstName(event.target.value)}/>

      <input name="lastName" placeholder="Last Name" required
        value={lastName} 
        onChange={(event) => setLastName(event.target.value)} />

      <input name="email" type="email" placeholder="Email" required
        value={email} 
        onChange={(event) => setEmail(event.target.value)} />

      <input name="phone" placeholder="Phone Number" required
        value={phone} 
        onChange={(event) => setPhone(event.target.value)} />

      <input name="password" type="password" placeholder="Password" required
        value={password} 
        onChange={(event) => setPassword(event.target.value)}
        InputProps={{
          endAdornment: (
           <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
              </InputAdornment>
                      ),
              }}/>

      <label className="checkbox">
        <input type="checkbox" required /> Agree to Terms
      </label>

      <button type="submit">Continue</button>
    </form>
  );
}
