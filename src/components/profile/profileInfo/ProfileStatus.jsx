import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography } from '@material-ui/core';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
   
    activateEditMode = () => {
      this.setState(
        {
          editMode: true
        }
      )
    }

    deactivateEditMode = () => {
      this.setState(
        {
          editMode: false
        }
       
      );
      this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
    this.setState(
      {
        status: event.currentTarget.value,
      }
    )
  }
  
  componentDidUpdate(prevProps, prevState) {
if(prevProps.status !== this.props.status) {

  this.setState(
    {
      status: this.props.status
    }
  )
}
  }
  render () { return ( 
        <div>
{   !this.state.editMode && <Typography onDoubleClick={this.activateEditMode} >{this.props.status || 'This user does not have any status'}</Typography>
}         
{   this.state.editMode && <Paper>
            <form  noValidate autoComplete="off" >
      <TextField autoFocus="true" onChange={this.onStatusChange} onBlur={this.deactivateEditMode} id="outlined-basic" label="My status"
       variant="outlined" value={this.state.status}/>
    </form>
    </Paper>
}        </div>
     );}
}
 
export default ProfileStatus;