import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import {
  Notifications,
  AccountCircle
} from '@mui/icons-material';

const Navbar = ({ userName, subtitle }) => {
  return (
    <Paper
      sx={{
        height: 80,
        backgroundColor: '#2e7d32',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2
      }}
    >
      {/* Left side - Greeting */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            mb: 0.5
          }}
        >
          Hello, {userName}!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Right side - Icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }
          }}
        >
          <Notifications />
        </IconButton>
        
        <IconButton
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }
          }}
        >
          <AccountCircle />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Navbar;
