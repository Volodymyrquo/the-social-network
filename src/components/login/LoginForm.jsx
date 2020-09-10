import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Checkbox, TextField, Button, FormControlLabel, Input } from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }));

  const renderCheckbox = ({ input, label }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
            color="primary"
          />
        }
        label={label}
      />
    </div>
  )

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

const LoginForm = (props) => {
    const classes = useStyles();
    return (
       
         <form onSubmit={props.handleSubmit} className={classes.root} noValidate autoComplete="off" >
        <div>
        <Field name="login" component={renderTextField} label="Login"  defaultValue="Login"
          variant="outlined"   id="outlined-required"
           />
     </div>
        <div>
        <Field name="password" component={renderTextField}  id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
           />
</div>
        <div>
        <Field name="rememberMe" component={renderCheckbox} label="Remember me" />
        </div>
        <div>
     

    <Button  variant="contained" color="secondary" type="submit">Submit</Button>
        </div>
        </form>
       
      
    )
}

 
export default reduxForm({form:"login"})(LoginForm);