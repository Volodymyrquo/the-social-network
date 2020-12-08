import React from 'react';
import Header from './Header';
import { connect } from '../Dialogs/node_modules/react-redux';
import { logoutUser } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
