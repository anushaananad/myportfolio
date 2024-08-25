import React from 'react';
import { Box, Card, CardContent, IconButton, Paper, Typography, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  skills?: string[];
  duration?: string;
  keywords?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, duration, imageUrl, githubLink, skills = [], keywords = []}) => {
  return (
    // <Paper
    //   elevation={3}
    //   sx={{
    //     transition: 'transform 0.3s, box-shadow 0.3s',
    //     '&:hover': {
    //       transform: 'translateY(-5px)',
    //       boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
    //     },
    //   }}
    // >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box
          sx={{
            width: '100%',
            height: '250px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            '&:hover::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay on hover
            },
          }}
        >
          {githubLink && (
          <IconButton
            href={githubLink}
            target="_blank"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
              },
            }}
          >
            <GitHubIcon />
          </IconButton> )}
        </Box>

        <CardContent sx={{ flexGrow: 1, height: '310px'}}>
        <Box sx={{ marginBottom: '8px' }}>
          <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
            {title}
          </Typography>
          </Box>
          <Box sx={{ marginBottom: '16px', color: '#777' }}>
          <Typography variant="body2" sx={{ mb: 2, color: "#777" }}>
            {duration}
          </Typography>
          </Box>
          <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4}}>
            {description}
          </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" size="small" />
            ))}
          </Box>
        </CardContent>
      </Card>
    // </Paper>
  );
};

export default ProjectCard;
