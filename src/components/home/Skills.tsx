import React from 'react';
import { Box, Tooltip, Typography, Grid, Avatar } from '@mui/material';
import { Javascript as JavascriptIcon, Code as CodeIcon, PhpSharp as PhpSharpIcon } from '@mui/icons-material';


interface Skill {
  icon: React.ReactNode;
  name: string;
  isCustom?: boolean;
  iconUrl?: string;
}

interface SkillsByCategory {
  [key: string]: Skill[];
}

const skillsByCategory: SkillsByCategory = {
  Programming: [
    { icon: <JavascriptIcon fontSize="large" />, name: 'JavaScript' },
    { icon: <img src="https://www.svgrepo.com/show/376344/python.svg" alt="Python" width={40} height={40} />, name: 'Python', isCustom: true, iconUrl: 'https://www.svgrepo.com/show/376344/python.svg' },
    { icon: <CodeIcon fontSize="large" />, name: 'TypeScript' },
    { icon: <img src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" alt="HTML" width={40} height={40}/>, name: 'HTML', isCustom: true,  iconUrl: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png'},
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjhkptAiEpo6BU_XYgC1gib7-b-JJS0W5UQ&s" alt="Java" width={40} height={40} />, name: 'Java', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjhkptAiEpo6BU_XYgC1gib7-b-JJS0W5UQ&s' },
    { icon: <img src="https://banner2.cleanpng.com/20171217/033/av2bv0zlf.webp" alt="C" width={40} height={40} />, name: 'C', isCustom: true, iconUrl: 'https://banner2.cleanpng.com/20171217/033/av2bv0zlf.webp' },
    { icon: null, name: 'C++', isCustom: true},
    { icon: null, name: 'BASH', isCustom: true },
    { icon: <img src="https://dwglogo.com/wp-content/uploads/2017/09/Scala_icon.png" alt="Scala" width={40} height={40} />, name: 'Scala', isCustom: true, iconUrl: 'https://dwglogo.com/wp-content/uploads/2017/09/Scala_icon.png' },
    { icon: <PhpSharpIcon fontSize='large'/>, name: 'PHP'},
  ],
  Technology: [
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg" alt="AWS S3" width={40} height={40} />, name: 'AWS S3', isCustom: true, iconUrl: 'https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg' },
    { icon: <img src="https://miro.medium.com/v2/resize:fit:400/1*T1jV8sJ_NH9pdfkaQ0pK4A.png" alt="AWS CDK" width={40} height={40} />, name: 'AWS CDK', isCustom: true, iconUrl: 'https://miro.medium.com/v2/resize:fit:400/1*T1jV8sJ_NH9pdfkaQ0pK4A.png' },
    { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png" alt="AWS Lambda" width={40} height={40} />, name: 'AWS Lambda', isCustom: true, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/2048px-Amazon_Lambda_architecture_logo.svg.png' },
    { icon: <img src="https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png" alt="AWS SQS" width={40} height={40} />, name: 'AWS SQS', isCustom: true, iconUrl: 'https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png' },
    { icon: <img src="https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png" alt="API Gateway" width={40} height={40} />, name: 'API Gateway', isCustom: true, iconUrl: 'https://raw.githubusercontent.com/pulumi/pulumi-aws-apigateway/main/assets/logo.png' },
    { icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="React" width={40} height={40} />, name: 'React', isCustom: true, iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256' },
    { icon: <img src="https://cdn.worldvectorlogo.com/logos/boomi-1.svg" alt="Boomi" width={40} height={40} />, name: 'Boomi', isCustom: true, iconUrl: 'https://cdn.worldvectorlogo.com/logos/boomi-1.svg' },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDOJeTNGLnHgEwynN6PRxhJPFUKxWtZRloA&s" alt="MySQL" width={20} height={20} />, name: 'MySQL', isCustom: true, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDOJeTNGLnHgEwynN6PRxhJPFUKxWtZRloA&s' },
    { icon: <img src="https://m.media-amazon.com/images/I/41QodfboFdL.png" alt="Oracle Database" width={40} height={40} />, name: 'Oracle Database', isCustom: true, iconUrl: 'https://m.media-amazon.com/images/I/41QodfboFdL.png' },
    { icon: <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_logo_icon_146556.png" alt="Docker" width={40} height={40} />, name: 'Docker', isCustom: true, iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_logo_icon_146556.png' },
    { icon: <img src="https://miro.medium.com/v2/resize:fit:735/1*U56JIjUVBUVcUZRTA8RBXA.png" alt="Github Actions" width={40} height={40} />, name: 'Github Actions', isCustom: true, iconUrl: 'https://miro.medium.com/v2/resize:fit:735/1*U56JIjUVBUVcUZRTA8RBXA.png' },
    { icon: <img src="https://www.testtriangle.com/wp-content/uploads/2023/08/jira-icon.png" alt="Jira" width={40} height={40} />, name: 'Jira', isCustom: true, iconUrl: 'https://www.testtriangle.com/wp-content/uploads/2023/08/jira-icon.png' },
    { icon: <img src="https://www.starburst.io/wp-content/uploads/2023/10/transparentHadoop.png" alt="Hadoop" width={40} height={40} />, name: 'Hadoop', isCustom: true, iconUrl: 'https://www.starburst.io/wp-content/uploads/2023/10/transparentHadoop.png' },
    { icon: <img src="https://ih1.redbubble.net/image.453956200.1706/tst,small,507x507-pad,600x600,f8f8f8.u5.jpg" alt="Jenkins" width={40} height={40} />, name: 'Jenkins', isCustom: true, iconUrl: 'https://ih1.redbubble.net/image.453956200.1706/tst,small,507x507-pad,600x600,f8f8f8.u5.jpg' },
    { icon: <img src="https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png" alt="Spring Framework" width={40} height={40} />, name: 'Spring Framework', isCustom: true, iconUrl: 'https://pluralsight2.imgix.net/paths/images/corespring-f9a00f4516.png' },
    { icon: <img src="https://blogs.perficient.com/files/5c91662ee4f8183ad5f624dabb6e3ce1.png" alt="Katalon Studio" width={40} height={40} />, name: 'Katalon Studio', isCustom: true, iconUrl: 'https://blogs.perficient.com/files/5c91662ee4f8183ad5f624dabb6e3ce1.png' },
  ]
};

const Skills: React.FC = () => {
  return (
    <Box 
      sx={{ 
        padding: '20px 0',
        backgroundColor: 'white',
        color: 'rgba(30, 33, 31, 1)',
      }}
    >
      {Object.keys(skillsByCategory).map((category) => (
        <Box key={category}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {skillsByCategory[category].map((skill, index) => (
              <Grid item key={index} xs={3} sm={2} md={1}>
                <Tooltip title={skill.name} arrow>
                  <Box
                    sx={{
                      backgroundColor: '#333',
                      color: '#333',
                      borderRadius: '50%', // Round
                      width: 70, 
                      height: 70,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(9, 9, 9, 1)',
                      }
                    }}
                  >
                    {skill.isCustom ? (
                      skill.iconUrl ? (
                        <Avatar
                          src={skill.iconUrl}
                          alt={skill.name}
                          sx={{
                            width: 60,
                            height: 60,
                          }}
                        />
                      ) : (
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: '0.8rem', // Smaller font size
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          {skill.name}
                        </Typography>
                      )
                    ) : (
                      <Box
                        sx={{
                          color: 'white',
                          fontSize: '2rem',
                        }}
                      >
                        {skill.icon}
                      </Box>
                    )}
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
