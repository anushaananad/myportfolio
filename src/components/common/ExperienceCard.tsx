import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration?: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, responsibilities }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 5,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
        //   transform: 'translateY(-5px)',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'justify' }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1, textAlign: 'justify' }}>
        {company}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        {duration}
      </Typography>
      
      <Box component="ul" sx={{ pl: 2, mb: 0, listStyleType: 'disc' }}>
        {responsibilities.map((item, index) => (
          <Typography component="li" variant="body2" key={index} sx={{ mb: 0.5, textAlign: 'justify', paddingLeft: '10px' }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default ExperienceCard;
