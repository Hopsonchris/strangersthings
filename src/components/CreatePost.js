import React, { Fragment } from "react";
import { TextField } from "@mui/material";
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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // handleSubmit();
      }}
    >
      <Fragment>
        <TextField
          id="outlined-title-input"
          label="Title"
          type="title"
          autoComplete="current-title"
          onChange={(event) => title(event.target.value)}
        />
        <br />
        <TextField
          id="outlined-description-input"
          label="Description"
          type="description"
          autoComplete="current-description"
          onChange={(event) => description(event.target.value)}
        />
        <br />
        <TextField
          id="outlined-price-input"
          label="Price"
          type="price"
          autoComplete="current-price"
          onChange={(event) => price(event.target.value)}
        />
        <br />
        <TextField
          id="outlined-location-input"
          label="Location"
          type="location"
          autoComplete="current-location"
          onChange={(event) => location(event.target.value)}
        />
        <br />
        <TextField
          id="outlined-willDeliver-input"
          label="WillDeliver"
          type="willDeliver"
          autoComplete="current-willDeliver"
          onChange={(event) => willDeliver(event.target.value)}
        />
      </Fragment>
      <br />
      <button onClick={() => addPost()}>Create a New Post</button>
    </form>
  );
};

export default CreatePost;
