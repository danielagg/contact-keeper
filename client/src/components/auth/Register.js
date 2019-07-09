import React, { useState } from "react";

const Register = () => {
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
  };

  return (
    <div>
      <h1>Register Account</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">User name</label>
        <input type="text" name="name" value={name} onChange={onChange} />

        <label htmlFor="email">Email address</label>
        <input type="email" name="email" value={email} onChange={onChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />

        <label htmlFor="passwordConfirmation">Password confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={onChange}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
