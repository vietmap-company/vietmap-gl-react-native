import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';
import bboxPolygon from '@turf/bbox-polygon';

import sheet from '../../styles/sheet';
import Page from '../common/Page';
import vietmap_api from '../../vietmap_api';

const boundsStyle = {
  fillColor: 'rgba(255, 255, 255, 0.1)',
  fillOutlineColor: 'white',
};

const bounds = {
  ne: [-4.265762, 51.054738],
  sw: [-5.760365, 49.947256],
};

const {ne, sw} = bounds;
const polygon = bboxPolygon([sw[0], sw[1], ne[0], ne[1]]);

const RestrictMapBounds = props => (
  <Page {...props}>
    <VietmapGL.MapView
      style={sheet.matchParent}
      styleURL={vietmap_api.get_style_url}>
      <VietmapGL.Camera
        maxBounds={bounds}
        zoomLevel={7}
        centerCoordinate={[-4.744276, 50.361239]}
      />
      <VietmapGL.ShapeSource id="bounds" shape={polygon}>
        <VietmapGL.FillLayer id="boundsFill" style={boundsStyle} />
      </VietmapGL.ShapeSource>
    </VietmapGL.MapView>
  </Page>
);

export default RestrictMapBounds;
