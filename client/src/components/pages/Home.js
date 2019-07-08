import React from "react";

// Components
import ContactList from "../contacts/ContactList";
import EditContactItem from "../contacts/EditContactItem";

const Home = () => {
  return (
    <div>
      <EditContactItem />
      <hr />
      <ContactList />
      <hr />
    </div>
  );
};

export default Home;
