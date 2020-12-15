import initialState from '../store';
import {
  ADD_TO_QUEUE,
  REMOVE_FROM_QUEUE,
  REORDER_QUEUE_BACK,
  REORDER_QUEUE_FORWARD,
  CLEAR_QUEUE,
  RENAME_FILE
} from './../actions';
import { makeId } from './../helpers';

// Helper function for filtering by ID
function filterQueue(queue, file) {
  return queue.filter(f => makeId(f) !== makeId(file));
}

export default function reducer (state = initialState, action) {
  if (action.type === ADD_TO_QUEUE) {
    return {
      ...state,
      queue: [...state.queue, action.payload]
    };
  }

  if (action.type === REMOVE_FROM_QUEUE) {
    return {
      ...state,
      queue: filterQueue(state.queue, action.payload)
    };
  }

  if (action.type === CLEAR_QUEUE) {
    return {
      ...state,
      queue: []
    };
  }

  if (action.type === RENAME_FILE) {
    const { file, renameTo } = action.payload;
    const id = makeId(file);

    return {
      ...state,
      queue: state.queue.map(f => {
        if (makeId(f) === id) {
          // name field on File object is readonly so have to create a new one
          const updated = new File([f], renameTo, {type: f.type});;
          return updated;
        }

        return f;
      })
    };
  }

  if (action.type === REORDER_QUEUE_BACK) {
    const id = makeId(action.payload);
    const index = state.queue.findIndex(file => makeId(file) === id);

    if (index === state.queue.length) {
      // Already at back of queue, no need to move anything
      return state;
    }

    const cloneQueue = filterQueue(state.queue, action.payload);
    const after = cloneQueue.splice(index + 1);

    return {
      ...state,
      queue: [...cloneQueue, action.payload, ...after]
    }
  }

  if (action.type === REORDER_QUEUE_FORWARD) {
    const id = makeId(action.payload);
    const index = state.queue.findIndex(file => makeId(file) === id);

    if (index === 0) {
      // Already at front of queue, no need to move anything
      return state;
    }

    const cloneQueue = filterQueue(state.queue, action.payload);
    const after = cloneQueue.splice(index - 1);

    return {
      ...state,
      queue: [...cloneQueue, action.payload, ...after]
    }
  }

  return state;
}
