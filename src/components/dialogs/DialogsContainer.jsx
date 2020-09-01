import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";




const mapStateToProps = (state) => {
 return {
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs
  }

}
const mapDispatchToProps = (dispatch) => {
 return {
  onSendMessageClick: () => {dispatch(sendMessageCreator())},
  onNewMessageChange: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
    }
  }
}



 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
 export default DialogsContainer;