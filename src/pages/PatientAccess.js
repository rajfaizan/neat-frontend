import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const PatientAccess = ({ onAccessGranted }) => {
  const [anonymousId, setAnonymousId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(57);

  const handleAccessPatient = () => {
    if (anonymousId && accessToken) {
      onAccessGranted?.();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '1249px',
        padding: '30px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        borderRadius: '20px',
        background: '#FFF'
      }}
    >
      {/* Header and Description */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography
            sx={{
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#121212'
            }}
          >
            Patient Access
          </Typography>
          <Typography
            sx={{
              width: '460px',
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#121212',
              opacity: 0.5,
              lineHeight: '24px'
            }}
          >
            Enter patient's credentials to securely access patient data while maintaining privacy.
          </Typography>
        </Box>

        {/* Input Fields */}
        <Box sx={{ display: 'flex', gap: '30px', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 0 0' }}>
            <Typography
              sx={{
                fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#121212'
              }}
            >
              Anonymous User ID
            </Typography>
            <TextField
              fullWidth
              value={anonymousId}
              onChange={(e) => setAnonymousId(e.target.value)}
              placeholder="Anonymous User ID"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '58px',
                  borderRadius: '12px',
                  backgroundColor: '#F3F3F3',
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  '& fieldset': {
                    border: 'none'
                  },
                  '& input': {
                    padding: '14px 20px',
                    '&::placeholder': {
                      opacity: 0.5,
                      color: '#121212'
                    }
                  }
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 0 0' }}>
            <Typography
              sx={{
                fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#121212'
              }}
            >
              60-sec Access Token
            </Typography>
            <TextField
              fullWidth
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              placeholder="60-sec Access Token"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '58px',
                  borderRadius: '12px',
                  backgroundColor: '#F3F3F3',
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  '& fieldset': {
                    border: 'none'
                  },
                  '& input': {
                    padding: '14px 20px',
                    '&::placeholder': {
                      opacity: 0.5,
                      color: '#121212'
                    }
                  }
                }
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ width: '1189px', height: '2px', background: '#EFEFEF' }} />

      {/* Bottom Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '30px',
          width: '100%'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            color: '#0F2C1A',
            textAlign: 'center'
          }}
        >
          <Box component="span" sx={{ fontWeight: 400, color: '#121212' }}>Token expires in </Box>
          <Box component="span" sx={{ fontWeight: 700, color: '#0F2C1A' }}>{timeRemaining} seconds</Box>
        </Typography>

        <Button
          onClick={handleAccessPatient}
          sx={{
            display: 'flex',
            width: '236px',
            height: '58px',
            padding: '14px 20px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #2F3C31 0%, #0F2C1A 100%)',
            fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#FFF',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #2F3C31 0%, #0F2C1A 100%)',
              opacity: 0.9
            }
          }}
        >
          Access Patient Data
        </Button>
      </Box>
    </Box>
  );
};

export default PatientAccess;
