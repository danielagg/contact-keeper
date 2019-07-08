import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACT_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        _id: "5d221ff8947ca732385e5591",
        name: "Sarah Smith",
        email: "sarah.smith@email.com",
        phone: "+36 20 121 4567",
        userId: "5d21fad24d9b9833008399bb",
        createdOn: "2019-07-07T16:38:16.627Z",
        __v: 0
      },
      {
        type: "professional",
        _id: "5d221ff8947ca732385e5592",
        name: "Joe Smith",
        email: "joe.smith@email.com",
        phone: "+36 12 121 4567",
        userId: "5d21fad24d9b9833008399bb",
        createdOn: "2019-07-07T16:38:16.627Z",
        __v: 0
      },
      {
        type: "personal",
        _id: "5d221ff8947ca732385e5593",
        name: "Dave Smith",
        email: "dave.smith@email.com",
        phone: "+36 13 121 4567",
        userId: "5d21fad24d9b9833008399bb",
        createdOn: "2019-07-07T16:38:16.627Z",
        __v: 0
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Update contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Filter contacts

  // Clear filter contacts

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
