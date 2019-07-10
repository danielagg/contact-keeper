import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const contactContext = useContext(ContactContext);
  const { clearContacts } = contactContext;

  const onLogout = () => {
    clearContacts();
    logout();
  };

  const authorizedLinks = (
    <>
      <li style={{ padding: "0 0.5rem" }}>Hello, {user && user.name} </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i
            className="fas fa-sign-out-alt"
            style={{ fontSize: "1rem", padding: "0 0.4rem 0 1rem" }}
          />
          Logout
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
      <div className="nav-wrapper teal darken-2" style={{ padding: "0 3rem" }}>
        <Link to="/" className="brand-logo">
          <i className={icon} /> {title}
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          {isAuthenticated ? authorizedLinks : unauthorizedLinks}
        </ul>
      </div>
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
