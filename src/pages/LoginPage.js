import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 4 }
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1440px',
          height: { xs: 'auto', md: '1024px' },
          backgroundColor: '#FFF',
          borderRadius: '30px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Left Side - Login Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 4, md: 6 },
            order: { xs: 2, md: 1 }
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '480px' }}>
            {/* Header */}
            <Box sx={{ mb: 5, textAlign: 'center' }}>
              <Typography
                sx={{
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: { xs: '32px', md: '40px' },
                  fontWeight: 700,
                  color: '#121212',
                  mb: 1
                }}
              >
                Hello, <Box component="span" sx={{ fontWeight: 700 }}>Welcome Back!</Box>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: '#121212',
                  opacity: 0.5,
                  lineHeight: '24px'
                }}
              >
                Please login to your account to continue.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit}>
              {/* Email Field */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#121212',
                    mb: 1
                  }}
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
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

              {/* Password Field */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#121212',
                    mb: 1
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <VisibilityOff sx={{ color: '#121212' }} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
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

              {/* Login Button */}
              <Button
                type="submit"
                fullWidth
                sx={{
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
                Login
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Image and Branding */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: { xs: 4, md: 6 },
            position: 'relative',
            order: { xs: 1, md: 2 }
          }}
        >
          <Box
            component="img"
            src="https://api.builder.io/api/v1/image/assets/TEMP/3742970d0329ca862bfc4c3974412bf88ffbf51f?width=1400"
            alt="Doctor and Patient"
            sx={{
              width: { xs: '100%', md: '700px' },
              height: { xs: 'auto', md: '956px' },
              borderRadius: '20px',
              objectFit: 'cover',
              mb: 4
            }}
          />

          {/* Logo and Text */}
          <Box
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              bottom: { md: '100px' },
              textAlign: 'center',
              maxWidth: '596px',
              px: 2
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '22.682px',
                mb: 3
              }}
            >
              <svg width="65" height="78" viewBox="0 0 65 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.5532 9.85394C63.1913 10.492 63.158 10.9628 63.273 11.8518C63.3097 12.1257 63.3463 12.3996 63.3841 12.6818C63.4202 12.9897 63.4562 13.2975 63.4934 13.6147C63.5143 13.7845 63.5352 13.9543 63.5568 14.1293C64.4218 21.7523 63.419 29.7056 61.613 37.1193C61.5439 37.409 61.4748 37.6987 61.4037 37.9971C59.4849 45.2884 56.0729 51.9278 50.8009 57.3333C50.6242 57.5273 50.4476 57.7212 50.2656 57.921C47.5182 60.8515 44.0097 63.0274 40.4588 64.8548C40.1882 64.9963 39.9177 65.1378 39.6389 65.2836C33.8184 68.1647 27.8029 69.3125 21.3494 69.3455C15.6155 69.3804 10.287 69.7691 4.9668 72.1413C4.57558 72.2993 4.18399 72.4564 3.79157 72.6114C5.19218 68.0294 9.57807 64.2387 13.6635 62.0343C15.8133 61.0669 17.7028 60.6016 20.0584 60.5579C20.4277 60.549 20.7969 60.5401 21.1662 60.5313C21.7444 60.5186 22.3227 60.5063 22.901 60.4942C23.4617 60.4821 24.0224 60.4686 24.5831 60.455C24.8445 60.4503 24.8445 60.4503 25.1113 60.4454C25.9196 60.4965 25.9196 60.4965 26.5911 60.1539C26.6303 59.5663 26.6303 59.5663 26.5911 58.9787C26.1288 58.5164 25.2381 58.694 24.606 58.6876C24.3374 58.6848 24.3374 58.6848 24.0632 58.6819C23.6811 58.6786 23.2989 58.6761 22.9168 58.6742C22.532 58.6716 22.1473 58.6668 21.7626 58.6598C15.7654 58.5502 11.0403 60.7303 6.66354 64.8447C6.11813 65.3469 5.55025 65.808 4.9668 66.2651C6.12866 62.346 9.53634 59.1356 12.9584 57.0983C15.6381 55.6495 18.214 55.1145 21.2447 55.1142C21.6758 55.1095 21.6758 55.1095 22.1155 55.1048C23.0247 55.0952 23.9338 55.0901 24.8429 55.0857C25.7596 55.0801 26.6763 55.0735 27.5929 55.0641C28.1614 55.0584 28.7298 55.0549 29.2982 55.0539C29.5534 55.0515 29.8085 55.0491 30.0714 55.0466C30.4089 55.0451 30.4089 55.0451 30.7532 55.0436C31.3382 55.0344 31.3382 55.0344 31.7621 54.5128C31.8013 53.9055 31.8013 53.9055 31.7621 53.3375C29.9564 53.3135 28.1508 53.2971 26.345 53.2859C25.7323 53.2812 25.1196 53.2748 24.5069 53.2666C19.5943 53.194 19.5943 53.194 14.8388 54.2777C14.4555 54.4075 14.4555 54.4075 14.0645 54.54C12.0506 55.2579 10.3983 56.5019 8.72754 57.8034C8.54545 57.9443 8.36335 58.0852 8.17573 58.2304C6.29053 59.7858 4.81886 61.7498 3.62446 63.8696C3.32087 64.3858 2.98404 64.8529 2.61633 65.3249C2.73492 63.9419 3.02188 62.8508 3.60059 61.5936C3.67454 61.4299 3.74849 61.2663 3.82468 61.0977C6.18226 55.9731 10.2021 52.4806 15.5044 50.5188C17.5153 49.8791 19.3103 49.7184 21.4201 49.6649C21.7143 49.6559 22.0085 49.6468 22.3116 49.6374C23.0329 49.6154 23.7542 49.5952 24.4757 49.5768C24.4857 49.1068 24.4852 48.6365 24.4757 48.1665C23.9907 47.6816 23.0061 47.8914 22.3575 47.8866C17.302 47.8918 12.6081 48.6717 8.56136 51.9768C8.0224 52.3974 8.0224 52.3974 7.55231 52.3974C9.06281 48.9673 12.9041 46.6875 16.249 45.346C17.4045 44.9507 18.5812 44.6631 19.7747 44.4058C19.9396 44.365 20.1044 44.3242 20.2743 44.2822C21.2204 44.1261 22.1556 44.12 23.1131 44.1046C23.3196 44.1003 23.5261 44.096 23.7388 44.0915C24.6197 44.0731 25.5007 44.057 26.3817 44.0409C27.0257 44.0288 27.6696 44.0153 28.3135 44.0018C28.6147 43.997 28.6147 43.997 28.9219 43.9921C29.8279 44.0604 29.8279 44.0604 30.5869 43.7006C30.5964 43.309 30.5969 42.917 30.5869 42.5254C29.1786 42.5078 27.7703 42.4951 26.3619 42.4867C25.8844 42.4832 25.4069 42.4784 24.9294 42.4722C17.8799 42.3836 12.2603 44.2081 7.08222 49.1067C6.32466 49.9329 5.63722 50.7944 4.9668 51.6922C4.825 51.8749 4.6832 52.0576 4.5371 52.2459C3.53407 53.5945 2.78927 55.0326 2.06722 56.5444C1.48483 57.7597 1.48483 57.7597 0.971008 58.2735C1.69505 52.3059 5.51926 47.2234 10.0185 43.4436C12.542 41.5743 15.5565 40.2068 18.5995 39.4698C18.7626 39.4288 18.9258 39.3878 19.0939 39.3456C20.8305 38.9482 22.5386 38.9245 24.3141 38.8969C34.9077 38.6469 44.4277 34.9972 52.2111 27.7175C52.4054 27.536 52.5996 27.3545 52.7997 27.1675C55.3185 24.7354 57.1713 22.0624 58.7992 18.9824C58.9983 18.6059 59.2021 18.2319 59.4067 17.8584C60.7126 15.3874 61.9197 12.5854 62.5532 9.85394Z" fill="white"/>
                <path d="M61.3781 5.38812C61.2154 8.69823 60.212 12.0436 58.7926 15.025C58.7251 15.1694 58.6575 15.3139 58.5879 15.4626C55.1753 22.7179 49.7306 28.745 42.5744 32.4185C42.3345 32.5457 42.0945 32.673 41.8473 32.8041C38.6223 34.4747 35.3177 35.6619 31.7623 36.4143C31.5799 36.4558 31.3975 36.4973 31.2096 36.54C29.257 36.9469 27.313 36.9727 25.3279 37.0019C17.8638 37.1121 11.2335 39.2046 5.90718 44.6409C3.77665 46.9611 2.14105 49.6743 0.567216 52.3892C0.467836 52.547 0.368455 52.7049 0.266063 52.8675C0.188498 52.8675 0.110932 52.8675 0.0310164 52.8675C-0.203049 46.6258 0.88817 40.448 3.55671 34.7689C3.62394 34.6249 3.69117 34.4808 3.76043 34.3324C8.10202 25.1045 15.3332 18.2955 24.8431 14.6431C28.6778 13.3303 32.6901 12.7091 36.6983 12.2045C45.0457 11.1418 52.9458 9.59191 60.438 5.62317C60.9081 5.38812 60.9081 5.38812 61.3781 5.38812Z" fill="white"/>
              </svg>
              <Typography
                sx={{
                  fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: { xs: '48px', md: '64.044px' },
                  fontWeight: 800,
                  color: '#FFF'
                }}
              >
                NEat
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: 'Figtree, -apple-system, Roboto, Helvetica, sans-serif',
                fontSize: { xs: '18px', md: '24px' },
                fontWeight: 400,
                color: '#FFF',
                textAlign: 'center',
                lineHeight: 'normal'
              }}
            >
              NEat is a privacy-focused mobile and web-based ecosystem developed to support patients with chronic health conditions by managing their nutrition habits through personalized, data-driven insights.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
