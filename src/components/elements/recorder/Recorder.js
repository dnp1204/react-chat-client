import React, { Component } from 'react';
import './Recorder.scss';

class Recorder extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { isRecording: false, minutes: 0, seconds: 0 };
        this.intervalId = null;
    }
    
    startRecording() {
        let self = this;
        this.setState({ isRecording: true });
        this.intervalId = setInterval(() => {
            if(self.state.seconds === 59) {
                self.setState({ minutes: self.state.minutes + 1, seconds: 0 });
            } else {
                self.setState({ seconds: self.state.seconds + 1 });
            }
        }, 1000);
    }
    
    cancelRecording() {
        this.setState({ isRecording: false });
        clearInterval(this.intervalId);
        this.setState({ minutes: 0, seconds: 0 });
    }
    
    renderRecorderButton() {
        if(this.state.isRecording) {
            return <button className="recording" onClick={this.cancelRecording.bind(this)}></button>;
        } else {
            return <button onClick={this.startRecording.bind(this)}>Record</button>;
        }
    }
    
    render() {
        return (
            <div id="recorder">
                <p>{this.state.minutes}:{this.state.seconds > 9 ? this.state.seconds : `0${this.state.seconds}`}</p>
                {this.renderRecorderButton()}
            </div>
        );
    }
}

export default Recorder;