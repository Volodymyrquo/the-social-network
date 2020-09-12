import React from "react";
import Post from "./post/Post";
import AddPostForm from "./post/AddPostForm";




  const MyPosts = (props) => {


  const postsElements = props.posts.map(item => <Post message={item.post} key={item.id} />);

  return (
         <div>
 <AddPostForm onSubmit={(value) => {props.addPost(value.addNewPost)}} />
       {postsElements}
         </div>
    
  );
};

export default MyPosts;
