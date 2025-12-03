import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {useMap} from '../hooks/useMap.ts';
import 'leaflet/dist/leaflet.css';
import { CityDto } from '../types/responses/cityDto.ts';
import {Location} from '../types/location.ts';
import {URL_MARKER_DEFAULT} from '../const.ts';

type MapProps = {
  city: CityDto;
  points: Location[];
  className: string;
  // selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function Map({city, points, className}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, city]);

  return <div className={className} ref={mapRef}></div>;
}
