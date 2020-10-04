import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';
import Preloader from '../../common/preloader/Preloader';
import styles from './ProfileInfo.module.css';
import { photo } from '../../../assets/utilities/photoIndexes';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


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
  
    
const ProfileInfo = ({profile, status, updateStatus}) => {
   
  const classes = useStyles();
  
  if(!profile)  return <Preloader />
    
  
    return ( 
        <Box className={classes.root} >
          {profile.photos.small?
          <img src={profile.photos.large}
           className={styles.photo} alt={profile.fullName} title={profile.fullName} />
           :
           <img
                     
                        src={`https://source.unsplash.com/collection/${
                          photo[Math.floor(Math.random() * photo.length)]
                        }/800x600`}
                        className={styles.photo}
                        alt={profile.fullName}
                        title="unsplash"
                      />}
                      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <Typography gutterBottom ><b><i>Name: </i></b> {profile.fullName}</Typography>

        </Box>
        
     );
}
 
export default ProfileInfo;