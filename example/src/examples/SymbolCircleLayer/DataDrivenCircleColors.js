import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import Page from '../common/Page';

import vietmap_api from '../../vietmap_api';
const styles = {
  circles: {
    circleRadius: [
      'interpolate',
      ['exponential', 1.75],
      ['zoom'],
      12,
      2,
      22,
      180,
    ],

    circleColor: [
      'match',
      ['get', 'ethnicity'],
      'White',
      '#fbb03b',
      'Black',
      '#223b53',
      'Hispanic',
      '#e55e5e',
      'Asian',
      '#3bb2d0',
      /* other */ '#ccc',
    ],
  },
};

function DataDrivenCircleColors() {
  return (
    <Page>
      <VietmapGL.MapView
        styleURL={vietmap_api.get_style_url}
        style={sheet.matchParent}>
        <VietmapGL.Camera
          zoomLevel={10}
          pitch={45}
          centerCoordinate={[-122.400021, 37.789085]}
        />

        <VietmapGL.VectorSource
          id="population"
          url={'mapbox://examples.8fgz4egr'}>
          <VietmapGL.CircleLayer
            id="sf2010CircleFill"
            sourceLayerID="sf2010"
            style={styles.circles}
          />
        </VietmapGL.VectorSource>
      </VietmapGL.MapView>
    </Page>
  );
}

export default React.memo(DataDrivenCircleColors);
