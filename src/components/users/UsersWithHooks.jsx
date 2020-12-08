import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import User from './User';
import { connect } from '../Dialogs/node_modules/react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  receiveUsers,
} from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import {
  getUsers,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  followingInProgress,
  follow,
  unfollow,
  onPageChanged,
  users,
  receiveUsers,
  isFetching,
}) => {
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(currentPage);

  onPageChanged = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    receiveUsers(pageNumber, pageSize);
  }, [pageNumber, pageSize, receiveUsers]);

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
          {users.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <User
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
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
  receiveUsers,
})(Users);
