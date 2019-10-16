import React from 'react';

// DB is looking for :
// user_id - handled in controller
// likable_type - 
// likable_id - handled with the routes, they provide the id
// like


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
    // if (this.props.likeStatus === 'like'){
    //   document.getElementById('like').classList.add('like')
    // } else if (this.props.likeStatus === 'dislike') {
    //   document.getElementById('dislike').classList.add('dislike')
    // }

    let like = this.props.likeStatus === 'like' ? 'like' : '';
    let dislike = this.props.likeStatus === 'dislike' ? 'dislike' : '';

    return (
      <div className='thumbs'>
        {/* <img src={window.like} alt="like" onClick={this.handleLike}/> */}
        {/* <img src={window.dislike} alt="dislike" onClick={this.handleDislike}/> */}
        <i id='like' className={`material-icons ${like}`} alt="like" onClick={this.handleLike}>thumb_up</i>
        {this.props.numLikes}
        <i id='dislike' className={`material-icons ${dislike}`} alt="dislike" onClick={this.handleDislike}>thumb_down</i>
        {this.props.numDislikes}
      </div>
    )
  }
}

export default VideoLikeComponent;