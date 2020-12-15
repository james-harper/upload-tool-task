# File upload technical task

- This simple web application simulates uploading files to a queue. It *DOES NOT* perform any actual uploading.

## Instructions

- `npm install` to install dependencies.
- `npm start` to start the application.
- Navigate to http://localhost:3000/ in a web browser to use.

## Notes

- I stopped developing this due to time constraints. If I had had more time I would have added some tests (mainly for the reducer). I would have made the reordering logic more generic (instead of move up/down by 1 position it would be better to be able to specify the new index). Would also add something like propTypes or Typescript to make it more obvious what kind of props were expected by each component.
