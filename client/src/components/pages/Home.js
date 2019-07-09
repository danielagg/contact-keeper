import React from "react";

// Components
import ContactList from "../contacts/ContactList";
import EditContactItem from "../contacts/EditContactItem";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
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
