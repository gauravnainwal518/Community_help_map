import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icons for different help types
const icons = {
  food: new L.Icon({
    iconUrl: "/icons/food.png", // Place your food.png in public/icons/
    iconSize: [30, 30],
  }),
  medical: new L.Icon({
    iconUrl: "/icons/medical.png", // Place your medical.png in public/icons/
    iconSize: [30, 30],
  }),
  shelter: new L.Icon({
    iconUrl: "/icons/shelter.png", // Place your shelter.png in public/icons/
    iconSize: [30, 30],
  }),
  default: new L.Icon.Default(),
};

// Sample data (can later come from backend)
const initialHelpPoints = [
  {
    id: 1,
    lat: 28.6129,
    lng: 77.2295,
    type: "food",
    description: "Free food available near India Gate",
  },
  {
    id: 2,
    lat: 28.6134,
    lng: 77.21,
    type: "medical",
    description: "First aid medical help center",
  },
  {
    id: 3,
    lat: 28.61,
    lng: 77.25,
    type: "shelter",
    description: "Temporary night shelter",
  },
];

const FitBounds = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    if (points.length === 0) return;

    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [points]);

  return null;
};

const MapClickHandler = ({ onAddMarker }) => {
  useMapEvents({
    click(e) {
      const newMarker = {
        id: Date.now(),
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        type: "food", // You can open a form to let user pick
        description: "New help location",
      };
      onAddMarker(newMarker);
    },
  });
  return null;
};

const MapView = () => {
  const [helpPoints, setHelpPoints] = useState(initialHelpPoints);
  const [userPosition, setUserPosition] = useState(null);

  // Get user's geolocation
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setUserPosition([latitude, longitude]);
      });
    }
  }, []);

  const handleAddMarker = (marker) => {
    setHelpPoints((prev) => [...prev, marker]);
  };

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md mt-4">
      <MapContainer
        center={[28.6139, 77.209]} // fallback center (Delhi)
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        {/* Default TileLayer (OpenStreetMap) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User's location */}
        {userPosition && (
          <Marker position={userPosition} icon={icons.default}>
            <Popup>You are here!</Popup>
          </Marker>
        )}

        {/* Display all help markers */}
        {helpPoints.map((point) => (
          <Marker
            key={point.id}
            position={[point.lat, point.lng]}
            icon={icons[point.type] || icons.default}
          >
            <Popup>{point.description}</Popup>
          </Marker>
        ))}

        {/* Fit to all markers */}
        <FitBounds points={helpPoints} />

        {/* Add marker on map click */}
        <MapClickHandler onAddMarker={handleAddMarker} />
      </MapContainer>
    </div>
  );
};

export default MapView;
