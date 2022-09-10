import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Stranger's Things!</h1>
      <button>
        <Link to="/posts/create-post">
          <Button variant="contained">Add a Post</Button>
        </Link>
      </button>
    </div>
  );
};

export default Home;
