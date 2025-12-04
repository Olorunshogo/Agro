
"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon issue (must be before any marker is created)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface ContactMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  height?: string;
}

const ContactMap: React.FC<ContactMapProps> = ({
  lat,
  lng,
  zoom = 15,
  height = "100%",
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([lat, lng], zoom);
    mapInstance.current = map;

    // Beautiful OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Nice marker with popup
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        `
        <div style="text-align:center; font-family:font-inter; padding:8px">
          <strong style="font-size:15px">Debridger Main Office</strong><br/>
          Kaduna, Nigeria<br/>
          <small style="color:#666">Premium farm produce sourcing</small>
        </div>
        `,
        {
          closeButton: false,
          offset: [0, -10],
        }
      )
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []); // Run once

  // Update center/zoom if props change
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setView([lat, lng], zoom, { animate: true });
    }
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      style={{
        height,
        width: "100%",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default ContactMap;