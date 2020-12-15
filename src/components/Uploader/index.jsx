import { useRef } from 'react';
import './Uploader.css';

const Uploader = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      // Open file upload dialog
      inputRef.current.click();
    }
  }

  return (
    <form method="post" className="uploader" onClick={handleClick}>
      <div>Drag and drop files or click to upload.</div>
      <input
        ref={inputRef}
        id="upload"
        type="file"
        multiple=""
      />
    </form>
  );
}

export default Uploader;
