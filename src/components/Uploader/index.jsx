import { useRef } from 'react';
import './Uploader.css';

const Uploader = ({ onFileAdded = () => {}}) => {
  const inputRef = useRef(null);

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleClick = () => {
    if (inputRef.current) {
      // Open file upload dialog
      inputRef.current.click();
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()

    const files = [...e.dataTransfer.files];
    if (files.length) {
      files.forEach(file => {
        onFileAdded(file);
      });
      e.dataTransfer.clearData()
    }
  }

  return (
    <div
      className="uploader"
      onClick={handleClick}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
      onDragLeave={preventDefault}
      onDrop={handleDrop}
    >
        <div>Drag and drop files or click to upload.</div>
        <input
          ref={inputRef}
          id="upload"
          type="file"
          multiple=""
        />
    </div>
  );
}

export default Uploader;
