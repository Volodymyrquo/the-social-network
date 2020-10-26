import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import ProfileContact from './ProfileContact';

const ProfileData = ({profile, onEditModeChange, isOwner}) => {
    return ( 
        <Box>
                <div>
      {isOwner && <Button onClick={onEditModeChange} variant="contained" color="secondary" gutterBottom>Edit profile</Button>}

      </div>
 <Typography gutterBottom >
        <b><i>Name: </i></b>{" "} </Typography>
        {profile.fullName}
     
      <Typography>  
        <b><i>About me: </i></b></Typography>
        {profile.aboutMe}

<Typography>  
        <b><i>Looking for a job: </i></b></Typography>
        {profile.lookingForAJob? "yes" : "no"}

{profile.lookingForAJob &&<div><Typography>
        <b><i>My professional skills: </i></b></Typography>
{profile.lookingForAJobDescription}</div> }

<Typography gutterBottom >
        <b><i>Contacts: </i></b>{" "}</Typography>
        <Box pl={3}>
        {Object.keys(profile.contacts).map(item =>  <ProfileContact key={item} contactTitle={item} contactValue={profile.contacts[item]}   />)}
        </Box>
      

</Box>
    )
}
 
export default ProfileData;