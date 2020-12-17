import { usersAPI, profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";
const ADD_POST = "profile_reducer/ADD_POST";
const SET_USER_PROFILE = "profile_reducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profile_reducer/SET_USER_STATUS";
const DELETE_POST = "profile_reducer/DELETE_POST";
const SET_PHOTOS_SUCCESS = "SET_PHOTOS_SUCCESS";



const initialState = {
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "It's my first post", likesCount: 15 },
    { id: 3, post: "O go go", likesCount: 20 },
  ] as Array<PostType>,
  newPostText: "IT-kamasutra.com" as string,
  profile: null as null | ProfileType ,
  status: "" ,
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any):initialStateType => {
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
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
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

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  body: string;
}
type DeletePostActionType = {
  type: typeof DELETE_POST;
   postId: number;
}
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile:ProfileType;
}

type SetUserStatusActionType = {
  type: typeof SET_USER_STATUS;
  status: string;
}
type SetPhotosSuccessActionType = {
  type: typeof SET_PHOTOS_SUCCESS;
  photos:PhotosType;

}
export const addPostActionCreator = (body:string):AddPostActionCreatorType => ({ type: ADD_POST, body });
export const deletePost = (postId:number):DeletePostActionType => ({ type: DELETE_POST, postId });

const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});
const setUserStatus = (status:string):SetUserStatusActionType => ({
  type: SET_USER_STATUS,
  status,
});
const setPhotosSuccess = (photos:PhotosType):SetPhotosSuccessActionType => ({
  type: SET_PHOTOS_SUCCESS,
  photos,
});

export const getUserProfile = (userId:number) => async (dispatch:any) => {
  const data = await usersAPI.getProfile(userId);

  dispatch(setUserProfile(data));
};
export const getUserStatus = (userId:number) => async (dispatch:any) => {
  const status = await profileAPI.getStatus(userId);

  dispatch(setUserStatus(status));
};
export const updateStatus = (status:string) => async (dispatch:any) => {
  const data = await profileAPI.updateStatus(status);

  if (!data.resultCode) {
    dispatch(setUserStatus(status));
  }
};

export const savePhoto = (file:any) => async (dispatch:any) => {
  const data = await profileAPI.savePhoto(file);

  if (!data.resultCode) {
    dispatch(setPhotosSuccess(data.data.photos));
  }
};

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState: any) => {
  const userId = getState().auth.id;
  const data = await profileAPI.saveProfile(profile);

  if (!data.resultCode) {
    dispatch(getUserProfile(userId));
  }
};

export default profileReducer;
