import { LOAD_VIDEO } from '../constants/action-types';
import uuidv1 from 'uuid';

const id1 = uuidv1();
const id2 = uuidv1();

const initialState = {
  playlist: [
    {
      id: id1,
      src: 'video_demo_1.mp4',
      type: 'video/mp4',
      width: 450,
    },
    {
      id: id2,
      src: 'video_demo_2.mp4',
      type: 'video/mp4',
      width: 450,
    },
  ],
  currentVideo: {
    id: id1,
    src: 'video_demo_1.mp4',
    type: 'video/mp4',
    width: 450,
  }
}

export default function(state = initialState, action) {
  if (action.type === LOAD_VIDEO) {

    return Object.assign({}, state, {
      currentVideo: (state.playlist.filter(element => element.id === action.videoId))[0]
    })
  }
  return state;
};