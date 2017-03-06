import { Map } from 'immutable';

const initialState = {
  user: Map({
    displayName: 'Christiano Milfont',
    email: '',
    photoURL: '',
    providerId:  '',
    uid: '',
    password: '',
  }),
  errors: []
};

const reducer = (state = initialState, action) => {

  if (action) {
    const { type, payload } = action;
    if (type === 'onChange') {
      const { name, value } = payload;
      return {
        ...state,
        user: state.user.merge({ [name]: value }),
      }
    }

    if (type === 'onSubmitFailure') {
      return {
        ...state,
        errors: [payload],
      }
    }

  }

  return state;
};

export default reducer;
