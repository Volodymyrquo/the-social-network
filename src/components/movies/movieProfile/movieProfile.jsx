import React from 'react';
import {
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfileInfo from './profileInfo/ProfileInfo'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/profile-reducer';

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

const movieProfile = ({plot, userId, getUserProfile}) => {
    const classes = useStyles();

    useEffect(() => {
      getUserProfile(userId)
    }, [userId, getUserProfile])




    return ( 
<Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`, marginTop: "60px" }}
        >
         
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
               {plot}     
              
                </div>
              </Grid>
            </Grid>
           
          </Container>
          
        </Paper>     );
}

const mapStateToProps = (state) => ({
  plot: state.moviesPage.plot,

});

export default compose(
  connect(mapStateToProps, { getUserProfile}),
  withRouter,
  withAuthRedirect 
)(movieProfile);
