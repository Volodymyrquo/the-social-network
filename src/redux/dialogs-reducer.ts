const SEND_MESSAGE = "SEND-MESSAGE";
type DialogType = {
  id:number;
  name:string;
  photo:number;
}
type MessageType = {
  id: number;
  message: string;
}
export type InitialStateType = typeof initialState;


const initialState = {
  dialogs: [
    { id: 1, name: "Andrew", photo: 573722 },
    { id: 2, name: "Veronica", photo: 793535 },
    { id: 3, name: "Peter", photo: 201065 },
    { id: 4, name: "Jessica", photo: 159213 },
    { id: 5, name: "Paula", photo: 1252081 },
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: "Hi, how are you" },
    { id: 2, message: "Are you ok" },
    { id: 3, message: "Hi everyone" },
    { id: 4, message: "Yo yo yo" },
    { id: 5, message: "Uhooo" },
  ] as Array<MessageType>,
};


const dialodsReducer = (state = initialState, action: GetSendMessageCreatorActionType): InitialStateType => {


  switch (action.type) {
    case SEND_MESSAGE:
    return {
      ...state,
      messages: [...state.messages, { id: 6, message: action.newText } ],
    }
    default:
      return state;
  }
};
type GetSendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newText: string
}
export const sendMessageCreator = (newText:string):GetSendMessageCreatorActionType => ({ type:  SEND_MESSAGE, newText});


export default dialodsReducer;
