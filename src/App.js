import { useReducer } from 'react';
import Uploader from './components/Uploader';
import { addFileToQueue } from './actions';
import reducer from './reducers';
import initialState from './store';
import './App.css';

// Files might have duplicate names, but are unlikely to have
// same name and last modified timestamp.
// However, it is possible so in a production app a more unique id would be used
const makeId = (file) => `${file.name}_${file.lastModified}`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToQueue = (file) => {
    console.log('Adding', file)
    dispatch(
      addFileToQueue(file)
    );
  };

  return (
    <div className="App">
      <Uploader onFileAdded={addToQueue} />

      {state.queue.map(file => (
        <div key={makeId(file)}>{file.name}</div>
      ))}
    </div>
  );
}

export default App;
