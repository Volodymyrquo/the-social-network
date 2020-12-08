import React, { useState } from 'react';
import {
  Typography,
  Button,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Fade,
  Backdrop,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 1),
  },
}));

const Movie = ({ item, receiveVideoUrl, videoUrl }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(true);
    receiveVideoUrl(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item key={item.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.image}
          title={item.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {item.fullTitle}
          </Typography>
          <Typography>{item.crew}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={NavLink}
            to={`/movieProfile/${item.id}`}
            size='small'
            color='primary'
            variant='contained'>
            About
          </Button>
          <div>
            <Button
              onClick={() => {
                handleOpen(item.id);
              }}
              size='small'
              color='secondary'
              variant='contained'>
              Trailer
            </Button>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}>
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id='transition-modal-title'>{item.title}</h2>
                  <ReactPlayer
                    width='75vw'
                    height='75vh'
                    controls
                    url={videoUrl}
                  />
                </div>
              </Fade>
            </Modal>
          </div>
        </CardActions>
        {/*   <CardActions>
                {item.followed ? (
                  <Button
                    disabled={followingInProgress.some((id) => id === item.id)}
                    onClick={() => {
                      unfollow(item.id);
                    }}
                    size="small"
                    color="primary"
                  >
                    unfollow
                  </Button>
                ) : (
                  <Button
                    disabled={followingInProgress.some((id) => id === item.id)}
                    onClick={() => {
                      follow(item.id);
                    }}
                    size="small"
                    color="primary"
                  >
                    follow
                  </Button>
                )}
              </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Movie;
