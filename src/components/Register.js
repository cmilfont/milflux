import React, { Component, PropTypes } from 'react';
import connect from 'lib/connect';
import FormFlux from 'components/Form';

class Register extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    errors: PropTypes.array,
  }

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { dispatch } = this.props;
    dispatch({type: 'doRegister'});
  }

  onChange = ({ target: { name, value } }) => {
    const { dispatch } = this.props;
    dispatch({ type: 'onChange', payload: { name, value } });
  }

  onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { dispatch } = this.props;
    dispatch({ type: 'onNavigate', payload: 'login' })
  }

  render() {
    const { user, errors } = this.props;
    return (
      <FormFlux
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        user={user}
        errors={errors}
        label="Registro"
        buttonLabel="Cadastrar"
      >
        <div className="navigation">
          <a href="/login" onClick={this.onClick}>Login</a>
        </div>
      </FormFlux>
    );
  }
}

export default connect(({ user, errors }) => ({ user, errors }), Register);
