import React, { Component, PropTypes } from 'react';
import connect from 'lib/connect';

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
    dispatch({type: 'onSubmit'});
  }

  onChange = ({ target: { name, value } }) => {
    const { dispatch } = this.props;
    dispatch({ type: 'onChange', payload: { name, value } })
  }

  render() {
    const { user, errors } = this.props;
    const errorContainer = errors.map(({ code, message }) => (
      <div key={`error-${code}`}>{code} - {message}</div>
    ));

    return (
      <div className="mdc-card Register">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">Cadastro</h1>
        </section>
        <section className="mdc-card__supporting-text">
          <div className="errors">{errorContainer}</div>
          <form onSubmit={this.onSubmit}>
            <div className="mdc-textfield mdc-textfield--fullwidth">
              <input id="email" onChange={this.onChange} value={user.get('email')} className="mdc-textfield__input" name="email" type="text" />
              <label htmlFor="email" className="mdc-textfield__label">Email</label>
            </div>
            <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
            <div className="mdc-textfield mdc-textfield--fullwidth">
              <input id="password" onChange={this.onChange} value={user.get('password')} className="mdc-textfield__input" name="password" type="password"/>
              <label htmlFor="password" className="mdc-textfield__label">Password</label>
            </div>
            <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
          </form>
        </section>
        <section className="mdc-card__actions">
          <button
            onClick={this.onSubmit}
            className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface"
          >
            Cadastrar
          </button>
        </section>
      </div>
    );
  }
}

export default connect(({ user, errors }) => ({ user, errors }), Register);
