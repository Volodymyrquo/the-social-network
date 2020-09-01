const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const initialState = {
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "It's my first post", likesCount: 15 },
    { id: 3, post: "O go go", likesCount: 20 },
  ],
  newPostText: "IT-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = { id: 4, post: state.newPostText, likesCount: 0 };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
