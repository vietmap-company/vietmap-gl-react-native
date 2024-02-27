import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import {SF_OFFICE_COORDINATE} from '../../utils';
import Page from '../common/Page';

function Heatmap() {
  return (
    <Page>
      <VietmapGL.MapView style={sheet.matchParent}>
        <VietmapGL.Camera
          zoomLevel={10}
          centerCoordinate={SF_OFFICE_COORDINATE}
        />

        <VietmapGL.ShapeSource
          id="earthquakes"
          url="https://www.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson">
          <VietmapGL.HeatmapLayer
            id="earthquakes"
            sourceID="earthquakes"
            style={{
              heatmapColor: [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)',
              ],
            }}
          />
        </VietmapGL.ShapeSource>
      </VietmapGL.MapView>
    </Page>
  );
}

export default Heatmap;
