import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




const mapStateToProps = (state) => {
 return {
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  
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

 export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
   )
   (Dialogs);