"use client";

import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const HEADQUARTERS = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria

const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#061A40" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#061A40" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#D4AF37" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#D4AF37" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#D4AF37" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#0A2A66" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1E2F56" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#061A40" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#00B4FF" }],
  },
];

const GoogleMapComponent = () => {
  const [open, setOpen] = useState(false);

  if (!API_KEY) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-navy text-gold font-montserrat p-4 text-center min-h-[400px]">
        Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment variables.
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[400px]">
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={HEADQUARTERS}
          defaultZoom={13}
          mapId="ENSEW_MAP"
          gestureHandling="greedy"
          disableDefaultUI={false}
          styles={mapStyles}
        >
          <AdvancedMarker
            position={HEADQUARTERS}
            onClick={() => setOpen(true)}
          >
            <Pin
              background={'#D4AF37'}
              glyphColor={'#061A40'}
              borderColor={'#061A40'}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow
              position={HEADQUARTERS}
              onCloseClick={() => setOpen(false)}
            >
              <div className="p-2 text-navy">
                <h3 className="font-bold text-navy">ENSEW Services Limited</h3>
                <p className="text-sm text-navy">Headquarters, Lagos, Nigeria</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMapComponent;
