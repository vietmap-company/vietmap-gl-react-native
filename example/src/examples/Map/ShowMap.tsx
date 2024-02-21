import React, {useState, useEffect, ReactElement} from 'react';
import {Alert} from 'react-native';
import VietmapGL from '@maplibre/maplibre-react-native';

import sheet from '../../styles/sheet';
import {onSortOptions} from '../../utils';
import TabBarPage from '../common/TabBarPage';
import vietmap_api from '../../vietmap_api';

const ShowMap = (): ReactElement => {
  const _mapOptions = Object.keys(VietmapGL.StyleURL)
    .map(key => {
      return {
        label: key,
        data: (VietmapGL.StyleURL as any)[key], // bad any, because enums
      };
    })
    .sort(onSortOptions);

  const [styleURL, setStyleURL] = useState({styleURL: vietmap_api.get_style_url()});

  useEffect(() => {
    VietmapGL.locationManager.start();

    return (): void => {
      VietmapGL.locationManager.stop();
    };
  }, []);

  const onMapChange = (
    index: number,
    newStyleURL: string,
  ): void => {
    setStyleURL({styleURL:newStyleURL});
  };

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  return (
    <TabBarPage scrollable options={_mapOptions} onOptionPress={onMapChange}>
      <VietmapGL.MapView styleURL={styleURL.styleURL} style={sheet.matchParent}>
        <VietmapGL.Camera followZoomLevel={6} followUserLocation />

        <VietmapGL.UserLocation onPress={onUserMarkerPress} />
      </VietmapGL.MapView>
    </TabBarPage>
  );
};

export default ShowMap