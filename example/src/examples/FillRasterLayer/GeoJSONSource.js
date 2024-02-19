import React, {useState} from 'react';
import VietmapGL from '@maplibre/maplibre-react-native';

import sheet from '../../styles/sheet';
import gridPattern from '../../assets/grid_pattern.png';
import smileyFaceGeoJSON from '../../assets/smiley_face.json';
import Page from '../common/Page';

const layerStyles = {
  background: {
    backgroundPattern: gridPattern,
  },
  smileyFace: {
    fillAntialias: true,
    fillColor: 'white',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
};

function GeoJSONSource() {
  const [mapRef, setMapRef] = useState(null);
  return (
    <Page>
      <VietmapGL.MapView
        ref={setMapRef}
        style={sheet.matchParent}
        styleURL={VietmapGL.StyleURL.Default}>
        <VietmapGL.Camera
          zoomLevel={2}
          centerCoordinate={[-35.15165038, 40.6235728]}
        />

        <VietmapGL.VectorSource>
          <VietmapGL.BackgroundLayer
            id="background"
            style={layerStyles.background}
          />
        </VietmapGL.VectorSource>

        <VietmapGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
          <VietmapGL.FillLayer
            id="smileyFaceFill"
            style={layerStyles.smileyFace}
          />
        </VietmapGL.ShapeSource>
      </VietmapGL.MapView>
    </Page>
  );
}

export default GeoJSONSource;
