import { useEffect, useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageList, setImageList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0); // Initialize index to 0
  const [isFullSliderVisible, setIsFullSliderVisible] = useState(false); // Track visibility of full slider

  useEffect(() => {
    if (typeof images === "string") {
      // Duplicate the single image URL 4 times
      setImageList([images, images, images, images]);
    } else if (Array.isArray(images)) {
      // Use the array of images directly
      setImageList(images);
    }
  }, [images]);

  const handleImageClick = (index) => {
    setImageIndex(index);
    setIsFullSliderVisible(true); // Show the full slider
  };

  const closeSlider = () => {
    setIsFullSliderVisible(false); // Hide the full slider
  };

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? imageList.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === imageList.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="slider">
      {isFullSliderVisible && (
        <div className="fullSlider" style={{ display: "flex" }}>
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Left Arrow" />
          </div>
          <div className="imgContainer">
            <img src={imageList[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="Right Arrow" />
          </div>
          <div className="close" onClick={closeSlider}>
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img
          src={imageList[0]}
          alt="Main Image"
          onClick={() => handleImageClick(0)}
        />
      </div>
      <div className="smallImages">
        {imageList.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => handleImageClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
