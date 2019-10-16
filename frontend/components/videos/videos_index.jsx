import React from 'react';
import VideoIndexItem from './video_index_item';
import {Link} from 'react-router-dom';

class VideosIndex extends React.Component {

  componentDidMount() {
    this.props.requestVideos();
  }

  render() {
    const videos = this.props.videos;

    if (videos) {
      const videoIndexItems = videos.map((video, idx) => {
        let user = video.user.channel_name || video.user.username;
        return (
          <li key={idx} className='video-index-item'>
            <VideoIndexItem key={video.id} video={video} user={user}/>
          </li>
        )
      });

      return (
        <div className='videos-main'>
          
          <div className='video-index-container'>
            <h3>Recommended</h3>
            <ul className='video-index'>
              {videoIndexItems}
            </ul>
            <h3>Newest Uploads</h3>
            <ul className='video-index'>
              {videoIndexItems}
            </ul>
            <h3>Trending</h3>
            <ul className='video-index'>
              {videoIndexItems}
            </ul>
            <h3>Recently Watched</h3>
            <ul className='video-index'>
              {videoIndexItems}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default VideosIndex;