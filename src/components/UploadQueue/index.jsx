import UploadQueueItem from './UploadQueueItem';
import { makeId } from '../../helpers';

const UploadQueue = ({
  files,
  removeFromQueue = () => {},
  moveForwardInQueue = () => {},
  moveBackInQueue = () => {},
  renameFile = () => {}
}) => {
  return (
    <ul className="list-group">
      {files.map((file, i) => (
        <UploadQueueItem
          key={makeId(file)}
          file={file}
          isFirst={i === 0}
          isLast={i === files.length - 1}
          removeFromQueue={removeFromQueue}
          moveForwardInQueue={moveForwardInQueue}
          moveBackInQueue={moveBackInQueue}
          renameFile={renameFile}
        />
      ))}
    </ul>
  );
}

export default UploadQueue;
