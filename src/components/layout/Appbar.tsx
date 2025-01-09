import * as React from 'react';
import { AppBar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography  } from '@mui/material';
import { EmailSharp as MailIcon, Face3 as Face3Icon, Menu as MenuIcon, DownloadForOffline as DownloadForOfflineIcon } from '@mui/icons-material';

const pages: string[] = ['About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    const section = document.getElementById(page.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: 'rgba(239, 239, 240, 1)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            onClick={scrollToTop}
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#333' }}
          >
            <Tooltip title="Anusha Anand" arrow>
              <Face3Icon />
            </Tooltip>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton
            onClick={scrollToTop}
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#333' }}
          >
            <Face3Icon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#333',
              textDecoration: 'none',
            }}
          >
            Anusha Anand
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: '#333', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
        <Tooltip title="Email me" arrow>
          <IconButton
            href="mailto:anushaanand648@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'black' }}
          >
            <MailIcon fontSize="medium" />
          </IconButton>
          </Tooltip>
          {/* <Tooltip title="Download Resume" arrow>
            <IconButton
              component={Link}
              // href={resumePdf}
              target="_blank"
              download="Anusha-Anand-Resume.pdf"
              sx={{ color: 'black' }}
              >
              <DownloadForOfflineIcon fontSize="medium" />
            </IconButton>
          </Tooltip> */}
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
