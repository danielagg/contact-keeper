import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAuthToken } from "./utils/axiosWrapper";

// Material style
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// Contexts
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";

// Components
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
