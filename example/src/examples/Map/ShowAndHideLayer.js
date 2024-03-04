import React from 'react';
import {Text} from 'react-native';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import Page from '../common/Page';
import Bubble from '../common/Bubble';

const defaultCamera = {
  centerCoordinate: [-77.036532, 38.897318],
  zoomLevel: 2,
};

const styles = {
  mapView: {flex: 1},
};

class ShowAndHideLayer extends React.Component {
  state = {
    show: true,
  };

  onPress = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const visibility = this.state.show ? 'visible' : 'none';
    return (
      <Page>
        <VietmapGL.MapView
          ref={c => (this._map = c)}
          onPress={this.onPress}
          style={styles.mapView}>
          <VietmapGL.Camera defaultSettings={defaultCamera} />
          <VietmapGL.FillLayer id="countries-label" style={{visibility}} />
        </VietmapGL.MapView>
        <Bubble onPress={this.onPress}>
          <Text>
            {this.state.show ? 'Hide Country Labels' : 'Show Country Labels'}
          </Text>
        </Bubble>
      </Page>
    );
  }
}

export default ShowAndHideLayer;
