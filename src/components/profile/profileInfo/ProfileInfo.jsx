import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "50ch",
          },
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  
    
const ProfileInfo = (props) => {
    const classes = useStyles();
    return ( 
        <Box className={classes.root} >
            <Typography gutterBottom >Ava + description</Typography>

        </Box>
        
     );
}
 
export default ProfileInfo;