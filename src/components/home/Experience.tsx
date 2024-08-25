import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import ExperienceCard from '../common/ExperienceCard';
import { Box, Container, Typography  } from '@mui/material';

const colorOptions: Array<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'> = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success'
];
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[randomIndex];
};

const experiences = [
  {
    title: 'Student Volunteer',
    company: 'The University of Texas at Arlington',
    duration: 'August 2024 - Present',
    responsibilities: [
      'Contribute to grant-related research projects aimed at improving educational outcomes.',
      'Conduct research, analyze data, and develop insights to inform educational practices.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'iHeartMedia',
    duration: 'June 2024 - August 2024',
    responsibilities: [
        'Engineered a fault-tolerant, event-driven Lambda function with AWS CDK, S3, SNS, SQS, and GitHub Actions for Boomi, automating and streamlining process scheduling.',
        'Secured API endpoints by developing a Lambda API authorizer with API Gateway, incorporating policy management and domain validation.',
        'Created a dynamic CRUD page using Typescript, React and Material UI, featuring real-time data fetching, advanced filtering, and nested checkbox selection.',
        'Contributed to Agile development, actively participating in daily stand-ups and sprint planning.',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    company: 'The University of Texas at Arlington',
    duration: 'Sept 2022 - May 2024',
    responsibilities: [
        'Supported 11 Project MMS scholars by providing academic and administrative assistance.',
        'Assisted in managing 4 Special Education courses, contributing to course administration.',
        'Conducted research and data analysis on 50+ articles, delivering insights that informed academic and research activities.',
        'Secured 2 research funding opportunities through successful grant applications.',
    ],
  },
  {
    title: 'Associate Software Engineer Grade-I Level-II',
    company: 'Nomura Research Institute Financial Technologies India Pvt. Ltd.',
    duration: 'April 2022 - July 2022',
    responsibilities: [
        'Led a client-facing project involving requirement gathering and analysis, developed a Java command-line batch to meet new requirements and enhancing reporting.',
        'Performed downstream processing analysis and generated bi-weekly client reports.',
        'Selected for an onsite project in Japan, showcasing technical and project management skills.',
    ],
  },
  {
    title: 'Associate Software Engineer Grade-I Level-I',
    company: 'Nomura Research Institute Financial Technologies India Pvt. Ltd.',
    duration: 'August 2020 - March 2022',
    responsibilities: [
        'Developed and maintained Java-based command-line batches using Spring Framework and Oracle databases.',
        'Designed a dynamic grid-based query results page with HTML and JavaScript for efficient data display.',
        'Authored and executed use cases and test cases, ensuring robust testing and seamless sprint deployments.',
        'Optimized automation workflows with Shell scripting and Jenkins pipelines for batch execution.',
        'Delivered end-to-end software solutions, from documentation and design to development, SQL queries, testing, and deployment.',
        'Mentored junior developers and conducted code reviews to uphold high code quality standards.',
    ],
  },
  {
    title: 'Intern',
    company: 'Nomura Research Institute Financial Technologies India Pvt. Ltd.',
    duration: 'January 2020 - March 2020',
    responsibilities: [
        'Created 50+ automation test cases with Katalon Studio, improving web application evaluation.',
        'Collaborated with QA and development teams to implement complex Java and Groovy functionalities, ensuring seemless deployment of automated tests.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Box id="experience">
      <Container  style={{ padding: '20px 0' }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{mt: 6}}>
          Experience
        </Typography>
        <Box sx={{
            width: '50px',
            height: '2px', 
            backgroundColor: 'black',
            margin: '8px auto',
            marginBottom: '16px'
          }} 
        />
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {exp.duration}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={getRandomColor()} />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent> 
                <ExperienceCard 
                  title={exp.title}
                  company={exp.company}
                //   duration={exp.duration}
                  responsibilities={exp.responsibilities}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Experience;
