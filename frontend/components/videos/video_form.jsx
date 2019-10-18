import React from 'react';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.video.title,
      description: this.props.video.description,
      videoFile: null,
      thumbNailFile: null,
      active: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleFile(field) {
    return e => this.setState({ [field]: e.currentTarget.files[0] });
  }

  handleClick() {
    let videoId = this.props.video.id;
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    this.props.history.goBack();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[video_link]', this.state.videoFile);
    formData.append('video[thumb_nail]', this.state.thumbNailFile);
    this.props.formAction(formData);
    this.props.history.push(`/videos/${videoId}`)
  }

  render() {
    
    return (
      <div id='modal-video-form' className={`modal ${this.state.active ? 'hidden' : ''}`}>
        <div className='video-form'>
          <h3>{this.props.formType}</h3>

          <form onSubmit={this.handleSubmit}>
            <div className='video-form-form'>
              <div className='video-form-inputs'>
                <div className='video-form-title'>
                  <label>Title
                    <input
                      type="text"
                      value={this.state.title}
                      onChange={this.update('title')} />
                  </label>
                </div>

                <div className='video-form-description'>
                  <label>Description
                    <textarea
                      value={this.state.description}
                      onChange={this.update('description')} />
                  </label>
                </div>
              </div>

              <div className='video-form-uploads'>
                <label className='video-form-uploads-video'>
                  {/* <img src={window.file_upload} alt="file_upload"/> */}
                  Video
                  <input
                    className='video-form-video-file'
                    type="file"
                    onChange={this.handleFile('videoFile')}/>
                </label>
                
                <label className='video-form-uploads-thumbnail'>
                  {/* <img src={window.file_upload} alt="file_upload" /> */}
                  Thumbnail
                  <input
                    type="file"
                    onChange={this.handleFile('thumbNailFile')}/>
                </label>
              </div>
            </div>
            <div className='bottom-buttons'>
              <input
                type="button"
                value="close"
                className='close-button'
                onClick={this.handleClick}/>
              <input type="submit" value={this.props.formType}/>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default VideoForm;