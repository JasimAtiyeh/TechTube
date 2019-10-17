export const createVideoLike = (like, video_id) => (
  $.ajax({
    method: "POST",
    url: `/api/videos/${video_id}/likes`,
    data: { like }
  })
);

export const deleteVideoLike = video_id => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${video_id}/likes`
  })
);

export const createCommentLike = (like, videoId, commentId) => (
  $.ajax({
    method: "POST",
    url: `/api/videos/${videoId}/comments/${commentId}/likes`,
    data: { like }
  })
);

export const deleteCommentLike = (videoId, commentId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/videos/${videoId}/comments/${commentId}/likes`
  })
);