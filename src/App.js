import { useReducer } from 'react';
import Uploader from './components/Uploader';
import UploadQueue from './components/UploadQueue';
import { addFileToQueue, removeFileFromQueue, moveBackInQueue, moveForwardInQueue, clearQueue } from './actions';
import reducer from './reducers';
import initialState from './store';
import './App.css';

function App() {
  const [{queue}, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Uploader onFileAdded={file => dispatch(addFileToQueue(file))} />

      <div className="container">
        <UploadQueue
          files={queue}
          removeFromQueue={file => dispatch(removeFileFromQueue(file))}
          moveForwardInQueue={file => dispatch(moveForwardInQueue(file))}
          moveBackInQueue={file => dispatch(moveBackInQueue(file))}
        />

        {queue.length > 0 && (
          <div className="row justify-content-end pt-2">
            <div className="col-4">
              <button
                className="btn btn-block btn-danger"
                onClick={() => dispatch(clearQueue())}
              >
                Clear Queue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
