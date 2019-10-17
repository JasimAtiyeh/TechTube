class Api::CommentsController < ApplicationController

  def index
    @video = Video.find(params[:video_id])
    @comments = @video.comments.all
    respond_to do |format|
      format.json
    end
    render :index
  end

  def show
    @video = Video.find(params[:video_id])
    @comments = @video.comments.find(params[:id])
    # @comment = Comment.includes(:likes).find(params[:video_id])
    if current_user
      @like = @comment.likes.find_by(user_id: current_user.id)
      @like = current_user.likes.find_by(likable_type: 'Comment', likable_id: @comment.id)
      @num_likes = @comment.likes.liked.size
      @num_dislikes = @comment.likes.disliked.size
    end
    respond_to do |format|
      format.json
    end
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.video_id = params[:video_id]

    if @comment.save!
      respond_to do |format|
        format.json
      end
      render :create
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update(comment_params)
      respond_to do |format|
        format.json
      end
      render :update
    else
      render json: @comment_params.errors.full_messages, status: 422
      render :update
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end