import React from 'react'
import YouTube from 'react-youtube'

class youtubePlayer extends React.Component {
  render() {
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  componentDidMount() {
    console.log(this.props);

  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}


export default youtubePlayer