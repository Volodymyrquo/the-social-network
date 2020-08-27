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

const Dialogs = (props) => {
  const classes = useStyles();

  

  const dialogsElements = props.state.dialogs.map(item => <DialogItem
      key={item.key}
      name={item.name}
      id={item.id}
      photo={item.photo}
    />
  )

const messagesElements = props.state.messages.map( item => <Typography key={item.id} className={classes.typography}>
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
