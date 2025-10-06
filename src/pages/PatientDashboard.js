import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Download, Edit } from '@mui/icons-material';

const PatientDashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', width: '100%', maxWidth: '1249px' }}>
      {/* Header Card */}
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          alignItems: 'center',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF'
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              color: '#121212',
              mb: 1
            }}
          >
            Patient Dashboard
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#121212',
              opacity: 0.5
            }}
          >
            USER#1234567890
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button
            startIcon={<Download />}
            sx={{
              width: '180px',
              height: '58px',
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
            Export Data
          </Button>

          <Button
            sx={{
              width: '180px',
              height: '58px',
              borderRadius: '12px',
              border: '1px solid #E53935',
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#E53935',
              textTransform: 'none',
              background: 'transparent',
              '&:hover': {
                background: 'rgba(229, 57, 53, 0.05)'
              }
            }}
          >
            End Session
          </Button>
        </Box>
      </Box>

      {/* Today's Nutrients Intake Card */}
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#121212'
          }}
        >
          Today's Nutrients Intake
        </Typography>

        <Box sx={{ width: '100%', height: '2px', background: '#EFEFEF' }} />

        <Box sx={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {/* Circular Progress */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ position: 'relative', width: '100px', height: '100px' }}>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(18,18,18,0.1)" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#0F2C1A" strokeWidth="8" strokeDasharray="283" strokeDashoffset="56.6" transform="rotate(-90 50 50)" />
              </svg>
              <Typography
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#0F2C1A'
                }}
              >
                80%
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#121212',
                  mb: 0.5
                }}
              >
                Calories
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#121212'
                }}
              >
                1000kcal / 1200kcal
              </Typography>
            </Box>
          </Box>

          {/* Progress Bars */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Protein */}
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#41A58B' }}>Protein</Typography>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#41A58B' }}>50g / 100g</Typography>
              </Box>
              <Box sx={{ height: '12px', borderRadius: '100px', background: 'rgba(65, 165, 139, 0.1)', position: 'relative' }}>
                <Box sx={{ width: '50%', height: '100%', borderRadius: '100px', background: '#41A58B' }} />
              </Box>
            </Box>

            {/* Sodium */}
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#D79D00' }}>Sodium</Typography>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#D79D00' }}>50mg / 500mg</Typography>
              </Box>
              <Box sx={{ height: '12px', borderRadius: '100px', background: 'rgba(215, 157, 0, 0.1)', position: 'relative' }}>
                <Box sx={{ width: '10%', height: '100%', borderRadius: '100px', background: '#D79D00' }} />
              </Box>
            </Box>

            {/* Potassium */}
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#E53935' }}>Potassium</Typography>
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', color: '#E53935' }}>550mg / 500mg</Typography>
              </Box>
              <Box sx={{ height: '12px', borderRadius: '100px', background: 'rgba(18, 18, 18, 0.1)', position: 'relative' }}>
                <Box sx={{ width: '100%', height: '100%', borderRadius: '100px', background: '#E53935' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Health Summary Card */}
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#121212'
            }}
          >
            Health Summary
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Edit sx={{ fontSize: '20px', color: '#0F2C1A' }} />
            <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 600, color: '#0F2C1A' }}>Edit</Typography>
          </Box>
        </Box>

        <Box sx={{ width: '100%', height: '2px', background: '#EFEFEF' }} />

        <Box sx={{ display: 'flex', gap: '29px' }}>
          {/* Patient Information */}
          <Box sx={{ width: '580px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 400, color: '#121212' }}>
              Patient Information
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              {[
                { label: 'Age', value: '57 Years' },
                { label: 'Gender', value: 'Male' },
                { label: 'Weight (kg)', value: '75 kg' },
                { label: 'Height (cm)', value: '180 cm' }
              ].map((item) => (
                <Box key={item.label} sx={{ width: '275px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 600, color: '#121212' }}>
                    {item.label}
                  </Typography>
                  <Box
                    sx={{
                      height: '58px',
                      padding: '14px 20px',
                      borderRadius: '12px',
                      background: '#F3F3F3',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 400, color: '#121212' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Medical Conditions */}
          <Box sx={{ width: '580px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 400, color: '#121212' }}>
              Medical Conditions
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
              {[
                { label: 'Physical Activity Level', value: 'Moderate' },
                { label: 'CKD Stage', value: 'Stage 2' },
                { label: 'Diabetes', value: 'Yes' },
                { label: 'Insulin Use', value: 'Yes' }
              ].map((item) => (
                <Box key={item.label} sx={{ width: '275px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 600, color: '#121212' }}>
                    {item.label}
                  </Typography>
                  <Box
                    sx={{
                      height: '58px',
                      padding: '14px 20px',
                      borderRadius: '12px',
                      background: '#F3F3F3',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 400, color: '#121212' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Monitor Nutrients Card */}
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 700, color: '#121212' }}>
            Monitor Nutrients
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Edit sx={{ fontSize: '20px', color: '#0F2C1A' }} />
            <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 600, color: '#0F2C1A' }}>Edit</Typography>
          </Box>
        </Box>

        <Box sx={{ width: '100%', height: '2px', background: '#EFEFEF' }} />

        <Box sx={{ display: 'flex', gap: '29px' }}>
          {['Protein', 'Sodium', 'Potassium'].map((nutrient) => (
            <Box
              key={nutrient}
              sx={{
                width: '377px',
                height: '58px',
                padding: '14px 20px',
                borderRadius: '12px',
                background: 'rgba(83, 131, 91, 0.10)',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 400, color: '#121212' }}>
                {nutrient}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Daily Nutrition Targets Card */}
      <Box
        sx={{
          display: 'flex',
          padding: '30px',
          flexDirection: 'column',
          gap: '30px',
          borderRadius: '20px',
          background: '#FFF'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 700, color: '#121212' }}>
            Daily Nutrition Targets
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <Edit sx={{ fontSize: '20px', color: '#0F2C1A' }} />
            <Typography sx={{ fontFamily: 'Figtree', fontSize: '18px', fontWeight: 600, color: '#0F2C1A' }}>Edit</Typography>
          </Box>
        </Box>

        <Box sx={{ width: '100%', height: '2px', background: '#EFEFEF' }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '29px' }}>
          {[
            { label: 'Calories', value: '1200 kcal' },
            { label: 'Protein', value: '100 g' },
            { label: 'Sodium', value: '150 mg' },
            { label: 'Potassium', value: '150 mg' },
            { label: 'Phosphorus', value: '150 mg' },
            { label: 'Fluids', value: '500 ml' },
            { label: 'Carbohydrates', value: '150 g' },
            { label: 'Fat', value: '100 g' },
            { label: 'Fiber', value: '200 g' },
            { label: 'Cholesterol', value: '150 mg' }
          ].map((item) => (
            <Box key={item.label} sx={{ width: '214.6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 600, color: '#121212' }}>
                {item.label}
              </Typography>
              <Box
                sx={{
                  height: '58px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: '#F3F3F3',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography sx={{ fontFamily: 'Figtree', fontSize: '16px', fontWeight: 400, color: '#121212' }}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PatientDashboard;
