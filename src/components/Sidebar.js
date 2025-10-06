import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import {
  Home,
  Person,
  LocalHospital,
  Settings,
  ArrowDownward
} from '@mui/icons-material';

const Sidebar = ({ selectedItem, onItemClick }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home /> },
    { id: 'patients', label: 'Patients', icon: <Person /> },
    { id: 'medical', label: 'Medical', icon: <LocalHospital /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> }
  ];

  return (
    <Paper
      sx={{
        width: 80,
        height: '100vh',
        backgroundColor: '#2e7d32',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          width: 32,
          height: 32,
          backgroundColor: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            backgroundColor: '#2e7d32',
            borderRadius: '50%'
          }}
        />
      </Box>

      {/* Arrow Down */}
      <Box sx={{ mb: 2 }}>
        <ArrowDownward sx={{ color: 'white', fontSize: 20 }} />
      </Box>

      {/* Menu Items */}
      <List sx={{ width: '100%', px: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => onItemClick(item.id)}
              sx={{
                minHeight: 48,
                borderRadius: 2,
                backgroundColor: selectedItem === item.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color: 'white',
                  mb: 0.5
                }}
              >
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Patient Data Indicator */}
      <Box
        sx={{
          mt: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 2,
          p: 1,
          mx: 1,
          mb: 2
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            fontSize: 10,
            textAlign: 'center',
            display: 'block'
          }}
        >
          Patient Data
        </Typography>
      </Box>
    </Paper>
  );
};

export default Sidebar;
