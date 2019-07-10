import React, { useReducer } from "react";
import Axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACT_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [],
    error: null,
    filteredContacts: null,
    currentContact: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = async contactToAdd => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await Axios.post("/api/contacts", contactToAdd, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
    }
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
        error: state.error,
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
