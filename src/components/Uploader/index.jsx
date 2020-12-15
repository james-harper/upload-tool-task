import { useRef } from 'react';
import './Uploader.css';

const Uploader = ({ onFileAdded = () => {}}) => {
  // Reference to hidden 'file' input
  const inputRef = useRef(null);

  // Prevent default browser behaviour when dropping files
  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  // Required to open file upload dialog by clicking anywhere
  // within uploader
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  // Handle file upload dialog
  const handleFileChange = (e) => {
    const files = [...e.target.files];
    if (files.length) {
      files.forEach(file => {
        onFileAdded(file);
      });
    }
  }

  // Handle drag & drop upload
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
          type="file"
          name="files[]"
          multiple
          onChange={handleFileChange}
        />
    </div>
  );
}

export default Uploader;
