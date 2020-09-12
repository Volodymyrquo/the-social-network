import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "28vw",
      },
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

  const maxLength50 = maxLengthCreator(50);

  
const AddPostForm = (props) => {

    const classes = useStyles();


    return ( 
        <form onSubmit={props.handleSubmit} noValidate autoComplete="off" >
       {/*  <div  className={classes.root} style={{backgroundColor: "white", padding: "1vh", borderRadius: "5px"}}> */}
       <Paper className={classes.root}>
      <Field 
        component={renderTextField}
          id="my-post"
          label="My post"
          variant="outlined"
          multiline
          rows={5}
          name="addNewPost"
          validate={[required, maxLength50]}
         
        />
        </Paper>
    {/*  </div> */}
    <div style={{margin: "2vh"}}>
    <Button  variant="contained" color="secondary" type="submit" >
       Add post
     </Button>
    </div>
      </form>
     );
}
 
export default reduxForm({form:"addPost"})(AddPostForm);