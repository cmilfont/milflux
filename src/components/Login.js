import React, { PropTypes } from 'react';
import connect from 'lib/connect';
import FormFlux from 'components/Form';

class Login extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    errors: PropTypes.array,
  }

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { dispatch } = this.props;
    dispatch({type: 'doLogin'});
  }

  onChange = ({ target: { name, value } }) => {
    const { dispatch } = this.props;
    dispatch({ type: 'onChange', payload: { name, value } })
  }

  render() {
    const { user, errors } = this.props;
    return (
      <FormFlux
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        user={user}
        errors={errors}
        label="Login"
        buttonLabel="Entrar"
      />
    );
  }
}

export default connect(({ user, errors }) => ({ user, errors }), Login);
