import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

// Components
import ContactList from "../contacts/ContactList";
import EditContactItem from "../contacts/EditContactItem";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <EditContactItem />
      <hr />
      <ContactFilter />
      <hr />
      <ContactList />
      <hr />
    </div>
  );
};

export default Home;
