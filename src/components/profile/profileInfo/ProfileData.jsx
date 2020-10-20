import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ProfileContact from './ProfileContact';

const ProfileData = ({profile}) => {
    return ( 
        <Box>
 <Typography gutterBottom >
        <b><i>Name: </i></b>{" "}
        {profile.fullName}
      </Typography>
      <Typography>  
        <b><i>About me: </i></b>
        {profile.aboutMe}
</Typography>
<Typography>  
        <b><i>Looking for a job: </i></b>
        {profile.lookingForAJob? "yes" : "no"}
</Typography>
{profile.lookingForAJob && <Typography>
        <b><i>My professional skills: </i></b>
        {profile.lookingForAJobDescription}
</Typography>}
<Typography gutterBottom >
        <b><i>Contacts: </i></b>{" "}
        <Box pl={3}>
        {Object.keys(profile.contacts).map(item =>  <ProfileContact key={item} contactTitle={item} contactValue={profile.contacts[item]}   />)}
        </Box>
      </Typography>

</Box>
    )
}
 
export default ProfileData;