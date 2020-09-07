import { authAPI } from "../api/api";

const SET_USER_DATA="SET_USER_DATA";

const initialState = {
  email: null,
  id: null,
login: null,
isAuth: false
};


const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA: 
     return {
      ...state,
      ...action.data,
      isAuth: true
      
     }
    default:
      return state;
  }
};


export const setAuthUserData = (email,id,login) => ({
  type: SET_USER_DATA,
  data:{email,id,login}
});

export const getAuthUserData = () => (dispatch) => {
 
    authAPI.me()
.then(data =>
       { if(data.resultCode === 0)
        {
            let {email,id,login} = data.data;
          dispatch(setAuthUserData(email,id,login));
      }})

  }


export default authReducer;
