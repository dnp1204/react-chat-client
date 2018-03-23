import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
    
    state = { show: false, clickedTarget: null }

    componentDidMount() {
        window.addEventListener("click", this.onClickHandler.bind(this));   
    }
    
    componentWillUnmount() {
        window.removeEventListener("click", this.onClickHandler.bind(this));  
    }
    
    onClickHandler(event) {
        let container = ReactDOM.findDOMNode(this);
        
        if(container.contains(event.target)) {
            if (!this.state.show) {
                this.setState({ clickedTarget: event.target });
            }
            
            if(this.state.show && this.state.clickedTarget === event.target) {
                this.setState({ show: false });
            } else {
                this.setState({ show: true });
            }
        } else {
            this.setState({ show: false });
        }
    }
    
    renerDropDown() {
        if(this.state.show) {
            return (
                this.props.renderDropdownComponent
            );
        } else {
            return <div />;
        }
    }
    
    render() {
        
        return (
            <div>
                {this.props.children}
                {this.renerDropDown()}
            </div>
        );
    }
}

export default Dropdown;