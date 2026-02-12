import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
  useTheme,
  FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const steps = [
  'Account Details',
  'Personal Information',
  'Business Information',
  'Services',
  'Location & Terms',
];

const stepSchemas = [
  yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  }),
  yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phone: yup.string().required('Phone number is required'),
  }),
  yup.object({
    businessName: yup.string().required('Business name is required'),
    businessType: yup.string().required('Business type is required'),
  }),
  yup.object({
    services: yup.array().min(1, 'Select at least one service').required('Services are required'),
  }),
  yup.object({
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    agreeTerms: yup.boolean().oneOf([true], 'You must agree to the terms'),
  }),
];

export default function ProRegistrationForm() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const currentSchema = stepSchemas[activeStep];

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(currentSchema),
    defaultValues: formData,
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
      reset(data); // Preserve values for back navigation
    } else {
      // Final submit
      console.log('Form submitted:', { ...formData, ...data });
      // API call here: e.g., axios.post('/api/register', { ...formData, ...data })
      alert('Registration complete!');
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              )}
            />
          </>
        );
      case 1:
        return (
          <>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </>
        );
      case 2:
        return (
          <>
            <Controller
              name="businessName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Business Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.businessName}
                  helperText={errors.businessName?.message}
                />
              )}
            />
            <Controller
              name="businessType"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth margin="normal" variant="outlined" error={!!errors.businessType}>
                  <InputLabel>Business Type</InputLabel>
                  <Select {...field} label="Business Type">
                    <MenuItem value="Individual">Individual</MenuItem>
                    <MenuItem value="Company">Company</MenuItem>
                  </Select>
                  <FormHelperText>{errors.businessType?.message}</FormHelperText>
                </FormControl>
              )}
            />
          </>
        );
      case 3:
        return (
          <Controller
            name="services"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" variant="outlined" error={!!errors.services}>
                <InputLabel>Services Offered</InputLabel>
                <Select {...field} label="Services Offered" multiple>
                  <MenuItem value="Plumbing">Plumbing</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Cleaning">Cleaning</MenuItem>
                  <MenuItem value="Landscaping">Landscaping</MenuItem>
                  {/* Add more as per the site */}
                </Select>
                <FormHelperText>{errors.services?.message}</FormHelperText>
              </FormControl>
            )}
          />
        );
      case 4:
        return (
          <>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              )}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="City"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="State"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.state}
                      helperText={errors.state?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <FormControlLabel
              control={
                <Controller
                  name="agreeTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox {...field} color="primary" />
                  )}
                />
              }
              label="I agree to the terms and conditions"
              sx={{ mt: 2 }}
            />
            {errors.agreeTerms && (
              <Typography color="error" variant="caption">
                {errors.agreeTerms.message}
              </Typography>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Pro Registration - Step {activeStep + 1} of 5
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit(handleNext)}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button variant="contained" type="submit">
              {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}