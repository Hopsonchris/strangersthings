import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../api";

const Posts = ({ posts, token }) => {
  return (
    <div id="outer div element">
      {posts.map((post) => {
        const { description, location, price, title, _id, isAuthor } = post;
        return (
          <Fragment>
            <div key={_id}>
              <h3>{title}</h3>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Location: {location}</p>
              {isAuthor ? (
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deletePost(token, _id);
                  }}
                >
                  Delete Post
                </button>
              ) : (
                <button>
                  <Link to={`/posts/${_id}`}>View Post</Link>
                </button>
              )}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Posts;
