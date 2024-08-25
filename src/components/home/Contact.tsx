import React from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent, Link, Tooltip } from '@mui/material';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Mail as MailIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import profilePic from '../constant/profilepic.jpg';
// import resumePdf from '../constant/resume.pdf'

const ProfilePicture = styled('img')({
  borderRadius: '50%',
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  marginBottom: '10px',
});

const Contact: React.FC = () => {
  return (
    <Container id="contact" sx={{ padding: '60px 0' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 600,
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h2" >
          Contact
        </Typography>

        <Box sx={{
          width: '50px',
          height: '2px', 
          backgroundColor: 'black',
          margin: '8px auto',
          marginBottom: '25px'
        }} />

        <ProfilePicture src={profilePic} alt="Profile Picture" />

        <Box sx={{ width: '100%', mt: 2 }}>
          <Card >
            <CardContent>
              <Typography variant="body1">
              If you’re interested in collaborating or have any questions about my work, please don’t hesitate to reach out.  I am always open to new opportunities and connections.
              {/* You can also explore my {' '} */}
                {/* <Link
                  // href={resumePdf}
                  target="_blank"
                  download="Anusha-Anand-Resume.pdf"
                  sx={{ textDecoration: 'underline', color: 'primary.main' }}
                >
                  resumé
                </Link> for more details on my experience and skills.  */}
              </Typography>
              {/* <Typography variant="body1">
              I’m always excited about new opportunities and would love to hear about your project.
              </Typography> */}
              </CardContent>
          </Card>
          <Card>
            <CardContent>
            <Typography variant="body1">
            Feel free to connect with me via these channels
              </Typography>
              <Box alignItems="center" sx={{ display: 'flex', gap: 2, marginTop: '10px', alignItems: 'center', justifyContent: 'center'}}>
              <Tooltip title="Email" arrow>
                <IconButton
                    href="mailto:anushaanand648@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'black' }}
                  >
                    <MailIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    href="https://www.linkedin.com/in/anusha-anand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#0077b5' }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Github" arrow>
                  <IconButton
                    href="https://github.com/anushaananad"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'black' }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
