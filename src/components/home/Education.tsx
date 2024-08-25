import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import EducationCard from '../common/EducationCard'; 
import Skills from './Skills';

const education = [
  {
    institution: 'University of Texas at Arlington',
    degree: 'Master of Science',
    duration: 'Aug 2022 - May 2024',
    cgpa: '4.0/4',
    courses: [
      'Design and Analysis of Algorithms',
      'Data Analysis and Modeling Techniques',
      'Database Systems',
      'Distributed Systems',
      'Web Data Management',
      'Data Mining',
      'Cloud Computing and Big Data',
      'Special Topics in Networking',
      'SE: Management, Maintenance, Quality Assurance',
      'Artificial Intelligence',
      'Neural Networks',
      'Machine Learning',
    ],
  },
  {
    institution: 'Sikkim Manipal Institute of Technology',
    degree: 'Bachelor of Technology',
    duration: 'Aug 2016 - July 2020',
    cgpa: '9.25/10',
    courses: [
      'Data Structures',
      'Programming with C++',
      'Intellectual Property Rights & Software Ethics',
      'Database Management Systems',
      'Computer Organization & Architecture',
      'Advanced Computer Organization & Architecture',
      'Principle of Programming Language',
      'Java Programming',
      'Advanced Java Programming',
      'Operating Systems',
      'Software Engineering',
      'Object Oriented Analysis & Design Using UML',
      'Computer Networks I',
      'Computer Networks II',
      'Neural Networks & Deep Learning',
      'Distributed Systems',
      'Soft Computing',
      'Compiler Design',
      'Cloud Computing',

    ],
  },
];

const Background: React.FC = () => {
  return (
    <Box 
    sx={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(253, 253, 254, 1)'}}
      >
      <Container id="education" sx={{ padding: '60px 0' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{mb: 2, mt:1}} align="center">
          Education
        </Typography>
        <Box sx={{
          width: '50px',
          height: '2px', 
          backgroundColor: 'black',
          margin: '8px auto',
          marginBottom: '20px'
        }} />
        <Stack spacing={2} sx={{mb: 5}}>
          {education.map((edu, index) => (
            <EducationCard 
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              duration={edu.duration}
              cgpa={edu.cgpa}
              courses={edu.courses}
            />
          ))}
        </Stack>
        <Box id="skills"  sx={{mt: 5}}>
          <Typography variant="h4" gutterBottom component="h2" align="center">
            Skills
          </Typography>
          <Box sx={{
            width: '50px',
            height: '2px', 
            backgroundColor: 'black',
            margin: '8px auto',
            marginBottom: '16px'
          }} />
          <Skills/>
        </Box>
      </Container>
    </Box>
  );
};

export default Background;
