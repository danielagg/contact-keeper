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
    ],
    filteredContacts: null,
    currentContact: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contactToAdd => {
    contactToAdd.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contactToAdd });
  };

  // Update contact
  const updateContact = contactToUpdate => {
    dispatch({ type: UPDATE_CONTACT, payload: contactToUpdate });
  };

  // Delete contact
  const deleteContact = contactIdToDelete => {
    dispatch({ type: DELETE_CONTACT, payload: contactIdToDelete });
  };

  // Set current contact
  const setCurrentContact = contact => {
    dispatch({ type: SET_CURRENT_CONTACT, payload: contact });
  };

  // Clear current contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT_CONTACT, payload: null });
  };

  // Filter contacts
  const filterContacts = query => {
    dispatch({ type: FILTER_CONTACTS, payload: query });
  };

  // Clear filter contacts
  const clearContactFilters = () => {
    dispatch({ type: CLEAR_CONTACT_FILTER, payload: null });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContact,
        updateContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearContactFilters
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
