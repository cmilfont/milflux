const filter = store => (
  (action, reducer) => {
    const state = store.getState();

    if (action.type === 'doLogin') {
      const { user } = state;
      const { email, password } = user.toJS();
      window.firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(payload => {
          console.log('user', payload);
          store.dispatch({ type: 'doLoginSuccess', payload });
        })
        .catch(payload => (store.dispatch({ type: 'onSubmitFailure', payload })));
    }

    if (action.type === 'doRegister') {
      const { user } = state;
      const { email, password } = user.toJS();
      window.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(payload => {
          store.dispatch({ type: 'doRegisterSuccess', payload });
        })
        .catch(payload => (store.dispatch({ type: 'onSubmitFailure', payload })));
    }

    return reducer(state, action);
  }
);

export default filter;
