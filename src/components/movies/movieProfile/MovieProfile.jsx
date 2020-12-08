import React, { useEffect, useState } from 'react';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getMovieProfile } from '../../../redux/movies-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import Actor from './Actor';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(9),
  },
}));

const MovieProfile = ({
  image,
  plot,
  actorList,
  getMovieProfile,
  ...props
}) => {
  const classes = useStyles();
  const movieId = props.match.params.movieId;

  const [actorState, setActorState] = useState(actorList);

  useEffect(() => {
    setActorState(actorList);
  }, [actorList]);

  useEffect(() => {
    getMovieProfile(movieId);
  }, [movieId, getMovieProfile]);

  return (
    <Paper
      className={classes.mainFeaturesPost}
      style={{ backgroundImage: `url(${image})`, marginTop: '60px' }}>
      <Container fixed>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography> {plot} </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.cardGrid}
        maxWidth='md'
        style={{ marginTop: '80px' }}>
        <Grid container spacing={4}>
          {actorState.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Actor item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  image: state.moviesPage.image,
  plot: state.moviesPage.plot,
  actorList: state.moviesPage.actorList,
});

export default compose(
  connect(mapStateToProps, { getMovieProfile }),
  withAuthRedirect,
  withRouter
)(MovieProfile);
