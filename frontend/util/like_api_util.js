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

export const createCommentLike = like => (
  $.ajax({
    method: "POST",
    url: `/api/comments/${like.likeableId}/likes`,
    data: { like }
  })
);

export const deleteCommentLike = commentId => (
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}/likes`
  })
);