import {
  GET_CONTACTS,
  CLEAR_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
  SET_CURRENT_CONTACT,
  CLEAR_CURRENT_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACT_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filteredContacts: null,
        currentContact: null,
        error: null
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: action.payload
      };
    case CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.contacts.filter(contact => {
          const filterRegex = new RegExp(`${action.payload}`, "gi"); // global, ignore casing
          return (
            contact.name.match(filterRegex) || contact.email.match(filterRegex)
          );
        })
      };
    case CLEAR_CONTACT_FILTER:
      return {
        ...state,
        filteredContacts: null
      };
    default:
      return state;
  }
};
