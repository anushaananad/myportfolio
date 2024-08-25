import React from 'react';
import { Container, Typography, Box, IconButton, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(239, 239, 240, 1)',
        color: '#333',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
      <Tooltip title="Scroll to the top" arrow>
        <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: '#333',
              color: '#fff', // White icon color
              borderRadius: '50%', // Circular shape
              padding: '5px', // Space around icon
              '&:hover': {
                backgroundColor: '#0056b3',
              },
              marginBottom: 2
            }}
          >
            <ArrowUpwardIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
        <Typography variant="body2">
          <span>© {currentYear} Anusha Anand. All rights reserved.</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
