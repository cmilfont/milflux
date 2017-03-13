import React, { PropTypes } from 'react';

class form extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    user: PropTypes.object,
    errors: PropTypes.array,
    buttonLabel: PropTypes.string,
    label: PropTypes.string,
  }

  render() {
    const { onSubmit, onChange, user, errors, buttonLabel, children, label } = this.props;
    const errorContainer = errors.map(({ code, message }) => (
      <p key={`error-${code}`}>{code} - {message}</p>
    ));
    const containerChild = (children) ? children : '';

    return (
      <div className="mdc-card Register">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">{label}</h1>
        </section>
        <section className="mdc-card__supporting-text">
          <div className="errors">{errorContainer}</div>
          <form onSubmit={onSubmit}>
            <div className="mdc-textfield mdc-textfield--fullwidth">
              <input id="email" onChange={onChange} value={user.get('email')} className="mdc-textfield__input" name="email" type="text" />
              <label htmlFor="email" className="mdc-textfield__label">Email</label>
            </div>
            <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
            <div className="mdc-textfield mdc-textfield--fullwidth">
              <input id="password" onChange={onChange} value={user.get('password')} className="mdc-textfield__input" name="password" type="password"/>
              <label htmlFor="password" className="mdc-textfield__label">Password</label>
            </div>
            <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
          </form>
        </section>
        <section className="mdc-card__actions">
          <button
            onClick={onSubmit}
            className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface"
          >
            {buttonLabel}
          </button>
          {containerChild}
        </section>
      </div>
    );
  }
}

export default form;
