import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';

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

const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {

    return ( 
        <form onSubmit={props.handleSubmit} noValidate autoComplete="off" >
         <Field
         component={renderTextField}
           id="my-message"
           label="My message"
           variant="outlined"
           multiline
           rows={5}
          name="addNewTextMessage"
          validate={[required, maxLength10]}
          
         />
           <div style={{marginTop: "1vh"}} >
     <Button variant="contained" color="secondary" type="submit">
        send
      </Button>
      </div>

      
       </form>
     );
}
 
export default reduxForm({form: "addMessage"})(AddMessageForm);