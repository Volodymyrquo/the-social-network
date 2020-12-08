import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  receiveMovies,
  receiveVideoUrl,
} from '../../redux/movies-reducer';
import Preloader from '../common/preloader/Preloader';
import {
  getCurrentPage,
  getPageSize,
  getTotalMoviesCount,
  getIsFetching,
  getFollowingInProgress,
  getMovies,
  getVideoUrl,
} from '../../redux/movies-selectors';
import Movie from './Movie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Movies = ({
  totalMoviesCount,
  pageSize,
  currentPage,
  followingInProgress,
  follow,
  unfollow,
  onPageChanged,
  movies,
  receiveMovies,
  isFetching,
  videoUrl,
  receiveVideoUrl,
}) => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(currentPage);

  onPageChanged = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    receiveMovies(pageNumber, pageSize);
  }, [pageNumber, pageSize, receiveMovies]);

  let pagesCount = Math.ceil(totalMoviesCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const pageMovies = movies.slice(
    pageNumber * pageSize - pageSize,
    pageNumber * pageSize
  );

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Container
        className={classes.cardGrid}
        maxWidth='md'
        style={{ marginTop: '80px' }}>
        <Pagination
          onChange={(event, page) => {
            onPageChanged(page);
          }}
          defaultPage={1}
          count={pagesCount}
          color='primary'
          boundaryCount={5}
          style={{ marginBottom: '16px' }}
        />
        <Grid container spacing={4}>
          {pageMovies.map((item) => (
            <Movie
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
              item={item}
              receiveVideoUrl={receiveVideoUrl}
              videoUrl={videoUrl}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    videoUrl: getVideoUrl(state),

    pageSize: getPageSize(state),
    totalMoviesCount: getTotalMoviesCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  receiveMovies,
  receiveVideoUrl,
})(Movies);
