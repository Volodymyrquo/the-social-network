import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
 componentDidMount() {debugger;
   let userId = this.props.match.params.userId;
   if(!userId){
     userId = 8548;
   }
   
  axios
  .get(
    `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
  )
  .then((response) => {
       this.props.setUserProfile(response.data);
   
  });
 }
  render() { 
    return <Profile {...this.props} profile={this.props.profile} />  ;
  }
}

const mapStateToProps = (state) =>({
  profile: state.profilePage.profile
});
 
export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer));