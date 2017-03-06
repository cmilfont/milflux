import React, { Component, PropTypes } from 'react';

class Wrapper extends Component {
  static contextTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { data, dispatch } = this.context;
    const { component, mapping } = this.props;
    const defaultProps = mapping(data);
    const props = { ...defaultProps, dispatch };
    return React.createElement(component, props);
  }
}

const connect = (mapping, component) => (
  () => (
    <Wrapper mapping={mapping} component={component} />
  )
);

export default connect;
