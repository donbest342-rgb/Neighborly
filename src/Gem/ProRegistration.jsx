import React, { useState } from 'react';
import { 
  Box, Container, Paper, Typography, TextField, Button, Grid, 
  MenuItem, Checkbox, FormControlLabel, InputAdornment, LinearProgress,
  Stack, Dialog, DialogContent, Zoom, alpha 
} from '@mui/material';
import { ArrowRight, ArrowLeft, CheckCircle, UploadCloud } from 'lucide-react';

const locationData = {
  'Lagos': ['Ikeja', 'Lekki', 'Ikorodu', 'Surulere'],
  'Abuja': ['Garki', 'Wuse', 'Maitama'],
  'Edo': ['Benin City', 'Uromi', 'Ekpoma']
};

const ProRegistration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    businessName: '', category: '', yearsExp: '',
    state: '', city: '', street: '', idType: '', terms: false
  });

  const steps = ['Personal', 'Business', 'Location', 'Verify'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const isStepValid = () => {
    if (activeStep === 0) return formData.firstName && formData.email;
    if (activeStep === 1) return formData.businessName && formData.category;
    if (activeStep === 2) return formData.state && formData.city;
    if (activeStep === 3) return formData.idType && formData.terms;
    return false;
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #eef2f6' }}>
        <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>Join as a Pro</Typography>
        <LinearProgress variant="determinate" value={((activeStep + 1) / 4) * 100} sx={{ mb: 4, height: 6, borderRadius: 3 }} />
        
        <Box sx={{ minHeight: 300 }}>
          {activeStep === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={6}><TextField fullWidth label="First Name" name="firstName" onChange={handleChange} /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} /></Grid>
              <Grid item xs={12}><TextField fullWidth label="Email" name="email" onChange={handleChange} /></Grid>
            </Grid>
          )}
          {activeStep === 1 && (
            <Stack spacing={2}>
              <TextField fullWidth label="Business Name" name="businessName" onChange={handleChange} />
              <TextField select fullWidth label="Category" name="category" value={formData.category} onChange={handleChange}>
                {['Plumbing', 'Electrical', 'Tiling'].map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
              </TextField>
            </Stack>
          )}
          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={6}><TextField select fullWidth label="State" name="state" value={formData.state} onChange={handleChange}>
                {Object.keys(locationData).map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </TextField></Grid>
              <Grid item xs={6}><TextField select fullWidth label="City" name="city" value={formData.city} onChange={handleChange} disabled={!formData.state}>
                {(locationData[formData.state] || []).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
              </TextField></Grid>
            </Grid>
          )}
          {activeStep === 3 && (
            <Stack spacing={2}>
              <TextField select fullWidth label="ID Type" name="idType" value={formData.idType} onChange={handleChange}>
                {['NIN', 'Passport'].map(i => <MenuItem key={i} value={i}>{i}</MenuItem>)}
              </TextField>
              <FormControlLabel control={<Checkbox name="terms" onChange={handleChange} />} label="I agree to terms" />
            </Stack>
          )}
        </Box>

        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          {activeStep > 0 && <Button fullWidth variant="outlined" onClick={() => setActiveStep(activeStep - 1)}>Back</Button>}
          <Button fullWidth variant="contained" disabled={!isStepValid()} onClick={() => activeStep === 3 ? setOpenSuccess(true) : setActiveStep(activeStep + 1)}>
            {activeStep === 3 ? 'Finish' : 'Next'}
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};
export default ProRegistration;