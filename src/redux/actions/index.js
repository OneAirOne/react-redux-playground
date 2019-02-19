import { ADD_COMMENT, REMOVE_COMMENT, LOAD_VIDEO } from '../constants/action-types';

export function addComment(payload) {
  return { type: ADD_COMMENT, payload }
}

export function removeComment(commentId) {
  return { type: REMOVE_COMMENT, commentId }
}

export function loadVideo(videoId) {
  return { type: LOAD_VIDEO, videoId }
}

