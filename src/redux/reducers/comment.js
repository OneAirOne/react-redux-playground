import { ADD_COMMENT, REMOVE_COMMENT } from '../constants/action-types';

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.concat(action.payload)
    });
  }
  if (action.type === REMOVE_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.filter(element => element.id !== action.commentId)
    })
  }
  return state;
};