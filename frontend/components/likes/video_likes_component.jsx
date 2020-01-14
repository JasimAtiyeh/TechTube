import React from 'react';

class VideoLikeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.state = {
      numLikes: this.props.numLikes,
      numDislikes: this.props.numDislikes
    };
  }

  // componentWillUpdate(a, b, c) {
  //   console.log(a, b, c);
  //   this.setState = {
  //     numLikes: this.props.numLikes,
  //     numDislikes: this.props.numDislikes
  //   };
  // }

  // componentDidUpdate(oldProps) {
  //   if (this.props.videoId !== oldProps.videoId) {
  //     this.props.requestVideo(this.props.videoId);
  //   }
  // }

  handleLike() {
    if (this.props.likeStatus === 'like') {
      this.props.deleteVideoLike(this.props.videoId)
      .then(res => this.setState({
        numLikes: res.response.num_likes,
        numDislikes: res.response.num_dislikes
      }));
    } else if (this.props.likeStatus === 'dislike') {
      this.props.deleteVideoLike(this.props.videoId)
      .then(() => this.props.createVideoLike({ like: true }, this.props.videoId))
      .then(res => this.setState({
        numLikes: res.response.num_likes,
        numDislikes: res.response.num_dislikes
      }));
    } else {
      this.props.createVideoLike({ like: true }, this.props.videoId)
        .then(res => this.setState({
          numLikes: res.response.num_likes,
          numDislikes: res.response.num_dislikes
        }));
    }
  }

  handleDislike() {
    if (this.props.likeStatus === 'dislike') {
      this.props.deleteVideoLike(this.props.videoId)
        .then(res => this.setState({
          numLikes: res.response.num_likes,
          numDislikes: res.response.num_dislikes
        }));
    } else if (this.props.likeStatus === 'like') {
      this.props.deleteVideoLike(this.props.videoId)
      .then(() => this.props.createVideoLike({ like: false}, this.props.videoId))
      .then(res => this.setState({
        numLikes: res.response.num_likes,
        numDislikes: res.response.num_dislikes
      }));
    } else {
      this.props.createVideoLike({ like: false }, this.props.videoId)
        .then(res => this.setState({
          numLikes: res.response.num_likes,
          numDislikes: res.response.num_dislikes
        }));
    }
  }

  render() {

    let like = this.props.likeStatus === 'like' ? 'like' : '';
    let dislike = this.props.likeStatus === 'dislike' ? 'dislike' : '';

    return (
      <div className='thumbs'>
        <i id='like' className={`material-icons ${like}`} alt="like" onClick={this.handleLike}>thumb_up</i>
        {this.state.numLikes}
        <i id='dislike' className={`material-icons ${dislike}`} alt="dislike" onClick={this.handleDislike}>thumb_down</i>
        {this.state.numDislikes}
      </div>
    )
  }
}

export default VideoLikeComponent;