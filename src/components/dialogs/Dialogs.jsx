import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { List } from "@material-ui/core";
import DialogItem from "./dialogItem/DialogItem";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "33vw",
    
    },
    '& > *': {
      margin: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
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

  

  const dialogsElements = props.dialogs.map(item => <DialogItem
      key={item.key}
      name={item.name}
      id={item.id}
      photo={item.photo}
    />
  )

const messagesElements = props.messages.map( item => <Typography key={item.id} className={classes.typography}>
    {item.message}
  </Typography>
)



  return (
    <div className={classes.root} style={{marginTop: "60px"}}>
      <Grid container spacing={2} style={{ margin: "auto" }}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <List dense className={classes.root}>
              {dialogsElements}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.root}>
            {messagesElements}
           
       
       <form noValidate autoComplete="off" >
         <TextField
         
           id="my-message"
           label="My message"
          value={props.newMessageBody}
           variant="outlined"
           multiline
           rows={5}
           onChange={(event) => {props.onNewMessageChange(event.target.value)}}
           
         
         />
       </form>
   

     <div className={classes.root}>
     <Button  onClick={props.onSendMessageClick} variant="contained" color="secondary">
        send
      </Button>
      </div>
          </Paper>
                 </Grid>
      </Grid>
    </div>
  );
};

export default Dialogs;
