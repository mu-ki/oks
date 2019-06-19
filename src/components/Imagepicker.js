import React from "react";

const ImagePicker = () => {
  let previewImg = React.useRef(null);

  const handleChange = e =>
    (previewImg.current.src = window.URL.createObjectURL(e.target.files[0]));

  return (
    <div>
      <input type="file" onChange={handleChange} typeof="img/*" />
      <img
        alt="preview" class = "rounded"
        style={{borderRadius: "15px" }}
        ref={previewImg}
      />
    </div>
  );
};
export default ImagePicker;