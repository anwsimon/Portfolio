import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const pages = ['Home', 'Projects', 'Personal'];

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    fontSize:"100px"
  },
  menu: {
    backgroundColor: "pink",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "100px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "green",
      borderBottom: "1px solid white",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: "green",
    fontSize: "50px",
    "&:hover": {
      color: "pink",
      borderBottom: "1px solid white",
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles()

  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/dashboard'],
        ['Team', '/team'],
        ['Projects', '/projects'],
        ['Reports', '/reports'],
      ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
      ))}
    </nav>
    // <AppBar position="static" >
    //   <Container maxWidth="xl" className={classes.menu}>
    //     <Toolbar disableGutters >
    //       <Typography
    //         variant="h3"
    //         noWrap
    //         component="div"
    //         className={classes.navlinks}
    //         sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
    //       >
    //         Anna Simon
    //       </Typography>

    //       {/* condensed view */}
    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "white" }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <NavLink key ={page} to={`/${page}`} className={classes.menuLink}>
    //               <Typography
    //               textAlign="center"

    //               variant="h5">{page}
    //               </Typography>
    //             </NavLink>
    //           ))}
    //         </Menu>
    //       </Box>
    //       {/* wider view */}
    //       <Typography
    //         variant="h3"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
    //       >
    //         Anna Simon
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

    //         {pages.map((page) => (
    //           <NavLink key ={page} to={`/${page}`} className={classes.link}>
    //           <Typography textAlign="center">{page}</Typography>
    //         </NavLink>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
};
export default ResponsiveAppBar;
