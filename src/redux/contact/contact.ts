const ADD_CONTACT = 'contact/contact/ADD_CONTACT';
const DELETE_CONTACT = 'contact/contact/DELETE_CONTACT';
const EDIT_CONTACT = 'contact/contact/EDIT_CONTACT';

interface IInitialStateObj {
  id: string;
  name: string;
  number: string;
}

export interface IPayload {
  id: string;
  name: string;
  number: string;
}

interface IAction {
  type: string;
  payload: IPayload;
}

const initialState: IInitialStateObj[] = [];

export const addContact = (payload: IPayload) => ({
  type: ADD_CONTACT,
  payload,
});

export const deleteContact = (payload: IPayload) => ({
  type: DELETE_CONTACT,
  payload,
});

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

export default contactReducer;
