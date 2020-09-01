import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./post/Post";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "33vw",
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



  const MyPosts = (props) => {

  const classes = useStyles();

  const postsElements = props.posts.map(item => <Post message={item.post} key={item.id} />);

  return (
    <div>
     
      <Paper className={classes.root}>
       
        <form noValidate autoComplete="off" >
          <TextField
          
            id="my-post"
            label="My post"
           value={props.newPostText}
            variant="outlined"
            multiline
            rows={5}
           
          onChange={(event) => {props.onPostChange(event.target.value)}}
          
          />
        </form>
      </Paper>

      <div className={classes.root}>
      <Button onClick={props.addPost} variant="contained" color="secondary">
         Add post
       </Button>
       </div>

      {postsElements}
    </div>
  );
};

export default MyPosts;
