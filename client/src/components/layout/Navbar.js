import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authorizedLinks = (
    <>
      <li>Hello, {user && user.name} </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt">Logout</i>
        </a>
      </li>
    </>
  );

  const unauthorizedLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>{" "}
      </li>
      <li>
        <Link to="/login">Login</Link>{" "}
      </li>
    </>
  );

  return (
    <nav>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>{" "}
        </li>
        {isAuthenticated ? authorizedLinks : unauthorizedLinks}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Kepper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
