import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

const Navbar = ({ userName = "Wade Warren", subtitle = "Access patient's details here.", onLogout }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '1249px',
        padding: '30px',
        alignItems: 'center',
        gap: '20px',
        borderRadius: '30px',
        background: 'linear-gradient(90deg, #2F3C31 0%, #0F2C1A 100%)',
        mb: 2
      }}
    >
      {/* Left Side - Greeting */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: '1 0 0' }}>
        <Typography
          sx={{
            fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#FFF',
            textAlign: 'center'
          }}
        >
          <Box component="span" sx={{ fontWeight: 400 }}>Hello,</Box>{' '}
          <Box component="span" sx={{ fontWeight: 700 }}>{userName}!</Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            color: '#FFF',
            opacity: 0.6,
            textAlign: 'center',
            lineHeight: '24px'
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Right Side - Logout Button */}
      <Box
        sx={{
          display: 'flex',
          width: '60px',
          height: '60px',
          padding: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)'
          }
        }}
        onClick={onLogout}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3999 14.452V22.2H2.3999C2.3999 17.7817 5.98162 14.2 10.3999 14.2C11.0905 14.2 11.7607 14.2875 12.3999 14.452ZM10.3999 13.2C7.0849 13.2 4.3999 10.515 4.3999 7.2C4.3999 3.885 7.0849 1.2 10.3999 1.2C13.7149 1.2 16.3999 3.885 16.3999 7.2C16.3999 10.515 13.7149 13.2 10.3999 13.2ZM16.9857 17.2L15.1573 15.3716L16.5715 13.9574L20.8141 18.2L16.5715 22.4426L15.1573 21.0284L16.9857 19.2H13.3999V17.2H16.9857Z" fill="#E53935"/>
        </svg>
      </Box>
    </Box>
  );
};

export default Navbar;
