import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, IconButton, Paper, Typography } from "@material-ui/core";
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

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
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
  };
const onSubmit = (formData) => {

saveProfile(formData);
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

      {editMode ? (
        <Paper>
        <ProfileDataForm
          profile={profile}
          onSubmit={onSubmit}
        /></Paper>
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          onEditModeChange={onEditModeChange}
        />
      )}

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </Box>
  );
};

export default ProfileInfo;
