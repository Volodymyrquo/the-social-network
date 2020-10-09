import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
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

const Actor = ({

   item
}) => {
  const classes = useStyles();


  return (

            <Card className={classes.card}>
              {item.image && (
               
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title={item.name}
                    alt={item.name}
                  />
             
              ) }
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>
                <Typography>{item.asCharacter}</Typography>
              </CardContent>
                  </Card>
   
  );
};

export default Actor;
