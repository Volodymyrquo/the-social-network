import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyButton from '../../../assets/utilities/MyButton';
import Post from './post/Post';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

const MyPosts = (props) => {
  
  const classes = useStyles();
  const postData = [
    {id:1, post: "Hi, how are you", likesCount: 10},
    {id:2, post: "It's my first post", likesCount: 15},
    {id:3, post: "O go go", likesCount: 20},
]
    return ( <div>
    
     
       {/*  <textarea cols="50" rows="5" placeholder="Write your post here">

        </textarea> */}
        <Paper>
        <form className={classes.root} noValidate autoComplete="off">
                   <TextField
          id="my-post"
          label="My post"
          defaultValue="Write some post here"
          variant="outlined"
          multiline
          rows={5}
        />
         </form>
         </Paper>
     
    
   
    <MyButton color="primary" content="submit" />
   
    {postData.map(item => <Post message={item.message} key={item.id} />)}
    </div>
    );
}
 
export default MyPosts;