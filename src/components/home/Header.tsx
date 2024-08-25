import React from 'react';
import { Box, Typography } from '@mui/material';
import welcomeVid from '../constant/welcome.mov';
import laptopPic from '../constant/laptop.jpg';

const Header: React.FC = () => {
  return (
    <Box
      id="header"
      component="section"
      sx={{
        height: '100vh',
        maxWidth: '100vw',
        backgroundColor: 'rgba(252, 253, 254, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
        textAlign: 'left',
        px: { xs: 2, sm: 5, md: 10 },
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '50%',
          pr: { xs: 2, sm: 5, md: 8 },
          '& > div': {
            animation: 'bounce 3s infinite',
          },
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-30px)',
            },
          },
          '&:hover > div': {
            animation: 'none',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '2.5rem' },
            fontWeight: 'light',
            color: '#335',
            mb: -2,
          }}
        >
          Hello,
        </Typography>
        <Typography
          variant="h2"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 'bold',
            color: '#333',
            mb: -1,
          }}
        >
          I am Anusha
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 'light',
            color: '#333',
          }}
        >
          Full Stack Developer + ML Enthusiast
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img
          src={laptopPic}
          alt="Laptop"
          style={{
            width: '100%',
            height: 'auto',
            position: 'relative',
          }}
        />
           <Box
          sx={{
            position: 'absolute',
            top: '4%', 
            left: '13%',
            width: '74%', 
            height: '78%', 
            overflow: 'hidden',
            clipPath: 'inset(0 0 0 0)', 
          }}
        >
          <video
            src={welcomeVid}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', 
            }}
          />
        </Box>
        </Box>
    </Box>
  );
};

export default Header;
