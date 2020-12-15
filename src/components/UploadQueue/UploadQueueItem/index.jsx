import { useState } from 'react';
import { makeId } from '../../../helpers';

const UploadQueueItem = ({
  file,
  isFirst,
  isLast,
  removeFromQueue = () => {},
  moveForwardInQueue = () => {},
  moveBackInQueue = () => {},
  renameFile = () => {}
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(file.name);

  const handleSave = () => {
    renameFile(file, value);
    setIsEditing(false);
  }

  return (
    <li key={makeId(file)} className="list-group-item">
      <div className="row">
        <div className="col">
          {isEditing && (
            <input
              className="form-control"
              defaultValue={file.name}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
          {!isEditing && file.name}
        </div>
        <div className="col-1">
          {!isEditing && (
            <button className="btn btn-block btn-info" onClick={() => setIsEditing(!isEditing)}>EDIT</button>
          )}
          {isEditing && (
            <button className="btn btn-block btn-success" onClick={handleSave}>SAVE</button>
          )}
        </div>
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
