import { usersAPI } from "../api/api";
import { moviesAPI } from "../api/apiIMDB";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_MOVIES = "SET_MOVIES";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
 movies: [], 
  pageSize: 15,
  totalMoviesCount: 250,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
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
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



export const receiveMovies = () => async (dispatch) => {debugger

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

export default moviesReducer;
