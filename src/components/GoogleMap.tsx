"use client";

import React from 'react';
import { MapPin } from 'lucide-react';

const GoogleMapComponent = () => {
  // Hardcoded coordinates for ENSEW Services Limited
  // Address: 39, Alfred Rewane Road, Ikoyi, Lagos, Nigeria
  const latitude = 6.4281;
  const longitude = 3.4219;
  const zoomLevel = 15;

  // Create an embedded map URL using OpenStreetMap's static map service
  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoomLevel}&size=800x400&markers=color:gold%7C${latitude},${longitude}&style=element:geometry%7Ccolor:0x061a40&style=element:labels.text.fill%7Ccolor:0xd4af37&key=hardcoded`;

  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10">
      {/* Fallback to static map with OpenStreetMap tiles */}
      <div className="w-full h-full relative bg-navy flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 'none', minHeight: '400px' }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`}
          title="ENSEW Services Limited Location"
        />
        
        {/* Overlay information card */}
        <div className="absolute bottom-4 left-4 bg-navy/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-xs z-10">
          <div className="flex gap-3 items-start">
            <MapPin className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">ENSEW Services Limited</h3>
              <p className="text-on-surface-variant text-xs mt-2">39, Alfred Rewane Road, Ikoyi, Lagos, Nigeria</p>
              <p className="text-on-surface-variant text-xs mt-1">📍 6.4281°N, 3.4219°E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
