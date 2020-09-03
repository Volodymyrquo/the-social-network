import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';
import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css'

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
    if(!props.profile) {
      return <Preloader />
    }
    const photo = [
      1051,
      1194,
      1236,
      1238,
      159213,
      181462,
      201032,
      201065,
      213594,
      228643,
      273258,
      276754,
      302501,
      368775,
      573722,
      793535,
      895539,
      1252081,
      1390381,
    ];
  
    return ( 
        <Box className={classes.root} >
          {props.profile.photos.small?
          <img src={props.profile.photos.small}
           className={styles.photo} alt={props.profile.fullName} title={props.profile.fullName} />
           :
           <img
                     
                        src={`https://source.unsplash.com/collection/${
                          photo[Math.floor(Math.random() * photo.length)]
                        }/800x600`}
                        className={styles.photo}
                        alt={props.profile.fullName}
                        title="unsplash"
                      />}
            <Typography gutterBottom ><b><i>Name: </i></b> {props.profile.fullName}</Typography>

        </Box>
        
     );
}
 
export default ProfileInfo;