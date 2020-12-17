import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_COUNT="SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";



const initialState = {
  users: [] as Array<UserType>,
  pageSize: 40,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number> // Array of users ids
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action:any):InitialStateType => {
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
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
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

type FollowSuccessActionType = { type: typeof FOLLOW; userId:number; };
type UnfollowSuccessActionType = { type: typeof UNFOLLOW; userId:number; };
type SetUsersActionType = { type: typeof SET_USERS; users:Array<UserType> };
type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE; currentPage:number; };
type SetTotalUsersCountActionType = { type: typeof SET_TOTAL_COUNT; totalCount:number; };
type ToggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING; isFetching:boolean; };
type ToggleIsFollowingProgressActionType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS; isFetching:boolean; userId:number; };

export const followSuccess = (userId:number):FollowSuccessActionType=> ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });
export const setUsers = (users:Array<UserType>):SetUsersActionType => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage:number):SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount:number):SetTotalUsersCountActionType => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching:boolean, userId:number):ToggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });



export const receiveUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {

     dispatch(toggleIsFetching(true));
   const data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFetching(false));
       dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod:any, actionCreator:any) => {

  dispatch(toggleIsFollowingProgress(true, userId));
  const data = await apiMethod(userId); 
  if (!data.resultCode) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
}

export const unfollow = (userId:number) => async (dispatch:any) => {
  followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
       
}
export const follow = (userId:number) => async (dispatch:any) => {
  followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess);
}

export default usersReducer;
