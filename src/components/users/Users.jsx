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

 
    const photo = [
    1051,
    1194,
    1236,
    1238,
    159213,
    181462,
    201032,
    201065,
    213594,
    228643,
    273258,
    276754,
    302501,
    368775,
    573722,
    793535,
    895539,
    1252081,
    1390381,
  ];

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let defaultPage = Math.floor(pagesCount/2);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
 
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Pagination
        onChange={(event, page) => {
          props.onPageChanged(page);
        }}
        defaultPage={1}
        count={pagesCount}
        color="primary"
        boundaryCount={5}
        style={{marginBottom: "8px"}}
       
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
                {item.followed ? (
                  <Button
                    onClick={() => {
                      props.unfollow(item.id);
                    }}
                    size="small"
                    color="primary"
                  >
                    follow
                  </Button>
                ) : (
                  <Button
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
