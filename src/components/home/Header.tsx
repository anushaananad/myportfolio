// import React from 'react';
// import { Box, Typography } from '@mui/material';

// // Define bounce animation keyframes
// const bounceKeyframes = `
//   @keyframes bounce {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//   }
// `;

// const Header: React.FC = () => {
//   return (
//     <Box
//       id="header"
//       component="section"
//       sx={{
//         height: '100vh',
//         maxWidth: '100vw',
//         backgroundColor: 'rgba(252, 253, 254, 1)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-start', // Align content to left
//         color: '#fff', // White text color
//         textAlign: 'left',
//         px: 25, // Horizontal padding
//         py: 4, // Vertical padding
//         position: 'relative',
//         overflow: 'hidden', // Animation stays within container

//         // Apply bounce animation
//         '& > div': {
//           animation: 'bounce 3s infinite',
//         },

//         //Bounce animation
//         '@keyframes bounce': {
//           '0%, 100%': {
//             transform: 'translateY(0)',
//           },
//           '50%': {
//             transform: 'translateY(-30px)',
//           },
//         },

//         // Stop animation on hover
//         '&:hover > div': {
//           animation: 'none',
//         },
//       }}
//     >
//       <Box>
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '2.5rem', color: '#335' },
//             fontWeight: 'light',
//             mb: -2,
//           }}
//         >
//           Hello,
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h3"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '5rem', color: '#333' },
//             fontWeight: 'bold',
//             mb: -1,
//           }}
//         >
//           I am Anusha
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', color: '#333' },
//             fontWeight: 'light',
//             // mb: 4
//           }}
//         >
//           Full Stack Developer + ML Enthusiast
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Header;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import welcomeVid from '../constant/welcome.mov'

// // Define bounce animation keyframes
// const bounceKeyframes = `
//   @keyframes bounce {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//   }
// `;

// const Header: React.FC = () => {
//   return (
//     <Box
//       id="header"
//       component="section"
//       sx={{
//         height: '100vh',
//         maxWidth: '100vw',
//         backgroundColor: 'rgba(252, 253, 254, 1)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between', // Space between text and video
//         color: '#fff',
//         textAlign: 'left',
//         px: { xs: 2, sm: 5, md: 10 }, // Adjust padding for responsiveness
//         py: 4,
//         position: 'relative',
//         overflow: 'hidden',

//         // Apply bounce animation
//         '& > div > div': {
//           animation: 'bounce 3s infinite',
//         },

//         // Bounce animation
//         '@keyframes bounce': {
//           '0%, 100%': {
//             transform: 'translateY(0)',
//           },
//           '50%': {
//             transform: 'translateY(-30px)',
//           },
//         },

//         // Stop animation on hover
//         '&:hover > div > div': {
//           animation: 'none',
//         },
//       }}
//     >
//       {/* Left-side content (Text) */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           maxWidth: '50%',
//           pr: { xs: 2, sm: 5, md: 8 }, // Padding for spacing
//         }}
//       >
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '2.5rem' },
//             fontWeight: 'light',
//             color: '#335',
//             mb: -2,
//           }}
//         >
//           Hello,
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h3"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
//             fontWeight: 'bold',
//             color: '#333',
//             mb: -1,
//           }}
//         >
//           I am Anusha
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             fontWeight: 'light',
//             color: '#333',
//           }}
//         >
//           Full Stack Developer + ML Enthusiast
//         </Typography>
//       </Box>

//       {/* Right-side content (Video) */}
//       <Box
//         sx={{
//           maxWidth: '50%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <video
//           src={welcomeVid} // Replace with your .mov file path
//           controls
//           style={{
//             width: '100%', // Responsive width
//             maxHeight: '80vh', // Responsive height
//             borderRadius: '8px', // Optional: Rounded corners
//             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Optional: Subtle shadow
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Header;



// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import welcomeVid from '../constant/welcome.mov';
// import laptopPic from '../constant/laptop.jpg';

// <video
//   src={welcomeVid}
//   autoPlay
//   muted
//   loop
//   playsInline
//   style={{
//     width: '100%',
//     maxHeight: '80vh',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//   }}
// />


// const Header: React.FC = () => {
//   return (
//     <Box
//       id="header"
//       component="section"
//       sx={{
//         height: '100vh',
//         maxWidth: '100vw',
//         backgroundColor: 'rgba(252, 253, 254, 1)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         color: '#fff',
//         textAlign: 'left',
//         px: { xs: 2, sm: 5, md: 10 },
//         py: 4,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           maxWidth: '50%',
//           pr: { xs: 2, sm: 5, md: 8 },

//         // '& > div': {
//         //   animation: 'bounce 3s infinite',
//         // },
//         // '@keyframes bounce': {
//         //   '0%, 100%': {
//         //     transform: 'translateY(0)',
//         //   },
//         //   '50%': {
//         //     transform: 'translateY(-30px)',
//         //   },
//         // },

//         // '&:hover > div': {
//         //   animation: 'none',
//         // },
//         }}
//       >
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '2.5rem' },
//             fontWeight: 'light',
//             color: '#335',
//             mb: -2,
//           }}
//         >
//           Hello,
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h3"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
//             fontWeight: 'bold',
//             color: '#333',
//             mb: -1,
//           }}
//         >
//           I am Anusha
//         </Typography>
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             fontWeight: 'light',
//             color: '#333',
//           }}
//         >
//           Full Stack Developer + ML Enthusiast
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           maxWidth: '50%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <video
//           src={welcomeVid}
//           autoPlay
//           muted
//           loop
//           style={{
//             width: '100%',
//             maxHeight: '80vh',
//             borderRadius: '8px',
//             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Header;


import React from 'react';
import { Box, Typography } from '@mui/material';
import welcomeVid from '../constant/welcome.mov';
import laptopPic from '../constant/laptop.jpg';

const Header: React.FC = () => {
  return (
    <Box
      id="header"
      component="section"
      sx={{
        height: '100vh',
        maxWidth: '100vw',
        backgroundColor: 'rgba(252, 253, 254, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
        textAlign: 'left',
        px: { xs: 2, sm: 5, md: 10 },
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '50%',
          pr: { xs: 2, sm: 5, md: 8 },
          '& > div': {
            animation: 'bounce 3s infinite',
          },
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-30px)',
            },
          },
          '&:hover > div': {
            animation: 'none',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '2.5rem' },
            fontWeight: 'light',
            color: '#335',
            mb: -2,
          }}
        >
          Hello,
        </Typography>
        <Typography
          variant="h2"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 'bold',
            color: '#333',
            mb: -1,
          }}
        >
          I am Anusha
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 'light',
            color: '#333',
          }}
        >
          Full Stack Developer + ML Enthusiast
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <img
          src={laptopPic}
          alt="Laptop"
          style={{
            width: '100%',
            height: 'auto',
            position: 'relative',
          }}
        />
        {/* <video
          src={welcomeVid}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '4%', // Adjust top position
            left: '12%', // Adjust left position
            width: '80%', // Adjust width to fit within the laptop screen
            height: '70%', // Adjust height to fit within the laptop screen
            objectFit: 'cover', // Ensures the video covers the defined width and height
            borderRadius: '8px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box> */}
           <Box
          sx={{
            position: 'absolute',
            top: '4%', // Adjust top position
            left: '13%', // Adjust left position
            width: '74%', // Adjust width to fit within the laptop screen
            height: '78%', // Adjust height to fit within the laptop screen
            overflow: 'hidden', // Ensures content outside the box is hidden
            clipPath: 'inset(0 0 0 0)', // Rectangular clip-path with sharp edges
          }}
        >
          <video
            src={welcomeVid}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the video covers the defined width and height
            }}
          />
        </Box>
        </Box>
    </Box>
  );
};

export default Header;
