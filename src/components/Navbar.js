import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Posts">Posts</Link>
        <Link to="/Profile">Profile</Link>

        {token ? (
          <Link to="/" onClick={() => logout()}>
            Logout
          </Link>
        ) : (
          <Fragment>
            <Link to="/Register">Register</Link>
            <Link to="/Login">Login</Link>
          </Fragment>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
