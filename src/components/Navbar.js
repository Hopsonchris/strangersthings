import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav>
        <Link to="/">
          <Button href="/" variant="contained">
            Home
          </Button>
        </Link>
        <Link to="/Posts">
          <Button href="/" variant="contained">
            Posts
          </Button>
        </Link>
        <Link to="/Profile">
          <Button href="/" variant="contained">
            Profile
          </Button>
        </Link>

        {token ? (
          <Link to="/" onClick={() => logout()}>
            <Button href="/" variant="contained">
              Logout
            </Button>
          </Link>
        ) : (
          <Fragment>
            <Link to="/Register">
              <Button href="/" variant="contained">
                Register
              </Button>
            </Link>
            <Link to="/Login">
              <Button href="/" variant="contained">
                Login
              </Button>
            </Link>
          </Fragment>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
