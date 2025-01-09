import React from 'react';
import { Box, Grid, Container, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import awsIcon from '../constant/certifications/aws.jpg';
import googleIcon from '../constant/certifications/google.png';

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "December 2024",
    icon: awsIcon,
    verifyLink: "https://www.credly.com/badges/116f48df-18da-44be-84dd-e7044b0d851c/linked_in_profile", // Replace with actual link
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google",
    date: "January 2025",
    icon: googleIcon,
    verifyLink: "https://www.cloudskillsboost.google/public_profiles/07b0cd0e-823d-491e-95e8-26d253b0bc29/badges/13507719?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Replace with actual link
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "January 2025",
    icon: googleIcon,
    verifyLink: "https://www.cloudskillsboost.google/public_profiles/07b0cd0e-823d-491e-95e8-26d253b0bc29/badges/13506757?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", // Replace with actual link
  },
];

const Certifications: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(252, 253, 254, 1)',
        color: '#333',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container id="certifications" sx={{ padding: '60px 0' }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Certifications
        </Typography>
        <Box
          sx={{
            width: '50px',
            height: '2px',
            backgroundColor: 'black',
            margin: '8px auto',
            marginBottom: '25px',
          }}
        />
        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={cert.icon}
                  alt={`${cert.title} Icon`}
                  sx={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Issued by: {cert.issuer}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {cert.date}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={cert.verifyLink}
                    target="_blank"
                    sx={{ marginTop: '10px' }}
                  >
                    Verify
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;
