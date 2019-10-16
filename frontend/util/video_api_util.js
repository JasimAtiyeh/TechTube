export const fetchVideos = () => (
  $.ajax({
  method: "get",
  url: "/api/videos",
  })
);

export const fetchVideo = videoId => (
  $.ajax({
  method: 'get',
  url: `/api/videos/${videoId}`
  })
);

export const createVideo = formData => (
  $.ajax({
  method: "post",
  url: "/api/videos",
  data: formData,
  contentType: false,
  processData: false
  })
);

export const updateVideo = formData => (
  $.ajax({
  method: "patch",
  url: `/api/videos/${formData.video.id}`,
  data: formData,
  contentType: false,
  processData: false
  })
);

export const deleteVideo = videoId => (
  $.ajax({
  method: 'delete',
  url: `/api/videos/${videoId}`
  })
);