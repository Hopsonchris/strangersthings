import React from "react";
import { createPost } from "../api";

const CreatePost = (
  token,
  { title, description, price, location, willDeliver }
) => {
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver,
  };

  async function addPost() {
    const result = await createPost(token, newPost);
    console.log(result);
  }

  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <button onClick={() => addPost()}>Create a New Post</button>
  );
};

export default CreatePost;