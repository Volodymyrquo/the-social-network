import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

const state = {
    
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "It's my first post", likesCount: 15 },
    { id: 3, post: "O go go", likesCount: 20 },
  ],
};

it("length of post should incremented", () => {

  const action = addPostActionCreator("It-kamasutra.com");

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("message of post should be correct", () => {

  const action = addPostActionCreator("It-kamasutra.com");

  const newState = profileReducer(state, action);

  expect(newState.posts[3].post).toBe("It-kamasutra.com");
});

it("after deleting length of post should decremented", () => {

  const action = deletePost(1);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});


