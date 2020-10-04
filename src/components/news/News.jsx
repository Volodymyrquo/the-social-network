import React from "react";
import {
  Container,
  Grid,
 } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Article from "./Article";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const News = ({
  totalUsersCount,
  pageSize,
  followingInProgress,
  follow,
  unfollow,
  onPageChanged,
  users
}) => {
  const classes = useStyles();

 /*  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  } */

  return (
    <Container
      className={classes.cardGrid}
      maxWidth="md"
      style={{ marginTop: "80px" }}
    >
     {/*  <Pagination
        onChange={(event, page) => {
          onPageChanged(page);
        }}
        defaultPage={1}
        count={pagesCount}
        color="primary"
        boundaryCount={5}
        style={{ marginBottom: "16px"}}
      /> */}
      <Grid container spacing={4}>
        {users.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
          <Article 
  followingInProgress={followingInProgress}
  follow={follow}
  unfollow={unfollow}
  item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};



 
export default News;