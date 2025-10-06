import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PatientAccess from './PatientAccess';
import PatientDashboard from './PatientDashboard';

const AdminLayout = ({ onLogout }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('health');
  const [hasAccess, setHasAccess] = useState(false);

  const handleMenuItemClick = (itemId) => {
    setSelectedMenuItem(itemId);
    setHasAccess(false);
  };

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  const renderMainContent = () => {
    if (selectedMenuItem === 'health') {
      if (hasAccess) {
        return <PatientDashboard />;
      } else {
        return <PatientAccess onAccessGranted={handleAccessGranted} />;
      }
    }

    return (
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF',
          width: '100%',
          maxWidth: '1249px'
        }}
      >
        <Box sx={{ fontFamily: 'Figtree', fontSize: '24px', fontWeight: 700, color: '#121212' }}>
          {selectedMenuItem === 'nutrition' ? 'Nutrition Management' : 'Food Tracking'}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#F6F6F6',
        position: 'relative'
      }}
    >
      {/* Sidebar */}
      <Sidebar
        selectedItem={selectedMenuItem}
        onItemClick={handleMenuItemClick}
      />

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          ml: '166px',
          p: '25px',
          pt: '0'
        }}
      >
        {/* Navbar */}
        <Box sx={{ mt: '25px', mb: '25px' }}>
          <Navbar
            userName="Wade Warren"
            subtitle="Access patient's details here."
            onLogout={onLogout}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {renderMainContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
