import React, { Component } from 'react';

class ResizeableColumn extends Component {
    
    state = { startDragging: false, width: 0, minWidth: 0, maxWidth: 0, start: 0, end: 0 };
    
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
        window.addEventListener('mouseup', this.handleMouseUp.bind(this));
        
        let element = document.getElementById("resizeable-element");
        this.setState({ width: element.offsetWidth });
        
        if(this.props.minWidth) {
            this.setState({ minWidth: this.props.minWidth });
        } else if (this.state.minWidth === 0) {
            this.setState({ minWidth: element.offsetWidth });
        }
        
        if(this.props.maxWidth) {
            this.setState({ maxWidth: this.props.maxWidth });
        } else {
            this.setState({ maxWidth: window.innerWidth });
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
        window.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    }
    
    handleMouseMove(event) {
        if(this.state.startDragging) {
            console.log('mouse move');
            if(event.clientX > this.state.minWidth && event.clientX < this.state.maxWidth) {
                this.setState({ width: event.clientX });   
            } else if(event.clientX < this.state.minWidth) {
                this.setState({ width: this.state.minWidth });
            } else {
                this.setState({ maxWidth: this.state.maxWidth });
            }
        }
    }
    
    handleMouseUp(event) {
        console.log('mouse up');
        this.setState({ startDragging: false });
    }
    
    handleMouseDown(event) {
        console.log('mouse down');
        this.setState({ startDragging: true });
    }
    
    handleMouseOver(event) {
        console.log('mouse-over');
        let element = document.getElementById("resize-bar");
        element.style.borderWidth = '0px 8px 0px 0px';
    }
    
    handleMouseLeave(event) {
        let element = document.getElementById("resize-bar");
        element.style.borderWidth = '0px 1px 0px 0px';
    }
    
    render() {
        const { resizeBar } = this.props;
        
        return (
            <div style={this.state.width !== 0 ? { width: this.state.width } : {}} id="resizeable-element">
                <div className="flex--row">
                    <div style={{ flex: 1 }}>
                        {this.props.children}
                    </div>
                    <div id="resize-bar" onMouseLeave={this.handleMouseLeave.bind(this)} onMouseOver={this.handleMouseOver.bind(this)} onMouseDown={this.handleMouseDown.bind(this)} style={{ cursor: 'ew-resize' }} className="border-right"></div>
                </div>
            </div>    
        );
    }
}

export default ResizeableColumn;