import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';
import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { photo } from '../../../assets/utilities/photoIndexes';


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
  
  if(!props.profile)  return <Preloader />
    
  
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
                      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <Typography gutterBottom ><b><i>Name: </i></b> {props.profile.fullName}</Typography>

        </Box>
        
     );
}
 
export default ProfileInfo;