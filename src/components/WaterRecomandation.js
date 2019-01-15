import React from 'react';
import WaterGlasses from './WaterGlasses';

const WaterRecomandation = ({ waterValue }) => {
  const waterRound = Math.floor(waterValue * 1000) / 1000;
  return (
    <div className="water-container">
      <WaterGlasses iconSize={50} waterValue={waterValue} />
      <p className="water-text">
        Quantité d'eau recommandée: <span className="water-value">{waterRound + 'L'}</span>
      </p>
    </div>
  );
};

export default WaterRecomandation;
