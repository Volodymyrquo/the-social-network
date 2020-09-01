import { debounce } from "@material-ui/core";

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
  newMessageBody: "Enter your message",
};


const dialodsReducer = (state = initialState, action) => {

  
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
     return {
      ...state,
      newMessageBody: action.body
     }
    case SEND_MESSAGE: 
    return {
      ...state,
      newMessageBody: "",
      messages: [...state.messages, { id: 6, message: state.newMessageBody } ]
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialodsReducer;
