import UploadQueueItem from './UploadQueueItem';

const UploadQueue = ({ files, removeFromQueue, moveForwardInQueue, moveBackInQueue }) => {
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
        />
      ))}
    </ul>
  );
}

export default UploadQueue;
