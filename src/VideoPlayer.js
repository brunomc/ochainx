import React, { Component } from 'react';
import Cover from 'react-video-cover';
import VideoBackgroundLoop from './background.mp4';
import MediaQuery from 'react-responsive';
import BackgroundPattern from './backgroundPattern.png';

const style = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  background: 'black',
  top: 0,
  left: 0,
  zIndex: -1,
};

const styleMobile = {
  backgroundImage: `url(${BackgroundPattern})`,
  color: 'white',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  minWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

class VideoPlayer extends Component {
  state = {
    resizeNotifier: () => {},
  };

  render() {
    const videoOptions = {
      src: VideoBackgroundLoop,
      autoPlay: true,
      loop: true,
    };

    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <div style={style}>
            <Cover
              videoOptions={videoOptions}
              remeasureOnWindowResize
              getResizeNotifier={resizeNotifier => {
                this.setState({
                  resizeNotifier,
                });
              }}
            />
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div style={styleMobile} />
        </MediaQuery>
      </div>
    );
  }
}

export default VideoPlayer;
