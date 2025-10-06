import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Paper
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      onLogin();
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            overflow: 'hidden'
          }}
        >
          <Grid container>
            {/* Left Column - Login Form */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                  Hello, Welcome Back!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Please login to your account to continue.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    placeholder="Email"
                  />
                  
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    placeholder="Password"
                    InputProps={{
                      endAdornment: (
                        <Button
                          onClick={() => setShowPassword(!showPassword)}
                          sx={{ minWidth: 'auto', p: 1 }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      )
                    }}
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      backgroundColor: '#2e7d32',
                      '&:hover': {
                        backgroundColor: '#1b5e20'
                      }
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </CardContent>
            </Grid>
            
            {/* Right Column - Image and Branding */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  minHeight: 400,
                  backgroundColor: '#e8f5e8',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                  position: 'relative'
                }}
              >
                {/* Placeholder for doctor image */}
                <Box
                  sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: '#c8e6c9',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Doctor & Patient Image
                  </Typography>
                </Box>
                
                {/* NEat Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: '#2e7d32',
                      borderRadius: '50%',
                      mr: 1
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                    NEat
                  </Typography>
                </Box>
                
                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'center', maxWidth: 300 }}
                >
                  NEat is a privacy-focused mobile and web-based ecosystem developed to support 
                  patients with chronic health conditions by managing their nutrition habits 
                  through personalized, data-driven insights.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;
