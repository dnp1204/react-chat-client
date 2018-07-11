import React, { Component } from 'react';

class ScrollToBottom extends Component {
  state = { hover: false };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    if (this.props.shouldScroll) {
      this.scrollToBottom();
    }

    if (this.props.scrollSmooth) {
      this.scrollToBottomSmooth();
    }
  }

  scrollToBottom() {
    let el = document.getElementById('__scroll-to-bottom-component');
    let scrollHeight = el.scrollHeight;
    el.scroll(scrollHeight, scrollHeight);
    this.props.onScrollToBottomFinishHandler();
  }

  scrollToBottomSmooth() {
    let el = document.getElementById('__scroll-to-bottom-component');
    let scrollTop = el.scrollTop;
    let scrollHeight = el.scrollHeight;
    let clientHeight = el.clientHeight;

    if (scrollTop + clientHeight < scrollHeight) {
      let scrollInterval = setInterval(() => {
        el.scroll(scrollTop, scrollTop + 30);
        scrollTop += 30;
        if (scrollTop + clientHeight > scrollHeight) {
          clearInterval(scrollInterval);
          this.props.onScrollToBottomFinishHandler();
        }
      }, 5);
    }
  }

  render() {
    const { defaultOverflow, hoverOverflowY } = this.props;
    return (
      <div
        style={{
          overflowY: `${this.state.hover ? hoverOverflowY : defaultOverflow}`,
          height: 'inherit',
          margin: 0,
          padding: 0
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        id="__scroll-to-bottom-component"
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollToBottom;
