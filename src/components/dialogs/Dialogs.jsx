import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import DialogItem from "./dialogItem/DialogItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  typography: {
    width: "100%",
    maxWidth: 500,
  },
}));

const Dialogs = () => {
  const classes = useStyles();

  const dialogsData = [
    { id: 1, name: "Andrew", photo: 573722 },
    { id: 2, name: "Veronica", photo: 793535 },
    { id: 3, name: "Peter", photo: 201065 },
    { id: 4, name: "Jessica", photo: 159213 },
    { id: 5, name: "Paula", photo: 1252081 },
  ];

  const messagesData = [
    { id: 1, message: "Hi, how are you" },
    { id: 2, message: "Are you ok" },
    { id: 3, message: "Hi everyone" },
    { id: 4, message: "Yo yo yo" },
    { id: 5, message: "Uhooo" },
  ];

  const dialogsElements = dialogsData.map(item => <DialogItem
      key={item.key}
      name={item.name}
      id={item.id}
      photo={item.photo}
    />
  )

const messagesElements = messagesData.map( item => <Typography key={item.id} className={classes.typography}>
    {item.message}
  </Typography>
)
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ margin: "auto" }}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <List dense className={classes.root}>
              {dialogsElements}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            {messagesElements}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dialogs;
