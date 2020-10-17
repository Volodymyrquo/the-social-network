import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Navbar menuButton={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            THE SOCIAL NETWORK
          </Typography>

          {props.isAuth ? (
            <Toolbar>
              <Button component={NavLink} to={"/login"} onClick={props.logoutUser} color="inherit">
                Log out
              </Button>

              <Typography>{props.login}</Typography>
              <Avatar
                alt={props.login}
                style={{ marginLeft: "16px" }}
                src={`https://social-network.samuraijs.com/activecontent/images/users/${props.id}/user-small.jpg`}
              />
            </Toolbar>
          ) : (
            <Button component={NavLink} to={"/login"} color="inherit">
              Log in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
