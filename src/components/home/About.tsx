import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

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
              I'm an AWS Certified Data and ML Engineer with 4+ years of experience building distributed data pipelines, AI-integrated applications, and enterprise systems, currently based in the Dallas-Fort Worth area.
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
              At Tech Mahindra, I architect distributed PySpark and Kafka pipelines that process 10M+ financial records daily for Citigroup, and build AI-driven data quality frameworks that catch defects before they reach production.
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
              I care about scalable ETL design, event-driven architectures, and applied GenAI tooling, and I like measuring my work in concrete outcomes: faster releases, cleaner data, fewer defects escaping to production.
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
              Outside of enterprise work, I build my own AI-powered projects, from a food-recognition app to semantic search over video transcripts, to keep exploring the ML and GenAI space hands-on.
            </Typography>

            <Typography component="li" variant="body1" paragraph sx={{ textAlign: 'justify', mb: 2, paddingLeft: '25px'  }}>
              I hold an MS in Computer Science (4.0 GPA) from UT Arlington, and I value teamwork, clear communication, and rigorous code review as much as I value clean architecture.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;