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
import * as axios from "axios";
import { useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

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

const Users = (props) => {debugger
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
        props.setTotalUsersCount(response.data.totalCount);
      });
  }, []);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`
      )
      .then((response) => {
        props.setUsers(response.data.items);
        
      });
  };

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
  debugger;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Pagination
        onChange={(event, page) => {
          onPageChanged(page);
        }}
        defaultPage={defaultPage}
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
                <CardMedia
                  className={classes.cardMedia}
                  image={item.photos.small}
                  title={item.name}
                />
              ) : (
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/collection/${
                    photo[Math.floor(Math.random() * photo.length)]
                  }/800x600`}
                  title={item.name}
                />
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
