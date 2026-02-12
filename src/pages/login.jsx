// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export default function LoginPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (API call, Firebase, etc.)
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    console.log('Login attempt:', { email, password, rememberMe });
    // Example: navigate('/dashboard') after successful login
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
        py: 8,
      }}
    >
      <Container maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: 4,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'white',
            }}
          >
            {/* Logo / Brand */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                color="primary.main"
                sx={{ letterSpacing: '-1px' }}
              >
                YourBrand
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Sign in to find or offer services
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error && !email}
                helperText={error && !email ? 'Email is required' : ''}
                sx={{ mb: 2 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error && !password}
                helperText={error && !password ? 'Password is required' : ''}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                  mt: 1,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Remember me"
                />

                <Link href="#" variant="body2" underline="hover">
                  Forgot password?
                </Link>
              </Box>

              {error && error.includes('fields') && (
                <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  mb: 3,
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                Sign In
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              {/* Social login buttons */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  mb: 2,
                  py: 1.2,
                  color: 'text.primary',
                  borderColor: 'grey.400',
                  '&:hover': { borderColor: 'grey.600', bgcolor: 'grey.100' },
                }}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<AppleIcon />}
                sx={{
                  py: 1.2,
                  color: 'text.primary',
                  borderColor: 'grey.400',
                  '&:hover': { borderColor: 'grey.600', bgcolor: 'grey.100' },
                }}
              >
                Continue with Apple
              </Button>
            </Box>

            {/* Sign up link */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link href="/signup" variant="body2" underline="hover" color="primary">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}