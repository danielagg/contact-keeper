import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { email, password } = user;
  const { setAlert } = alertContext;
  const { login, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    // todo: backend should pass along id of error
    if (error === "Cannot login") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (email === "" || password === "") {
      setAlert("Please enter all mandatory fields", "danger");
    } else {
      login({ email, password });
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
