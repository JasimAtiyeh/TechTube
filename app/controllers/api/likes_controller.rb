class Api::LikesController < ApplicationController

  def create
    if params[:video_id]
      @video = Video.find(params[:video_id])
      @like = @video.likes.new(like: params[:like][:like])
      @like.user_id = current_user.id
    elsif params[:comment_id]
      @comment = Comment.find(params[:comment_id])
      @like = @comment.likes.new(like_params)
      @like.user_id = current_user.id
    end

    if @like.save
      respond_to do |format|
        format.json
      end
      render :create
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    if params[:video_id]
      @like = current_user.likes.find_by(likable_id: params[:video_id], likable_type: 'Video')
    elsif params[:comment_id]
      @like = current_user.likes.find_by(likable_id: params[:comment_id], likable_type: 'Comment')
    end
    if @like.destroy
      render json: {message: 'deleted successful', video_id: params[:video_id]}
    else
      render json: {message: 'deleted unsuccessful'}
    end
  end

  private
  def like_params
    params.require(:like).permit(:like)
  end

end