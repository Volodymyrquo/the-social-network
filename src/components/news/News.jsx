import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from '../Dialogs/node_modules/react-redux';
import { follow, unfollow, setCurrentPage } from '../../redux/news-reducer';
import { receiveNews } from '../../redux/news-reducer';
import Preloader from '../common/preloader/Preloader';
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';

import Article from './Article';
import { getNews } from '../../redux/news-selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const News = ({
  totalUsersCount,
  pageSize,
  currentPage,
  followingInProgress,
  follow,
  unfollow,
  onPageChanged,
  news,
  receiveNews,
  isFetching,
}) => {
  debugger;
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(currentPage);

  onPageChanged = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    receiveNews(pageNumber, pageSize);
  }, [pageNumber, pageSize, receiveNews]);

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
          {news.map((item) => (
            <Article
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
              item={item}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    news: getNews(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  receiveNews,
})(News);
