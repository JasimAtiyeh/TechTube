json.set! 'comments_response' do
  json.set! 'comments' do
    @comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :video_id
      end
    end
  end
  json.video_id @video.id
end