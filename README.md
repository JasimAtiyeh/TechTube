<!-- # README

### todo
* errors are coming back way to long
* not sure how to redirect in the session form
* users are coming back into the state with a weird structure
  * entities:
    * users:
      * undefined:
        * user: {"id":8, "username":"dsfgsg"}
 -->


# TechTube

### TechTube is a clone of the popular community driven video streaming service, YouTube. TechTube is a hub of all of the tech related videos around the internet. TechTube allows users to upload their favorite tech videos and share them with the rest of the tech loving community. Users can comment on each others videos and also like them.

### Link: https://tech-tube.herokuapp.com/#/

## Technologies:
  1. PostgreSQL
  2. Ruby on Rails
  3. Jbuilder
  4. JavaScript
  5. React
  6. Redux
  7. CSS
  8. AWS

## Features
  * videos - Users can upload and edit videos on TechTube with ease. Click the add video button at the top of the page from any screen to add a video. You must be a registered user to upload content.Some of the trickier parts of this feature was building out the ability to restrict users access to editing the videos. Below is a specific example of restricting a users access to editing and deleting a video.

  ```javaScript
  let optionMenu;
        let createComment;
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
        if (this.props.currentUserId) createComment = < CreateCommentContainer videoId = { video.id } />
  ```

  * Like videos - Users can like or dislike videos that are uploaded by the TechTube community. This gives other users the ability to see which videos they may like, and uploaders can see the communities reaction to their video. The liking of videos is a simple joining of the user and a video. This proved a complication with getting the information from my database to the React front end. Below is myself using the Rails controller to fetch all of the likes for a video.

  ```Ruby
  def show
    @video = Video.includes(:likes).find(params[:id])
    if current_user 
      @like = @video.likes.find_by(user_id: current_user.id)
      @like = current_user.likes.find_by(likable_type: 'Video', likable_id: @video.id)
      @num_likes = @video.likes.liked.size
      @num_dislikes = @video.likes.disliked.size
    end
    respond_to do |format|
      format.json
    end
    render :show
  end
  ```

## Future Concepts
  * Search Feature
    - Implement the ability for a user to search for videos by name or description. Also to search for channels.
  * Liking Comments
    - Give users the ability to like the comments that they see on a video.
  * Replying to Comments
    - Let users reply to the comments that they see on uploaded videos.
  * Channel Subscriptions
    - Create the ability for users to create channels to upload their content to, and give users the ability to subscribe to those channels.