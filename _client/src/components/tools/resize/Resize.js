import React, { PureComponent } from 'react';

class Resize extends PureComponent {
  componentDidMount() {
    window.addEventListener('resize', this.notifyResize.bind(this));
    this.props.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.notifyResize.bind(this));
  }

  notifyResize() {
    this.props.resize();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Resize;
