import React from 'react';
import { Divider, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import SideDrawer from './SideDrawer'


const useStyles = makeStyles(()=>({
  title:{
    flexGrow:1
  },
  tagline:{
    fontSize:20,
    textTransform:'uppercase',
    justifyContent:'center'
  }

}))


const Header = () => {

  const classes = useStyles();

  return <>
    <Toolbar>
      <SideDrawer>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </SideDrawer>
      <Typography variant="h6" className={classes.title}>
        Blogging Website
      </Typography>

      <IconButton color="inherit">
        <Badge badgeContent={1} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <AccountCircleIcon />
      </IconButton>

    </Toolbar>
    <Divider />
    <Toolbar className={classes.tagline}>
      Lorem ipsum dolor sit ame
    </Toolbar>
  </>;
};

export default Header;
