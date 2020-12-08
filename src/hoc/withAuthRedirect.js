import React from 'react';
import { Redirect } from '../components/Header/node_modules/react-router-dom';
import { connect } from '../components/Dialogs/node_modules/react-redux';

let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    debugger;
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
