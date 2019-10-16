# json.array! @videos do |video|
#   json.extract! video, :id, :title, :description, :user_id
#   if video.video_link.attached?
#     json.video_link url_for(video.video_link)
#   end

#   if video.thumb_nail.attached?
#     json.thumb_nail url_for(video.thumb_nail)
#   end
# end

@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description, :created_at, :user
    if video.video_link.attached?
      json.video_link url_for(video.video_link)
    end

    if video.thumb_nail.attached?
      json.thumb_nail url_for(video.thumb_nail)
    end
  end
end