import React, { Component } from 'react';

class Dropdown extends Component {
    componentDidMount() {
        window.addEventListener("click", this.onClickHandler);
    }
    
    componentWillUnmount() {
        window.removeEventListener("click", this.onClickHandler);
    }
    
    onClickHandler(event) {
        console.log(event);
    }
    
    render() {
        return (
            <div id="drop-down">
                Hello
            </div>
        );
    }
}

export default Dropdown;