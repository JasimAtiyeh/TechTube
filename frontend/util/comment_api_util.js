export const fetchComments = video_id => (
  $.ajax({
    method: 'get',
    url: `/api/videos/${video_id}/comments`
  })
);

export const fetchComment = (commentId, video_id) => (
  $.ajax({
    method: 'get',
    url: `/api/videos/${video_id}/comments/${commentId}`
  })
);

export const createComment = (comment, video_id) => (
  $.ajax({
    method: 'post',
    url: `/api/videos/${video_id}/comments`,
    data: {comment: {body: comment}, video_id}
  })
);

export const updateComment = (comment, video_id) => (
  $.ajax({
    method: 'patch',
    url: `/api/videos/${video_id}/comments/${comment.id}`,
    data: {comment}
  })
);

export const deleteComment = (commentId, video_id) => (
  $.ajax({
    method: 'delete',
    url: `/api/videos/${video_id}/comments/${commentId}`
  })
);