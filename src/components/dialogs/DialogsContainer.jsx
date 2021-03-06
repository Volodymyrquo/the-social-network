import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (newText) => {
      dispatch(sendMessageCreator(newText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
