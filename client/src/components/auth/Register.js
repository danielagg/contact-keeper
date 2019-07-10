import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { registerUser, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    // todo: backend should pass along id of error
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const { name, email, password, passwordConfirmation } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all mandatory fields", "danger");
    } else if (password !== passwordConfirmation) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div>
      <h1>Register Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">User name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />

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
          minLength="6"
        />

        <label htmlFor="passwordConfirmation">Password confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={onChange}
          required
          minLength="6"
        />

        <input
          type="submit"
          value="Register"
          className="btn-large teal darken-2 white-text"
          style={{ marginTop: "2rem" }}
        />
      </form>
    </div>
  );
};

export default Register;
