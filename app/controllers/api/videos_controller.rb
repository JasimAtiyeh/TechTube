class Api::VideosController < ApplicationController
  
  def index
    @videos = Video.includes(user: :videos).all
    respond_to do |format|
      format.json
    end
    render :index
  end

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

  def create
    @video = Video.new(video_params)
    @video.user_id = current_user.id

    if @video.save
      respond_to do |format|
        format.json
      end
      render :create
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = current_user.videos.find(params[:id])

    if @video.update(video_params)
      respond_to do |format|
        format.json
      end
      render :update
    else
      render json: @video.errors.full_messages, status: 422
      render :update
    end
  end

  def destroy
    @video = current_user.videos.find(params[:id])
    @video.destroy
  end

  private
  def video_params
    params.require(:video).permit(:title, :description, :video_link, :thumb_nail)
  end
end