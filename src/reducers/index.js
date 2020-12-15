import initialState from '../store';
import { ADD_TO_QUEUE } from './../actions';

export default function reducer (state = initialState, action) {
  if (action.type === ADD_TO_QUEUE) {
    return {
      ...state,
      queue: [...state.queue, action.payload]
    };
  }

  return state;
}
