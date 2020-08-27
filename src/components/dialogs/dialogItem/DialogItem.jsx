import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

const DialogItem = (props) => {

    const labelId = `checkbox-list-secondary-label-${props.name}`;

    return ( 
     
       <ListItem key={props.id} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${props.name}`}
            src={`https://source.unsplash.com/collection/${props.photo}/800x600`}
          />
        </ListItemAvatar>
        <ListItemText id={labelId} primary={props.name} />
                  </ListItem> 
                  );
}
 
export default DialogItem;