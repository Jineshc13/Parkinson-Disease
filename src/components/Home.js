    import * as React from 'react';
    import { Link } from 'react-router-dom';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import Menu from '@mui/material/Menu';
    import MenuIcon from '@mui/icons-material/Menu';
    import Container from '@mui/material/Container';
    import Avatar from '@mui/material/Avatar';
    import Button from '@mui/material/Button';
    import Tooltip from '@mui/material/Tooltip';
    import MenuItem from '@mui/material/MenuItem';
    import AdbIcon from '@mui/icons-material/Adb';

    const pages = ['Updates', 'Diets&Exercises', 'Login', 'Detection', 'Consultancy'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    function ResponsiveAppBar() {
      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);
      const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const handleNavItemHover = (item) => {
        setHoveredNavItem(item);
      };

      const handleNavItemClick = (item) => {
        // Add your transition logic here
        console.log(`Clicked: ${item}`);
      };

      return (
        <AppBar position="static" sx={{ height: '100px', backgroundColor: '#333', borderBottom: '1px solid #555' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: '25px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    letterSpacing: '.5rem',
                    color: '#ddd',
                    textDecoration: 'none',
                  }}
                >
                  CS
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{
                        mx: 2,
                        color: hoveredNavItem === page ? '#fff' : '#ddd',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                      component={Link}
                      to={`/${page.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-')}`}
                      onMouseEnter={() => handleNavItemHover(page)}
                      onMouseLeave={() => handleNavItemHover(null)}
                      onClick={() => handleNavItemClick(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 2 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 40, height: 40 }} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    }

    export default ResponsiveAppBar;
