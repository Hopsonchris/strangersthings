import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Posts = ({ posts, token }) => {
  return (
    <div id="outer div element">
      {posts.map((post) => {
        const { description, location, price, title, _id, isAuthor } = post;
        return (
          <Fragment>
            <Card
              sx={{ maxWidth: 500 }}
              style={{
                backgroundColor: "lightBlue",
              }}
              key={_id}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.png/640px-Stranger_Things_logo.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h3>{title}</h3>
                  </Typography>
                  <Typography variant="h6" color="black">
                    <p>Description: {description}</p>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {isAuthor ? (
                <CardActions>
                  <Button
                    size="medium"
                    color="primary"
                    textDecoration="none"
                    onClick={(event) => {
                      event.preventDefault();
                      deletePost(token, _id);
                    }}
                  >
                    Delete Post
                  </Button>
                </CardActions>
              ) : (
                <CardActions>
                  <Button size="medium" color="primary">
                    <Link to={`/posts/${_id}`}>View Post</Link>
                  </Button>
                </CardActions>
              )}
            </Card>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Posts;
