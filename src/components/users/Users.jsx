import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  CardActions,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { NavLink } from "react-router-dom";
import { photo } from "../../assets/utilities/photoIndexes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      marginTop: theme.spacing(2),
      
    },
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const Users = (props) => {
  const classes = useStyles();


  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: "80px"}}>
      <Pagination
        onChange={(event, page) => {
          props.onPageChanged(page);
        }}
        defaultPage={1}
        count={pagesCount}
        color="primary"
        boundaryCount={5}
        style={{marginBottom: "16px"}}
      />
      <Grid container spacing={4}>
        {props.users.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              {item.photos.small ? (
                <NavLink to={`/profile/${item.id}`}><CardMedia
                  className={classes.cardMedia}
                  image={item.photos.small}
                  title={item.name}
                /></NavLink>
              ) : (<NavLink to={`/profile/${item.id}`}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/collection/${
                    photo[Math.floor(Math.random() * photo.length)]
                  }/800x600`}
                  title="unsplash"
                /></NavLink>
              )}
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>
                <Typography>{item.status}</Typography>
              </CardContent>
              <CardActions>
                {
                item.followed ? (
                  <Button
                  disabled={props.followingInProgress.some(id => id === item.id)}
                    onClick={() => {
                      props.unfollow(item.id)
                    }}
                    size="small"
                    color="primary"
                  >
                    follow
                  </Button>
                ) : (
                  <Button
                  disabled={props.followingInProgress.some(id => id === item.id)}
                    onClick={() => {
props.follow(item.id);
                    }}
                    size="small"
                    color="primary"
                  >
                    unfollow
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Users;
