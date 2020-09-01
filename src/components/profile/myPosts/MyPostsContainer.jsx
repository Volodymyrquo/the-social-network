import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => (
  {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText

  }
)

const mapDispatchToProps = (dispatch) => (
  {
  addPost: () => {
   dispatch(addPostActionCreator());
  },
  onPostChange: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  }
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
