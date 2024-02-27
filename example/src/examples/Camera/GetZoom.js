import React from 'react';
import {Text} from 'react-native';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import Page from '../common/Page';
import Bubble from '../common/Bubble';

const styles = {
  mapView: {flex: 1},
};

class GetZoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 9,
    };

    this.onRegionDidChange = this.onRegionDidChange.bind(this);
  }

  async onRegionDidChange() {
    const zoom = await this._map.getZoom();
    this.setState({zoom});
  }

  render() {
    return (
      <Page>
        <VietmapGL.MapView
          onRegionDidChange={this.onRegionDidChange}
          ref={c => (this._map = c)}
          onPress={this.onPress}
          style={styles.mapView}>
          <VietmapGL.Camera
            zoomLevel={9}
            centerCoordinate={[-73.970895, 40.723279]}
          />
        </VietmapGL.MapView>

        <Bubble>
          <Text>Current zoom: {this.state.zoom}</Text>
        </Bubble>
      </Page>
    );
  }
}

export default GetZoom;
