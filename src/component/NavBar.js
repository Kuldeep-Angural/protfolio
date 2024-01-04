import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, FormControlLabel, FormGroup, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import image from '../images/avtar-image.jpg';
import { MaterialUISwitch } from '../util/util';
const settings = [
  {name:'resume',link:'https://drive.google.com/file/d/1gztQ097DXVDSo_vzwjEVXgCB28ra65pU/view?usp=sharing'},
  {name:'github',link:'https://github.com/KuldeepKumarAngural'},
  {name:'Linkedin',link:'https://www.linkedin.com/in/kuldeep-kumar-485a13252/'}
];

const  NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  console.log(settings[0]);


  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="kuldeep Kumar" src={image}  sx={{ height:'100px',width:'100px', display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Kuldeep Kumar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {displays on small Devices} */}
              {settings.map((page,index) => (
                <MenuItem key={index}  onClick={handleCloseNavMenu}>
                  <Link href={page.link} color='inherit' underline='none' target="_blank" style={{fontWeight:'700'}}>
                    {console.log(page)}
                  <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar alt="Remy Sharp" src={image}  sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Kkumar
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "end",
                marginRight: "150px",
              },
            }}
          >
            {settings.map((page) => (
             <Link href={page.link} target="_blank" color='inherit' sx={{margin:'20px',fontSize:'18px',fontWeight:'500'}} underline="none">
             {String(page.name).toUpperCase()}
           </Link>
            ))}
          </Box>
          <Box>
          <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} onChange={props.onChange} checked={props.chacked}/>}/>
      </FormGroup>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;