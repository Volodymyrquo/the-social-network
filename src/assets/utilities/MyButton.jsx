import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const MyButton = (props) => {
  const classes = useStyles();

const choiseButton = () => {
  switch (props.color) {
    case 'primary':
      return  <Button variant="contained" color="primary">
         {props.content}
       </Button>
 
 case 'secondary':
    return   <Button onClick={() => {alert('Hey, how are you')}} variant="contained" color="secondary">
         {props.content}
       </Button>
     
       case 'disabled':
    return   <Button variant="contained" disabled>
         {props.content}
       </Button>
       
       case 'link':
     return  <Button variant="contained" color="primary" href="#contained-buttons">
        {props.content}
         </Button>
         
         default:
        return   <Button variant="contained">{props.content}</Button>
      
    }
}
  return (<div className={classes.root}>
{choiseButton()}
   </div>
  );
}

export default MyButton;

