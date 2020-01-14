json.extract! @like, :likable_type, :likable_id, :like, :user_id

json.num_likes @video.likes.liked.size
json.num_dislikes @video.likes.disliked.size