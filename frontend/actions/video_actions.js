import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";

const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
});

export const requestVideos = () => dispatch => (
  VideoApiUtil.fetchVideos().then(videos => dispatch(receiveAllVideos(videos)))
);

export const requestVideo = videoId => dispatch => (
  VideoApiUtil.fetchVideo(videoId).then(video => dispatch(receiveVideo(video)))
);

export const createVideo = formData => dispatch => (
  VideoApiUtil.createVideo(formData).then(video => dispatch(receiveVideo(video)))
);

export const updateVideo = formData => dispatch => (
  VideoApiUtil.updateVideo(formData).then(video => dispatch(receiveVideo(video)))
);

export const deleteVideo = videoId => dispatch => (
  VideoApiUtil.deleteVideo(videoId).then(video => dispatch(removeVideo(video.id)))
);