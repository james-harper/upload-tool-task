import { makeId } from '../../../helpers';

const UploadQueueItem = ({
  file,
  isFirst,
  isLast,
  removeFromQueue = () => {},
  moveForwardInQueue = () => {},
  moveBackInQueue = () => {}
}) => {
  return (
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
            disabled={isFirst}
          >
            ↑
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-block btn-primary"
            onClick={() => moveBackInQueue(file)}
            disabled={isLast}
          >
            ↓
          </button>
        </div>
      </div>
    </li>
  );
}

export default UploadQueueItem;
