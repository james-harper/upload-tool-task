import { makeId } from '../../helpers';

const UploadQueue = ({ files, removeFromQueue, moveForwardInQueue, moveBackInQueue }) => {
  return (
    <ul className="list-group">
      {files.map((file, i) => (
        <li key={makeId(file)} className="list-group-item">
          <div className="row">
            <div className="col">{file.name}</div>
            <div className="col-2">
              <button className="btn btn-block btn-danger" onClick={() => removeFromQueue(file)}>REMOVE</button>
            </div>
            <div className="col-1">
              <button
                className="btn btn-block btn-primary"
                onClick={() => moveForwardInQueue(file)}
                disabled={i === 0}
              >
                ↑
              </button>
            </div>
            <div className="col-1">
              <button
                className="btn btn-block btn-primary"
                onClick={() => moveBackInQueue(file)}
                disabled={i === files.length - 1}
              >
                ↓
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UploadQueue;
