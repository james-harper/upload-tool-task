import Uploader from './components/Uploader';
import './App.css';

function App() {
  const addToQueue = (file) => {
    console.log('ADDiGn', file)
  }
  return (
    <div className="App">
      <Uploader onFileAdded={addToQueue} />
    </div>
  );
}

export default App;
