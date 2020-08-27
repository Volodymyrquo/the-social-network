import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
           <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
         className={props.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> 
    
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/profile">Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/dialogs">Messages</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/news">News</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/musik">Musik</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/users">Users</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link component={NavLink} to="/settings">Settings</Link></MenuItem>
      </Menu>
    </div>
  );
}
 
export default Navbar;