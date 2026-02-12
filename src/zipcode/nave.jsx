import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Chip,
  OutlinedInput
} from "@mui/material";

/* ------------------ STATIC DATA ------------------ */
const steps = [
  "Service Selection",
  "Business Information",
  "Service Details",
  "Additional Info",
  "Account Setup"
];

const categoriesList = [
  "Plumbing",
  "Electrical",
  "Cleaning",
  "Gardening",
  "Carpentry",
  "Tutoring"
];

const states = [
  "Abia","Abuja","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
  "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo",
  "Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa",
  "Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba",
  "Yobe","Zamfara"
];

/* ------------------ COMPONENT ------------------ */
const ProfessionalRegistration = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    categories: [],
    services: [],
    businessName: "",
    businessType: "",
    address: "",
    city: "",
    state: "",
    description: "",
    qualifications: "",
    founded: "",
    employees: "",
    travelDistance: "",
    profilePhoto: null,
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    confirmPhone: "",
    password: "",
    subscribe: false,
    agreeTerms: false,
    website: ""
  });

  /* ------------------ HANDLERS ------------------ */
  const handleChange = (field) => (e) => {
    const value =
      field === "profilePhoto" ? e.target.files[0] : e.target.value;
    setValues({ ...values, [field]: value });
  };

  const validateStep = () => {
    const e = {};

    if (step === 1) {
      if (!values.categories.length) e.categories = "Select at least one category";
      if (!values.services.length) e.services = "Select at least one service";
    }

    if (step === 2) {
      if (!values.businessName) e.businessName = "Business name is required";
      if (!values.businessType) e.businessType = "Business type is required";
      if (!values.address) e.address = "Address is required";
      if (!values.city) e.city = "City is required";
      if (!values.state) e.state = "State is required";
    }

    if (step === 3) {
      if (!values.description) e.description = "Description is required";
      if (!values.qualifications) e.qualifications = "Qualifications are required";
    }

    if (step === 4) {
      if (!values.founded) e.founded = "Select founding year";
      if (!values.employees) e.employees = "Select number of employees";
      if (!values.travelDistance) e.travelDistance = "Select travel distance";
      if (!values.profilePhoto) e.profilePhoto = "Profile photo is required";
    }

    if (step === 5) {
      if (!values.email) e.email = "Email is required";
      if (!/\S+@\S+\.\S+/.test(values.email)) e.email = "Invalid email";
      if (values.email !== values.confirmEmail) e.confirmEmail = "Emails do not match";

      if (!values.firstName) e.firstName = "First name required";
      if (!values.lastName) e.lastName = "Last name required";
      if (!values.username) e.username = "Username required";

      if (!values.phone) e.phone = "Phone required";
      if (values.phone !== values.confirmPhone)
        e.confirmPhone = "Phone numbers do not match";

      if (!values.password || values.password.length < 6)
        e.password = "Password must be at least 6 characters";

      if (!values.agreeTerms)
        e.agreeTerms = "You must accept the Terms of Service";
    }

    return e;
  };

  const handleNext = () => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep(step + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    console.log("FINAL SUBMISSION:", values);
    alert("Registration Successful!");
  };

  /* ------------------ UI ------------------ */
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={900} textAlign="center" gutterBottom>
        Professional Registration
      </Typography>

      {/* Progress */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
          mb={1}
        >
          Step {step} of 5
        </Typography>
        <Stepper activeStep={step - 1} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* ------------------ STEP CONTENT ------------------ */}
      {step === 1 && (
        <>
          <FormControl fullWidth sx={{ mb: 3 }} error={!!errors.categories}>
            <InputLabel>Categories</InputLabel>
            <Select
              multiple
              value={values.categories}
              onChange={handleChange("categories")}
              input={<OutlinedInput label="Categories" />}
            >
              {categoriesList.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={values.categories.includes(item)} />
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }} error={!!errors.services}>
            <InputLabel>Services</InputLabel>
            <Select
              multiple
              value={values.services}
              onChange={handleChange("services")}
              input={<OutlinedInput label="Services" />}
            >
              {categoriesList.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={values.services.includes(item)} />
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}

      {step === 2 && (
        <>
          <TextField fullWidth label="Business Name" sx={{ mb: 2 }}
            value={values.businessName} onChange={handleChange("businessName")}
            error={!!errors.businessName} helperText={errors.businessName}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Business Type</InputLabel>
            <Select value={values.businessType} onChange={handleChange("businessType")}>
              <MenuItem value="Registered company">Registered company</MenuItem>
              <MenuItem value="Private person">Private person</MenuItem>
            </Select>
          </FormControl>

          <TextField fullWidth label="Address" sx={{ mb: 2 }}
            value={values.address} onChange={handleChange("address")}
          />
          <TextField fullWidth label="City" sx={{ mb: 2 }}
            value={values.city} onChange={handleChange("city")}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>State</InputLabel>
            <Select value={values.state} onChange={handleChange("state")}>
              {states.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </Select>
          </FormControl>
        </>
      )}

      {step === 3 && (
        <>
          <TextField fullWidth multiline rows={4} label="Describe your services"
            value={values.description} onChange={handleChange("description")}
            error={!!errors.description} helperText={errors.description}
            sx={{ mb: 3 }}
          />
          <TextField fullWidth multiline rows={3} label="Your qualifications"
            value={values.qualifications} onChange={handleChange("qualifications")}
            error={!!errors.qualifications} helperText={errors.qualifications}
          />
        </>
      )}

      {step === 4 && (
        <>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Founded</InputLabel>
            <Select value={values.founded} onChange={handleChange("founded")}>
              <MenuItem value="Before 2000">Before 2000</MenuItem>
              <MenuItem value="2000-2010">2000-2010</MenuItem>
              <MenuItem value="After 2010">After 2010</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Employees</InputLabel>
            <Select value={values.employees} onChange={handleChange("employees")}>
              <MenuItem value="1-5">1–5</MenuItem>
              <MenuItem value="6-20">6–20</MenuItem>
              <MenuItem value="21+">21+</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Travel Distance</InputLabel>
            <Select value={values.travelDistance} onChange={handleChange("travelDistance")}>
              <MenuItem value="20">20 km</MenuItem>
              <MenuItem value="40">40 km</MenuItem>
              <MenuItem value="60">60 km</MenuItem>
              <MenuItem value="100">100 km</MenuItem>
            </Select>
          </FormControl>

          <Button component="label" variant="outlined">
            Upload Profile Photo
            <input hidden type="file" onChange={handleChange("profilePhoto")} />
          </Button>

          {errors.profilePhoto && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errors.profilePhoto}
            </Alert>
          )}
        </>
      )}

      {step === 5 && (
        <>
          <TextField fullWidth label="Email" sx={{ mb: 2 }}
            value={values.email} onChange={handleChange("email")}
            error={!!errors.email} helperText={errors.email}
          />
          <TextField fullWidth label="Confirm Email" sx={{ mb: 2 }}
            value={values.confirmEmail} onChange={handleChange("confirmEmail")}
            error={!!errors.confirmEmail} helperText={errors.confirmEmail}
          />
          <TextField fullWidth label="First Name" sx={{ mb: 2 }}
            value={values.firstName} onChange={handleChange("firstName")}
          />
          <TextField fullWidth label="Last Name" sx={{ mb: 2 }}
            value={values.lastName} onChange={handleChange("lastName")}
          />
          <TextField fullWidth label="Username" sx={{ mb: 2 }}
            value={values.username} onChange={handleChange("username")}
          />
          <TextField fullWidth label="Phone" sx={{ mb: 2 }}
            value={values.phone} onChange={handleChange("phone")}
          />
          <TextField fullWidth label="Confirm Phone" sx={{ mb: 2 }}
            value={values.confirmPhone} onChange={handleChange("confirmPhone")}
          />
          <TextField fullWidth type="password" label="Password" sx={{ mb: 2 }}
            value={values.password} onChange={handleChange("password")}
            error={!!errors.password} helperText={errors.password}
          />

          <FormControlLabel
            control={<Checkbox checked={values.subscribe}
              onChange={() => setValues({ ...values, subscribe: !values.subscribe })} />}
            label="Receive news and tips"
          />

          <FormControlLabel
            control={<Checkbox checked={values.agreeTerms}
              onChange={() => setValues({ ...values, agreeTerms: !values.agreeTerms })} />}
            label="I agree to the Terms of Service"
          />

          {errors.agreeTerms && (
            <Alert severity="error" sx={{ mt: 1 }}>
              {errors.agreeTerms}
            </Alert>
          )}
        </>
      )}

      {/* Navigation */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        {step > 1 && <Button onClick={handleBack}>Back</Button>}
        {step < 5 ? (
          <Button variant="contained" onClick={handleNext}>
            Continue
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Register
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ProfessionalRegistration;
