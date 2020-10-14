import { usersAPI } from "../api/api";
import { movieProfileAPI, moviesAPI, movieTrailer } from "../api/apiIMDB";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_MOVIES = "SET_MOVIES";
const SET_MOVIE_PROFILE = "SET_MOVIE_PROFILE";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_VIDEO_URL="SET_VIDEO_URL";

const initialState = {
 movies: [], 
 actorList:[],
  pageSize: 15,
  totalMoviesCount: 250,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  movieProfile: {},
  videoUrl: ""
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case SET_VIDEO_URL:
      return {
        ...state,
        videoUrl: action.videoUrl,
      };
    case SET_MOVIE_PROFILE:
      return {
        ...state,
        ...action.movieProfile,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching?
        [...state.followingInProgress, action.userId]:
      state.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setMovies = (movies) => ({ type: SET_MOVIES, movies });
export const setVideoUrl = (videoUrl) => ({ type: SET_VIDEO_URL, videoUrl });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });
const setMovieProfile = (movieProfile) => ({
  type: SET_MOVIE_PROFILE,
 movieProfile
});



export const receiveMovies = () => async (dispatch) => {

     dispatch(toggleIsFetching(true));
   const data = await moviesAPI();

        dispatch(toggleIsFetching(false));
       dispatch(setMovies(data.items));
  
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

  dispatch(toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId); 
  if (!data.resultCode) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
       
}
export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess);
}

export const getMovieProfile = (movieId) => async (dispatch) => { 

  const data = await movieProfileAPI(movieId);
    
         dispatch(setMovieProfile(data));
     
 
   }
export const receiveVideoUrl = (movieId) => async (dispatch) => {

  const data = await movieTrailer(movieId);
    
         dispatch(setVideoUrl(data.videoUrl));
     
 
   }
 

export default moviesReducer;
   