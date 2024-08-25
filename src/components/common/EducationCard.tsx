import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  cgpa?: string;
  courses: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, duration, cgpa, courses }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', marginRight: '8px' }}>
            {institution}
          </Typography>
          <Typography variant="body1" color="textSecondary">{degree} | CGPA: {cgpa} | {duration}  </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container >
          {courses.map((course, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box component="ul" sx={{ pl: 2, mb: 0, listStyleType: 'disc' }}> 
                  <Typography component="li" variant="body2" key={index} sx={{  mb: 0.5 }} color="textSecondary">
                    {course}
                  </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default EducationCard;
