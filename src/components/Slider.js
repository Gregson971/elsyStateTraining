import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';

const Slider = ({ icon, name, value, unit = '', min = 0, max = 100, onChange }) => {
  return (
    <div className="slider-container">
      <div className="slider-icon">{React.cloneElement(icon, { size: 40 })}</div>
      <div className="slider-content">
        <p className="slider-name">
          {name + ': '} <span className="slider-value">{value + unit}</span>
        </p>
        <div className="slider-range">
          <RcSlider
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
