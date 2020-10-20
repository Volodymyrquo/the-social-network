import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import Preloader from "../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import { photo } from "../../../assets/utilities/photoIndexes";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const classes = useStyles();

  const [uploadMode, setUploadMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const activateInputFile = () => {
    setUploadMode(true);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onEditModeChange = () => {

    setEditMode(true);

  }

  if (!profile) return <Preloader />;

  return (
    <Box className={classes.root}>
      <img
        src={
          profile.photos.large ||
          `https://source.unsplash.com/collection/${
            photo[Math.floor(Math.random() * photo.length)]
          }/800x600`
        }
        className={styles.photo}
        alt={profile.fullName}
        title={profile.fullName}
      />
      {isOwner && (
        <Fragment>
          <AddAPhotoIcon
            fontSize="large"
            color="secondary"
            onClick={activateInputFile}
          />
 
          <input
            type={"file"}
            style={!uploadMode ? { display: "none" } : null}
            onChange={onMainPhotoSelected}
          />
          
        </Fragment>
      )}
      <div>
      {isOwner && <Button onClick={onEditModeChange} variant="contained" color="secondary">Edit profile</Button>}

      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
     
     {editMode ? <ProfileDataForm profile={profile} /> : <ProfileData profile={profile} />}
      
      
    </Box>
  );
};

export default ProfileInfo;
