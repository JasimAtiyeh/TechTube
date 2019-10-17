json.extract! @comment, :id, :body, :user_id, :video_id
if @like
  json.like_status @like.like ? 'like' : 'dislike'
end

json.num_likes @num_likes
json.num_dislikes @num_dislikes