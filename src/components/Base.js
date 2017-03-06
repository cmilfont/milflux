import React from 'react';
import Register from 'components/Register';
import Profile from 'components/Profile';
import Login from 'components/Login';
import connect from 'lib/connect';

class Base extends React.Component {
  render() {
    const { user, navigation } = this.props;
    const navigationContainer = (navigation === 'register') ? (<Register />) : <Login />;
    const container = (user.get('uid')) ? <Profile /> : navigationContainer;
    return (
      <div className="mdc-layout">
        <main className="mdc-layout__content">
          {container}
        </main>
      </div>
    );
  }
}

export default connect(({ user, navigation }) => ({ user, navigation }), Base);
