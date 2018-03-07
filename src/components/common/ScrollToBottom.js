import React, { Component } from 'react';

class ScrollToBottom extends Component {
    state = { hover: false };
    
    componentDidMount() {
        let el = document.getElementById("__scroll-to-bottom-component");
        let clientHeight = el.clientHeight;
        el.scroll(clientHeight, clientHeight);
    }
    
    componentDidUpdate() {
        if (this.props.shouldScroll) {
            this.scrollToBottom();
        }
    }
    
    scrollToBottom() {
        let el = document.getElementById("__scroll-to-bottom-component");
        let scrollTop = el.scrollTop;
        let scrollHeight = el.scrollHeight;
        let clientHeight = el.clientHeight;
        let difference;
        
        if(scrollTop + clientHeight < scrollHeight) {
            let scrollInterval = setInterval(() => {
                el.scroll(scrollTop, scrollTop + 10);
                scrollTop += 10;
                if (scrollTop + clientHeight >= scrollHeight) {
                    clearInterval(scrollInterval);
                    console.log(true);
                    this.props.onScrollToBottomFinishHandler();
                }
            }, 5);
        } 
    }
    
    render() {
        return (
            <div style={{ overflow: `${this.state.hover ? 'auto' : 'hidden' }` }} 
                onMouseEnter={() => this.setState({ hover: true })} 
                onMouseLeave={() => this.setState({ hover:false })} 
                id="__scroll-to-bottom-component">
                {this.props.children}
            </div>
        );
    }
}

export default ScrollToBottom;