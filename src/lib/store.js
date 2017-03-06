import React, { Component, PropTypes } from 'react';

class Store extends Component {

  static childContextTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
  }

  static propTypes = {
    reducer: PropTypes.func,
    filter: PropTypes.func,
  }

  state = {}

  getChildContext() {
    return {
      dispatch: this.dispatch,
      data: this.state,
    };
  }

  getState = () => (this.state)

  dispatch = (action) => {
    const { reducer, filter } = this.props;
    const result = (filter)? filter(this)(action, reducer) : reducer(this.state, action);
    this.setState(result);
  }

  componentWillMount() {
    const { reducer } = this.props;
    this.state = reducer();
  }

  render() {
    return this.props.children;
  }
}

export default Store;
