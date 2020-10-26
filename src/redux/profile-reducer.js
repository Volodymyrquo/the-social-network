import { usersAPI, profileAPI } from "../api/api";
const ADD_POST = "profile_reducer/ADD_POST";
const SET_USER_PROFILE="profile_reducer/SET_USER_PROFILE";
const SET_USER_STATUS="profile_reducer/SET_USER_STATUS";
const DELETE_POST="profile_reducer/DELETE_POST";
const SET_PHOTOS_SUCCESS="SET_PHOTOS_SUCCESS"

const initialState = {
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "It's my first post", likesCount: 15 },
    { id: 3, post: "O go go", likesCount: 20 },
  ],
  newPostText: "IT-kamasutra.com",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = { id: 4, post: action.body, likesCount: 0 };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_PHOTOS_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
   
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      };
   
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
   
      default:
      return state;
  }
};

export const addPostActionCreator = (body) => ({ type: ADD_POST, body });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
 profile
});
const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
 status
});
const setPhotosSuccess = (photos) => ({
  type: SET_PHOTOS_SUCCESS,
 photos
});

export const getUserProfile = (userId) => async (dispatch) => {

 const data = await usersAPI.getProfile(userId);
   
        dispatch(setUserProfile(data));
    

  }
export const getUserStatus = (userId) => async (dispatch) => {

  const status = await profileAPI.getStatus(userId);
   
        dispatch(setUserStatus(status));
    

  }
export const updateStatus = (status) => async (dispatch) => {

  const data = await profileAPI.updateStatus(status);
  
     if(!data.resultCode){
        dispatch(setUserStatus(status))};
    

  }

export const savePhoto = (file) => async (dispatch) => {

  const data = await profileAPI.savePhoto(file);
  
     if(!data.resultCode){
        dispatch(setPhotosSuccess(data.data.photos))};
    

  }

export const saveProfile = (profile) => async (dispatch) => {

  const data = await profileAPI.saveProfile(profile);
  debugger
     if(!data.resultCode){
       /*  dispatch(getUserProfile(data.data.userId)) */};
    

  }




export default profileReducer;
