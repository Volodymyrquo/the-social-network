import { Typography } from '@material-ui/core';
import React from 'react';

const ProfileContact = ({contactTitle, contactValue}) => {
    return ( 
        <Typography gutterBottom >
        <b><i>{contactTitle}: </i></b>{" "}
        {contactValue}
      </Typography>
     );
}
 
export default ProfileContact;