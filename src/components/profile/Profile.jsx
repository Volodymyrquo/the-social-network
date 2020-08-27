import React from 'react';
import {
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyPosts from '../profile/myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
  }
}));

const Profile = (props) => {
    const classes = useStyles();
   

    return ( 
<Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
         
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                <ProfileInfo />
                <MyPosts 
                posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}  
                 dispatch={props.dispatch} 
                 />
             
                </div>
              </Grid>
            </Grid>
           
          </Container>
          
        </Paper>     );
}
 
export default Profile;