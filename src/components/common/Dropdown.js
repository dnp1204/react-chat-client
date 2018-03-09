import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {

    componentDidMount() {
        window.addEventListener("click", this.onClickHandler.bind(this));   
    }
    
    componentWillUnmount() {
        window.removeEventListener("click", this.onClickHandler.bind(this));  
    }
    
    onClickHandler(event) {
        let container = ReactDOM.findDOMNode(this);
        console.log(container);
        console.log(container.contains(event.target));
        console.log(event.target);
        
        if (container.contains(event.target)) {
            
        }
    }
    
    renerDropDown() {
        const { className, isDisplay } = this.props;
        
        if(isDisplay) {
            return (
                <div className={className} id="drop-down">
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