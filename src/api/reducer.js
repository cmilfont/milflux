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
  errors: [],
  navigation: 'register',
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

    if (type === 'doLoginSuccess' || type === 'doRegisterSuccess') {
      return {
        navigation: 'login',
        errors: [],
        user: state.user.merge(payload),
      }
    }

    if (type === 'onSubmitFailure') {
      return {
        ...state,
        errors: [payload],
      }
    }

    if (type === 'onNavigate') {
      console.log(type, payload);
      return {
        ...state,
        navigation: payload,
      }
    }

  }

  return state;
};

export default reducer;
