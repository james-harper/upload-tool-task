import { useReducer } from 'react';
import Uploader from './components/Uploader';
import { addFileToQueue, removeFileFromQueue, moveBackInQueue, moveForwardInQueue } from './actions';
import { makeId } from './helpers';
import reducer from './reducers';
import initialState from './store';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToQueue = (file) => {
    dispatch(
      addFileToQueue(file)
    );
  }

  return (
    <div className="App">
      <Uploader onFileAdded={addToQueue} />

      <hr />
      <div className="container">
        <ul className="list-group">
          {state.queue.map((file, i) => (
            <li key={makeId(file)} className="list-group-item">
              <div className="row">
                <div className="col">{file.name}</div>
                <div className="col-2">
                  <button className="btn btn-block btn-danger" onClick={() => dispatch(removeFileFromQueue(file))}>REMOVE</button>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => dispatch(moveForwardInQueue(file))}
                    disabled={i === 0}
                  >
                    ↑
                  </button>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => dispatch(moveBackInQueue(file))}
                    disabled={i === state.queue.length - 1}
                  >
                    ↓
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
