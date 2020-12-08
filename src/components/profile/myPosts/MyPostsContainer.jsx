import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from '../../Dialogs/node_modules/react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (body) => {
    dispatch(addPostActionCreator(body));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
