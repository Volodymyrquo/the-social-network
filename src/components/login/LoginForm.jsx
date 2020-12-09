import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators/validators';

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
          color='primary'
        />
      }
      label={label}
    />
  </div>
);

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
);

const LoginForm = ({ handleSubmit, error }) => {
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete='off'>
      <div>
        <Field
          name='email'
          component={renderTextField}
          label='Email'
          defaultValue='Email'
          variant='outlined'
          id='outlined-required'
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name='password'
          component={renderTextField}
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='outlined'
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name='rememberMe'
          component={renderCheckbox}
          label='Remember me'
        />
      </div>
      {error && (
        <Typography color='secondary' gutterBottom>
          {error}
        </Typography>
      )}
      <div>
        <Typography color='primary' gutterBottom>
          Email: free@samuraijs.com
        </Typography>
        <Typography color='primary' gutterBottom>
          Password: free
        </Typography>
        <Button variant='contained' color='secondary' type='submit'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
