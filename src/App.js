import React, { Component } from 'react';
import Store from 'lib/store';
import Base from 'components/Base';
import reducer from 'api/reducer';
import filter from 'api/filter';
import 'firebase-conf';

class App extends Component {
  render() {
    return (
      <div className="Feedback mdc-typography">
        <Store reducer={reducer} filter={filter} >
          <Base />
        </Store>
      </div>
    );
  }
}

export default App;
