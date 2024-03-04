import React from 'react';
import {Text, StyleSheet} from 'react-native';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import StyleJsonExample from '../../assets/style-json-example.json';
import StyleJsonExample2 from '../../assets/style-json-example2.json';
import Page from '../common/Page';
import Bubble from '../common/Bubble';

import vietmap_api from '../../vietmap_api';
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const defaultCamera = {
  centerCoordinate: [-78.54382, 40.446947],
  zoomLevel: 3,
  minZoomLevel: 3,
};

class StyleJson extends React.Component {
  state = {
    showAltStyle: false,
  };

  onPress = () => {
    this.setState({
      showAltStyle: !this.state.showAltStyle,
    });
  };

  render() {
    return (
      <Page>
        <VietmapGL.MapView
          styleURL={vietmap_api.get_style_url}
          style={styles.map}>
          <VietmapGL.Camera defaultSettings={defaultCamera} />
          <VietmapGL.Style
            json={
              this.state.showAltStyle ? StyleJsonExample2 : StyleJsonExample
            }
          />
        </VietmapGL.MapView>
        <Bubble onPress={this.onPress}>
          <Text>{this.state.showAltStyle ? 'Style 2' : 'Style 1'}</Text>
        </Bubble>
      </Page>
    );
  }
}

export default StyleJson;
