import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const AdminLayout = ({ onLogout }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('home');
  const [patientId, setPatientId] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleMenuItemClick = (itemId) => {
    setSelectedMenuItem(itemId);
  };

  const handleAccessPatient = () => {
    if (patientId && accessToken) {
      // Handle patient access logic here
      console.log('Accessing patient data:', { patientId, accessToken });
    }
  };

  const renderMainContent = () => {
    switch (selectedMenuItem) {
      case 'home':
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Patient Access
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Enter patient's credentials to securely access patient data while maintaining privacy.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Anonymous User ID"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  placeholder="Anonymous User ID"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="60-sec Access Token"
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  placeholder="60-sec Access Token"
                  margin="normal"
                />
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 2, mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Token expires in 57 seconds
              </Typography>
            </Box>
            
            <Button
              variant="contained"
              onClick={handleAccessPatient}
              sx={{
                backgroundColor: '#2e7d32',
                '&:hover': {
                  backgroundColor: '#1b5e20'
                }
              }}
            >
              Access Patient Data
            </Button>
          </Box>
        );
      
      case 'patients':
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Patient Management
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage patient records and access permissions.
            </Typography>
          </Box>
        );
      
      case 'medical':
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Medical Records
            </Typography>
            <Typography variant="body1" color="text.secondary">
              View and manage medical records and health data.
            </Typography>
          </Box>
        );
      
      case 'settings':
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Settings
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure application settings and preferences.
            </Typography>
          </Box>
        );
      
      default:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome to the admin dashboard.
            </Typography>
          </Box>
        );
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Sidebar */}
      <Sidebar
        selectedItem={selectedMenuItem}
        onItemClick={handleMenuItemClick}
      />
      
      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Navbar
          userName="Wade Warren"
          subtitle="Access patient's details here."
        />
        
        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Paper
            sx={{
              height: '100%',
              borderRadius: 2,
              overflow: 'auto'
            }}
          >
            {renderMainContent()}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
