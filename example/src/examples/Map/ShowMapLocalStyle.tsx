import React, {FC, useEffect} from 'react';
import {Alert} from 'react-native';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import Page from '../common/Page';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const style = JSON.stringify(require('../../assets/map-styleURL-style.json'));

const ShowMap: FC<any> = props => {
  useEffect(() => {
    VietmapGL.locationManager.start();

    return (): void => {
      VietmapGL.locationManager.stop();
    };
  }, []);

  const onUserMarkerPress = (): void => {
    Alert.alert('You pressed on the user location annotation');
  };

  return (
    <Page {...props}>
      <VietmapGL.MapView styleURL={style} style={sheet.matchParent}>
        <VietmapGL.Camera followZoomLevel={3} followUserLocation />
        <VietmapGL.UserLocation onPress={onUserMarkerPress} />
      </VietmapGL.MapView>
    </Page>
  );
};

export default ShowMap;
