
const store = { 
  _state:{
  profilePage: {
    posts: [
      { id: 1, post: "Hi, how are you", likesCount: 10 },
      { id: 2, post: "It's my first post", likesCount: 15 },
      { id: 3, post: "O go go", likesCount: 20 }
    ],
    newPostText: "IT-kamasutra.com",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Andrew", photo: 573722 },
      { id: 2, name: "Veronica", photo: 793535 },
      { id: 3, name: "Peter", photo: 201065 },
      { id: 4, name: "Jessica", photo: 159213 },
      { id: 5, name: "Paula", photo: 1252081 }
    ],

    messages: [
      { id: 1, message: "Hi, how are you" },
      { id: 2, message: "Are you ok" },
      { id: 3, message: "Hi everyone" },
      { id: 4, message: "Yo yo yo" },
      { id: 5, message: "Uhooo" }
    ]
  }},
  __callSubscriber() {
    console.log("State changed")
  },
  getState(){
return this._state;
  },
  subscribe(observer) {

    this.__callSubscriber = observer;
  },
  dispatch(action) {
if (action.type === 'ADD-POST') {
  let newPost = { id: 4, post: this._state.profilePage.newPostText, likesCount: 0 };
  
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = "";
  this.__callSubscriber(this._state);

} else if (action.type === 'UPDATE-NEW-POST-TEXT'){
  this._state.profilePage.newPostText = action.newText;
  this.__callSubscriber(this._state);

}

  }
    };


export default store;

window.store = store;
