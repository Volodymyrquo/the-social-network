import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  


  const activateEditMode = () => {
    setEditMode(true);
  }
  
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  }
  
  return (
    <div>
      {!editMode && (
        <Typography onDoubleClick={activateEditMode}>
          {props.status || "This user does not have any status"}
        </Typography>
      )}
      {editMode && (
        <Paper>
          <form noValidate autoComplete="off">
            <TextField
              autoFocus="true"
           onBlur={deactivateEditMode}
           onChange={onStatusChange}
              id="outlined-basic"
              label="My status"
              variant="outlined"
              value={status}
            />
          </form>
        </Paper>
      )}{" "}
    </div>
  );
};

export default ProfileStatusWithHooks;
