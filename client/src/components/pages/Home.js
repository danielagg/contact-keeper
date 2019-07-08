import React from "react";

// Components
import ContactList from "../contacts/ContactList";
import AddContactItem from "../contacts/AddContactItem";

const Home = () => {
  return (
    <div>
      <AddContactItem />
      <hr />
      <ContactList />
      <hr />
    </div>
  );
};

export default Home;
