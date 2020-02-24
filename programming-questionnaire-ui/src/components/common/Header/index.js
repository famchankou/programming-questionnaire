import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unauthorize } from 'store/auth/login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import styles from './styles';

/**
 * Header component with username and profile avatar. 
 * Click on avatar to logout or get to profile page
 * Click on the title to go to the main page
 * @param {object} classes
 */

const HeaderComponent = ({ classes }) => {
  // Get username from redux-store
  const username = useSelector(state => state.auth.user.username);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // handler to open menu 
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  // handler to close menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  // handler to logout
  const handleLogout = () => {
    dispatch(unauthorize());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={Link} to="/">
            Programming quizes
          </Typography>
          <Typography>{username}</Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(HeaderComponent);
