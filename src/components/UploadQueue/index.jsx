import UploadQueueItem from './UploadQueueItem';

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
