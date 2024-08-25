import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import { styled } from '@mui/system';

const ProfilePicture = styled('img')({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  marginRight: '20px',
});

const About: React.FC = () => {
  return (
    <Box id="about">
      <Container style={{ marginTop: '10px', padding: '20px 0' }}>
        <Typography marginTop={6} variant="h4" component="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Box sx={{
          width: '50px',
          height: '2px', 
          backgroundColor: 'black',
          margin: '25px auto',
          marginBottom: '16px'
        }} 
        />
        <Box>
          <Box component="ul" sx={{ pl: 2, mb: 0, listStyleType: 'disc', mr: 5, ml: 5, mt: 2}}>
            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px' }}>
            I'm a Software Engineer specializing in full-stack development, based in Dallas, Texas.
            </Typography>
            
            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
            I craft and maintain robust web applications using React and Spring, with a strong command of Python, AWS, and Jenkins.            
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
            I love solving complex problems, optimizing systems, and enhancing user experiences. 
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
            I value teamwork and effective communication, actively participating in Agile processes and code reviews.
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
            In my free time, I like to read mystery books, doodle, or go biking.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
