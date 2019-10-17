import React from 'react';

class VideoLikeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    if (this.props.likeStatus === 'like') {
      this.props.deleteVideoLike(this.props.videoId);
    } else if (this.props.likeStatus === 'dislike') {
      this.props.deleteVideoLike(this.props.videoId).then(() => 
        this.props.createVideoLike({ like: true }, this.props.videoId));
    } else {
      this.props.createVideoLike({ like: true }, this.props.videoId);
    }
  }

  handleDislike() {
    if (this.props.likeStatus === 'dislike') {
      this.props.deleteVideoLike(this.props.videoId);
    } else if (this.props.likeStatus === 'like') {
      this.props.deleteVideoLike(this.props.videoId).then(() => 
        this.props.createVideoLike({ like: false}, this.props.videoId));
    } else {
      this.props.createVideoLike({ like: false }, this.props.videoId);
    }
  }

  render() {

    let like = this.props.likeStatus === 'like' ? 'like' : '';
    let dislike = this.props.likeStatus === 'dislike' ? 'dislike' : '';

    return (
      <div className='thumbs'>
        <i id='like' className={`material-icons ${like}`} alt="like" onClick={this.handleLike}>thumb_up</i>
        {this.props.numLikes}
        <i id='dislike' className={`material-icons ${dislike}`} alt="dislike" onClick={this.handleDislike}>thumb_down</i>
        {this.props.numDislikes}
      </div>
    )
  }
}

export default VideoLikeComponent;