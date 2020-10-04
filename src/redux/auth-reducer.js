import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { email, id, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { email, id, login } = data.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};
export const getLoginUserData = ({ email, password, rememberMe }) => async (
  dispatch
) => {
  const data = await authAPI.login({ email, password, rememberMe });
  if (!data.resultCode) {
    dispatch(getAuthUserData());
  } else {
    dispatch(stopSubmit("login", { _error: data.messages }));
  }
};

export const logoutUser = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (!data.resultCode) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
