import React, { PropTypes } from 'react';
import connect from 'lib/connect';

class Profile extends React.Component {

  static propTypes = {
    user: PropTypes.object,
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        Olá {user.get('email')}, seja bem vindo
      </div>
    );
  }
}

export default connect(({ user }) => ({ user }), Profile);
