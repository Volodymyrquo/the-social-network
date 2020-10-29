import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { reduxForm, Field } from "redux-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
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
          color="secondary"
          labelPlacement="start"
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

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  const classes = useStyles();
  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
        <Field
          name="fullName"
          component={renderTextField}
          label="Full Name"
          variant="outlined"
          validate={[]}
        />
      </div>
      <div>
        <Field
          name="aboutMe"
          component={renderTextField}
          label="About me"
          variant="outlined"
          validate={[]}
        />
      </div>
      <div>
        <Field
          name="lookingForAJob"
          component={renderCheckbox}
          label="Looking for a job"
        />
      </div>
      <div>
        <Field
          name="lookingForAJobDescription"
          component={renderTextField}
          label="My professional skills"
          variant="outlined"
          multiline
          validate={[]}
        />
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((item) => (
          <Field
            key={item}
            name={`contacts.${item}`}
            component={renderTextField}
            label={item}
            variant="outlined"
            validate={[]}
          />
        ))}
      </div>

      {error && (
        <Typography color="secondary" gutterBottom>
          {error}
        </Typography>
      )}

      <div>
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "edit-profile" })(ProfileDataForm);
