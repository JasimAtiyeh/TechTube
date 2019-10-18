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

      const shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      let recommended = [...videoIndexItems]
      let newestUploads = [...videoIndexItems]
      let trending = [...videoIndexItems]
      let recentlyWatched = [...videoIndexItems]

      return (
        <div className='videos-main'>
          
          <div className='video-index-container'>
            <h3>Recommended</h3>
            <ul className='video-index'>
              {shuffle(recommended)}
            </ul>
            <h3>Newest Uploads</h3>
            <ul className='video-index'>
              {shuffle(newestUploads)}
            </ul>
            <h3>Trending</h3>
            <ul className='video-index'>
              {shuffle(trending)}
            </ul>
            <h3>Recently Watched</h3>
            <ul className='video-index'>
              {shuffle(recentlyWatched)}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default VideosIndex;