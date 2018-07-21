import React, { PureComponent } from 'react';

class Camera extends PureComponent {
  state = { close: false };

  componentDidMount() {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(stream => {
          if (this.state.close) {
            stream.getTracks()[0].stop();
          }
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleTakePhoto = () => {
    const { width, height } = this.props;

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, width, height);
    this.setState({ close: true });
  };

  render() {
    const { width, height } = this.props;

    return (
      <div className="camera-container">
        <video id="video" width={width} height={height} />
        <button id="snap" onClick={this.handleTakePhoto}>
          Take a Picture
        </button>
        <canvas id="canvas" width={width} height={height} />
      </div>
    );
  }
}

export default Camera;
