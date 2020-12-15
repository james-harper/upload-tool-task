export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';

export function addFileToQueue(file) {
  return {
    type: ADD_TO_QUEUE,
    payload: file
  };
}
