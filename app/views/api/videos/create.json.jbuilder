json.extract! @video, :id, :title, :description, :user_id
json.video_url url_for(@video.video_link)
json.thumb_nail_url url_for(@video.thumb_nail)