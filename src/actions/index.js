export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const REMOVE_FROM_QUEUE = 'REMOVE_FROM_QUEUE';
export const RENAME_FILE = 'RENAME_FILE';
export const REORDER_QUEUE_FORWARD = 'REORDER_QUEUE_FORWARD';
export const REORDER_QUEUE_BACK = 'REORDER_QUEUE_BACK';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';

export function addFileToQueue(file) {
  return {
    type: ADD_TO_QUEUE,
    payload: file
  };
}

export function removeFileFromQueue(file) {
  return {
    type: REMOVE_FROM_QUEUE,
    payload: file
  };
}

export function clearQueue() {
  return {
    type: CLEAR_QUEUE,
    payload: []
  };
}

export function renameFile(file, newName) {
  return {
    type: RENAME_FILE,
    payload: {
      file,
      renameTo: newName
    }
  };
}

export function moveForwardInQueue(file) {
  return {
    type: REORDER_QUEUE_FORWARD,
    payload: file
  };
}

export function moveBackInQueue(file) {
  return {
    type: REORDER_QUEUE_BACK,
    payload: file
  };
}
