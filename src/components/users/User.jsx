import React from 'react';
import {
  Typography,
  Button,
  CardActions,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { photo } from '../../assets/utilities/photoIndexes';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const User = ({ followingInProgress, follow, unfollow, item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {item.photos.small ? (
        <NavLink to={`/profile/${item.id}`}>
          <CardMedia
            className={classes.cardMedia}
            image={item.photos.small}
            title={item.name}
          />
        </NavLink>
      ) : (
        <NavLink to={`/profile/${item.id}`}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://source.unsplash.com/collection/${
              photo[Math.floor(Math.random() * photo.length)]
            }/800x600`}
            title='unsplash'
          />
        </NavLink>
      )}
      <CardContent className={classes.cardContent}>
        <Typography variant='h5' gutterBottom>
          {item.name}
        </Typography>
        <Typography>{item.status}</Typography>
      </CardContent>
      <CardActions>
        {item.followed ? (
          <Button
            disabled={followingInProgress.some((id) => id === item.id)}
            onClick={() => {
              unfollow(item.id);
            }}
            size='small'
            color='primary'>
            unfollow
          </Button>
        ) : (
          <Button
            disabled={followingInProgress.some((id) => id === item.id)}
            onClick={() => {
              follow(item.id);
            }}
            size='small'
            color='primary'>
            follow
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default User;
