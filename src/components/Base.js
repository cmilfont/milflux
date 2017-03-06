import React from 'react';
import Register from 'components/Register';

class Base extends React.Component {
  render() {

    return (
      <div className="mdc-layout">
        <main className="mdc-layout__content">
            <Register />
        </main>
      </div>
    );
  }
}

export default Base;
