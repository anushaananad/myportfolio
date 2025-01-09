import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import ProjectCard from '../common/ProjectCard';
import dbPic from '../constant/projects/DatabaseIntegratedRideBookingApp.jpg'
import bbPic from '../constant/projects/BrazenBrushes.png'
import expense8Pic from '../constant/projects/astar.png'
import skinLesionPic from '../constant/projects/skinLesion.png'
import transCoordPic from '../constant/projects/transCoord2pc.png'
import gmapsPic from '../constant/projects/GoogleMapsApi.png'
import googleCSPic from '../constant/projects/GoogleCloudStorage.png'
import ytQueryAssistantPic from '../constant/projects/YTQueryAssistant.png'

const Projects: React.FC = () => {
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
    <Container id="projects" sx={{ padding: '60px 0' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Projects
      </Typography>
      <Box sx={{
          width: '50px',
          height: '2px',
          backgroundColor: 'black',
          margin: '8px auto',
          marginBottom: '25px'
        }} />
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="YouTube Video Query Assistant"
            duration='(November 2024 - Present)'
            description="Built an interactive YouTube video query system using LangChain, which processes video transcripts with OpenAI Embeddings stored in a vector database. Enhanced querying capabilities with recursive search and error handling. " 
            imageUrl={ytQueryAssistantPic}
            // githubLink="https://github.com/anushaananad/brazenbrushes"
            skills={['Langchain', 'OpenAI Embeddings', 'Vector Databases', 'Streamlit']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="BrazenBrushes: Artwork Display Web Application"
            duration='(In development)'
            description="Developing a web application to display paintings." 
            imageUrl={bbPic}
            // githubLink="https://github.com/anushaananad/brazenbrushes"
            skills={['Material UI', 'React']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Resilient Transaction Management System with 2-Phase Commit"
            duration='The University of Texas at Arlington (2024)'
            description="Developed a fault-tolerant distributed transaction system using Python and socket communication to ensure data consistency and reliability during network failures. "
            imageUrl={transCoordPic}
            githubLink="https://github.com/anushaananad/2PC-FaultTolerant"
            keywords={['Distributed System', 'Fault-Tolerance', '2PC Protocol',]}
            skills={['Distributed System', 'Python',  'Socket']}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Photo Album Using Google Cloud Platform"
            duration='The University of Texas at Arlington (October 2023)'
            description="Developed a photo-album web application that leverages cloud storage to manage and display photographs. Users can upload, delete, and browse their photo collections."
            imageUrl={googleCSPic}
            skills={['JSON', 'Google Cloud Platform', 'PHP']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Weather Website Integrating Google Maps API and OpenWeather API"
            duration='The University of Texas at Arlington (September 2023)'
            description="Displays real-time weather information using a map interface."
            imageUrl={gmapsPic}
            skills={['HTML', 'AJAX', 'JavaScript']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Expense 8 Puzzle Solver"
            duration='The University of Texas at Arlington (February 2023)'
            description="Implemented a Python program solving the Expense 8 puzzle problem, supporting multiple search methods (BFS, UCS, DFS, DLS, IDS, Greedy, A*). The results include search details, solution depth, and a
            step-by-step sequence of moves."
            imageUrl={expense8Pic}
            skills={['Python', 'Artificial Intelligence']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Database-Integrated Ride Booking App"
            duration='The University of Texas at Arlington  (August - December 2022)'
            description="Demonstrates efficient passenger, driver, and user management and utilizes advanced SQL queries for database enhancements."
            imageUrl={dbPic}
            githubLink="https://github.com/anushaananad/Node.js-Javascript-Oracle-project"
            skills={['JavaScript', 'HTML', 'MySQL', 'Oracle Database', 'Node.js']}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Skin Lesion Classification using Machine Learning Methods"
            duration='Manipal Institute of Technology (June - July (2019))'
            description="Developed a ML model that classifies benign and malignant images using Support Vector Machine, XGBoost, and Random Forest Classifiers."
            imageUrl={skinLesionPic}
            skills={['Machine Learning', 'Matplotlib', 'Python']}
          />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default Projects;
