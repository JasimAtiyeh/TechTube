# json.extract! @video, :id, :title, :description, :user_id
# json.video_url url_for(@video.video_link)
# json.thumb_nail_url url_for(@video.thumb_nail)

json.extract! @video, :id, :title, :description, :created_at, :user
if @video.video_link.attached?
  json.video_link url_for(@video.video_link)
end

if @video.thumb_nail.attached?
  json.thumb_nail url_for(@video.thumb_nail)
end

if @like
  json.like_status @like.like ? 'like' : 'dislike'
end

json.num_likes @num_likes
json.num_dislikes @num_dislikes