import React from 'react';
import {Text} from 'react-native';
import VietmapGL from '@maplibre/maplibre-react-native';

import Page from '../common/Page';
import Bubble from '../common/Bubble';

const defaultCamera = {
  centerCoordinate: [12.338, 45.4385],
  zoomLevel: 4,
};

const styles = {
  mapView: {flex: 1},
};

class ChangeLayerColor extends React.Component {
  state = {
    backgroundColor: '',
  };

  onPress = () => {
    const backgroundColor = `#${Math.random().toString(16).substr(-6)}`;
    this.setState({backgroundColor});
  };

  render() {
    const {backgroundColor} = this.state;
    return (
      <Page>
        <VietmapGL.MapView
          ref={c => (this._map = c)}
          onPress={this.onPress}
          style={styles.mapView}>
          <VietmapGL.Camera defaultSettings={defaultCamera} />
          {!!backgroundColor && (
            <VietmapGL.BackgroundLayer
              id="background"
              style={{backgroundColor}}
            />
          )}
        </VietmapGL.MapView>
        <Bubble onPress={this.onPress}>
          <Text>Paint Water</Text>
        </Bubble>
      </Page>
    );
  }
}

export default ChangeLayerColor;
