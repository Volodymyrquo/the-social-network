const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const initialState = {
  dialogs: [
    { id: 1, name: "Andrew", photo: 573722 },
    { id: 2, name: "Veronica", photo: 793535 },
    { id: 3, name: "Peter", photo: 201065 },
    { id: 4, name: "Jessica", photo: 159213 },
    { id: 5, name: "Paula", photo: 1252081 },
  ],

  messages: [
    { id: 1, message: "Hi, how are you" },
    { id: 2, message: "Are you ok" },
    { id: 3, message: "Hi everyone" },
    { id: 4, message: "Yo yo yo" },
    { id: 5, message: "Uhooo" },
  ],
};


const dialodsReducer = (state = initialState, action) => {

  
  
  switch (action.type) {
    case SEND_MESSAGE: 
    return {
      ...state,
      messages: [...state.messages, { id: 6, message: action.newText } ]
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newText) => ({ type: SEND_MESSAGE, newText});


export default dialodsReducer;
