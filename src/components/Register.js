import React, { Fragment, useState } from "react";
import { TextField } from "@mui/material";
import { registerUser } from "../api";

const Register = ({ setToken, navigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const results = await registerUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate("/Profile");
    } else {
      console.log(results.error.message);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Fragment>
        <TextField
          id="outlined-username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Fragment>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
