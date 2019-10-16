import React from 'react';
import {Link} from 'react-router-dom';

const VideoIndexItem = ({video, user}) => {
  // let created_at = new Date(video.created_at);
  // let today = Date().today;
  return (
    <Link to={`/videos/${video.id}`}>
      <img src={video.thumb_nail || 'http://i.ytimg.com'} alt={video.title}/>
      <div className='video-info'>
        <div className='video-title'>
          {video.title}
        </div>
        <div className='video-uploader'>
          {user}
          <div className='video-uploader-br'>
            48621 views
          </div>
        </div>
      </div>
      {/* {created_at.toString()} */}
      {/* since upload */}
      {/* likes or views */}
    </Link>
  )
}



export default VideoIndexItem;