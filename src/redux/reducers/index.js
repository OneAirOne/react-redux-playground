import { combineReducers } from 'redux';

import commentModule from './comment';
import playerModule from './player';

export default combineReducers({ 
  commentModule,
  playerModule,
});