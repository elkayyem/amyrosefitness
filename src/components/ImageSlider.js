import React, { useRef, useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ beforeImage, afterImage }) => {
  const sliderRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = beforeImage;
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
  }, [beforeImage]);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isResizing) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;

    setSliderPosition(percentage);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isResizing]);

  return (
    <div 
      className="image-slider" 
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        width: dimensions.width ? `${dimensions.width}px` : '100%',
        height: dimensions.height ? `${dimensions.height}px` : 'auto'
      }}
    >
      <div className="image-container">
        <div className="after-container">
          <img src={afterImage} alt="After" className="after-image" />
          <span 
            className="label after-label"
            style={{ opacity: sliderPosition < 95 ? 1 : 0 }}
          >
            After
          </span>
        </div>
        <div 
          className="before-container"
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={beforeImage} alt="Before" className="before-image" />
          <span 
            className="label before-label"
            style={{ opacity: sliderPosition > 5 ? 1 : 0 }}
          >
            Before
          </span>
        </div>
      </div>
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-button"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
