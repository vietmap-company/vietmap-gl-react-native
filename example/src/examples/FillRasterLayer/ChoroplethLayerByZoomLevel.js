import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import Page from '../common/Page';
import vietmap_api from '../../vietmap_api';

const styles = {
  statePopulation: {
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#F2F12D',
      500000,
      '#EED322',
      750000,
      '#E6B71E',
      1000000,
      '#DA9C20',
      2500000,
      '#CA8323',
      5000000,
      '#B86B25',
      7500000,
      '#A25626',
      10000000,
      '#8B4225',
      25000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },

  countyPopulation: {
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'population'],
      0,
      '#F2F12D',
      100,
      '#EED322',
      1000,
      '#E6B71E',
      5000,
      '#DA9C20',
      10000,
      '#CA8323',
      50000,
      '#B86B25',
      100000,
      '#A25626',
      500000,
      '#8B4225',
      1000000,
      '#723122',
    ],

    fillOpacity: 0.75,
  },
};

function ChoroplethLayerByZoomLevel() {
  return (
    <Page>
      <VietmapGL.MapView
        styleURL={vietmap_api.get_style_url}
        style={sheet.matchParent}>
        <VietmapGL.Camera
          centerCoordinate={[-98, 38.88]}
          zoomLevel={3}
          minZoomLevel={3}
        />

        <VietmapGL.VectorSource
          id="population"
          url={'mapbox://mapbox.660ui7x6'}>
          <VietmapGL.FillLayer
            id="state-population"
            sourceLayerID="state_county_population_2014_cen"
            maxZoomLevel={4}
            filter={['==', 'isState', true]}
            style={styles.statePopulation}
          />

          <VietmapGL.FillLayer
            id="county-population"
            sourceLayerID="state_county_population_2014_cen"
            minZoomLevel={4}
            filter={['==', 'isCounty', true]}
            style={styles.countyPopulation}
          />
        </VietmapGL.VectorSource>
      </VietmapGL.MapView>
    </Page>
  );
}

export default React.memo(ChoroplethLayerByZoomLevel);
