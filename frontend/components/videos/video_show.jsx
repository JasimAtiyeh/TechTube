import React from 'react';
import VideoIndexItem from './video_index_item';
import LikeContainer from '../likes/video_likes_container';
import {Link} from 'react-router-dom';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  componentDidMount() {
    this.props.requestVideo(this.props.videoId);
    this.props.requestVideos();
  }

  handleClick() {
    this.setState({
      show: true
    });
  }

  deleteVideo() {
    let videoId = this.props.video.id;
    this.props.deleteVideo(videoId);
    this.props.history.push('/');
  }

  render() {
    const videos = this.props.videos;
    const video = this.props.video;
    
    
    if (video){
      let user = video.user.channel_name || video.user.username;
      
      const videoDisplay = (
        <div className='video-display'>
          <video src={video.video_link} autoPlay controls>
            Your browser does not support this video.
          </video>
        </div>
      )


      if (videos) {
        const videoIndexItems = videos.map((video, idx) => {
          let user = video.user.channel_name || video.user.username;
          return (
            <li key={idx} className='video-side-bar'>
              <VideoIndexItem key={video.id} video={video} user={user} />
            </li>
          )
        });

        const uploaded_at = new Date(video.created_at).toLocaleDateString("en-US", {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        let optionMenu;
        if (video.user.id === this.props.currentUserId) {
          optionMenu = (
            <div className="dropdown">
              <i className="material-icons" onClick={this.handleClick}>more_horiz</i>

              {this.state.show &&
                (<>
                  <div className="modal" onClick={() => this.setState({
                    show: false
                    })}>
                  </div>
                  <div className="option-menu-content">
                    {/* <Link>Profile</Link> */}
                    <Link className='edit-video' to={`/videos/${video.id}/edit`}>
                      Edit Video
                    </Link>
                    <button className='delete-video' onClick={this.deleteVideo}>
                      Delete Video
                    </button>
                  </div>
                </>)
              }
            </div>
          )
          
          
        }

        return (
          <div className='showpage'>
            
            <div className='video-show'>
              {videoDisplay}
              <div className='video-show-info'>
                <div>
                  <div className='video-show-info-title'>
                    {video.title}
                  </div>
                  <div className className='video-show-info-timestamp'>
                    437,823 views
                    {' • '}
                    {uploaded_at}
                  </div>
                </div>
                <LikeContainer likeableType={'video'} likeableId={video.id} />
                <div className='option-menu'>
                  {optionMenu}
                </div>
              </div>
              <div className='video-show-info'>
                <div className='user-description'>
                  <button className='user-icon'>
                    {user[0].toUpperCase()}
                  </button>
                  <div className='video-show-info-user-description'>
                    <div className='video-show-info-user'>
                      {user}
                    </div>
                    <div className='video-show-info-description'>
                      {video.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className='video-display-items'>
              {videoIndexItems}
            </div>
          </div>
        )
      }}

    
    return (
      <div>

        
      </div>
    )
  }
}

// sidebar of videos
// playing main video
// edit video buttons
// comments and likes components

export default VideoShow;