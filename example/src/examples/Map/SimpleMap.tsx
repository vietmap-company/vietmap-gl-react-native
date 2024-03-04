import { ReactElement, useEffect, useRef, useState } from "react";
import vietmap_api from "../../vietmap_api";
import VietmapGL from '@vietmap/vietmap-gl-react-native';
import sheet from "../../styles/sheet";
const SimpleMap = (): ReactElement => {
  const [styleUrl, setStyleURL] = useState({ styleUrl: vietmap_api.get_style_url() })

  const mapRef = useRef(null);

  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const handleMapClick = async (feature: any) => {
    // Handle the map click event
    if (mapRef.current) {
      console.log(feature);
      const { geometry, properties } = feature;

      setMarkerCoordinates(geometry.coordinates);
      console.log('Clicked at coordinates:', geometry.coordinates);
      console.log('Feature properties:', properties);

      /// Query data from rendered map, like point, admin,...
      const selectedFeatures = await mapRef.current.queryRenderedFeaturesAtPoint([properties.screenPointX, properties.screenPointX], null);

      console.log('Rendered Features:', selectedFeatures);
      setSelectedFeatures(selectedFeatures)

    } else {
      console.error('Feature failed')
    }
  };
  const centerCoordinates = [106.6320, 10.7545]; // Replace with your desired coordinates
  const lineCoordinates = [
    [106.432502, 10.253619], // Starting point (longitude, latitude)
    [106.732502, 10.653619], // Ending point (longitude, latitude)
  ];
  return (<VietmapGL.MapView ref={mapRef} styleURL={styleUrl.styleUrl} style={sheet.matchParent} logoEnabled={false} onPress={handleMapClick}  >

    <VietmapGL.Camera zoomLevel={13} followZoomLevel={13} followUserLocation={false} centerCoordinate={centerCoordinates} />

    <VietmapGL.ShapeSource id="lineSource" shape={{ type: 'LineString', coordinates: lineCoordinates }}>
      <VietmapGL.LineLayer id="lineLayer" style={{ lineColor: 'red', lineWidth: 20 }} />
    </VietmapGL.ShapeSource>
  </VietmapGL.MapView>);
};
export default SimpleMap;