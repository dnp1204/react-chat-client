import React, { PureComponent } from 'react';

class Resize extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { width: 0 };
    this.conversationElement = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWidth.bind(this));
    this.setWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth.bind(this));
  }

  setWidth() {
    if (this.conversationElement) {
      this.setState({ width: this.conversationElement.clientWidth });
    }
  }

  render() {
    return <div />;
  }
}

export default Resize;
