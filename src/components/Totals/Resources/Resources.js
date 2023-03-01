import React from 'react';
import Wood from '../../RawMaterials/Wood/Wood.js';
import Stone from '../../RawMaterials/Stone/Stone.js';
import Food from '../../RawMaterials/Food/Food.js';
import Hunting from '../../RawMaterials/Hunting/Hunting.js';
import Iron from '../../RawMaterials/Iron/Iron.js';
import './Resources.css';

export default function Resources() {
  return (
    <div className="resource-background">
      <div className="resources-container">
        <div className="main-resources">
          <Wood />
          <Stone />
          <Food />
        </div>
        <div className="main-resources">
          <Hunting />
          <Iron />
          <Wood />
        </div>
      </div>
    </div>
  );
}
