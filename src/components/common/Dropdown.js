import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
    
    state = { show: false }

    componentDidMount() {
        window.addEventListener("click", this.onClickHandler.bind(this));   
    }
    
    componentWillUnmount() {
        window.removeEventListener("click", this.onClickHandler.bind(this));  
    }
    
    onClickHandler(event) {
        let container = ReactDOM.findDOMNode(this);
        
        if(container.contains(event.target)) {
            if(this.state.show) {
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
                <div id="drop-down">
                    Hello
                </div> 
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