const filter = store => (
  (action, reducer) => {
    const state = store.getState();

    if (action.type === 'onSubmit') {
      const { user } = state;
      const { email, password } = user.toJS();
      window.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(payload => {
          store.dispatch({ type: 'onSubmitSuccess', payload });
        })
        .catch(payload => {
          store.dispatch({ type: 'onSubmitFailure', payload })
        });
    }

    return reducer(state, action);
  }
);

export default filter;
