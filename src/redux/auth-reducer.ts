import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";


export type InitialStateType = typeof initialState;

const initialState = {
  email: null as string|null,
  id: null as number|null,
  login: null as string|null,
  isAuth: false,
  captchaUrl: null as string|null

};
const authReducer = (state = initialState, action: any):InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
   email:string|null;
   id:number|null;
   login:string|null;
   isAuth:boolean;
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;

}


export const setAuthUserData = (email:string|null, id:number|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { email, id, login, isAuth },
});


export const getAuthUserData = () => async (dispatch:any) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { email, id, login } = data.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

type GetLoginUserDataType = {
  email:string|null;
  password:string|null;
  rememberMe:boolean
}

export const getLoginUserData = ({ email, password, rememberMe}:GetLoginUserDataType) => async (
  dispatch:any
) => {
  const data = await authAPI.login({ email, password, rememberMe });
  if (!data.resultCode) {
    dispatch(getAuthUserData());
  } else {
    dispatch(stopSubmit("login", { _error: data.messages }));
  }
};

export const logoutUser = () => async (dispatch:any) => {
  const data = await authAPI.logout();
  if (!data.resultCode) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
