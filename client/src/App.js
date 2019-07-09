import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Contexts
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";

const App = () => {
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
                  <Route exact path="/" component={Home} />
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
