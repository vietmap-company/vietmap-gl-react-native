import React from 'react';
import {Text} from 'react-native';
import VietmapGL from '@maplibre/maplibre-react-native';

import sheet from '../../styles/sheet';
import {DEFAULT_CENTER_COORDINATE} from '../../utils';
import Page from '../common/Page';
import Bubble from '../common/Bubble';

class ShowClick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: undefined,
      longitude: undefined,
      screenPointX: undefined,
      screenPointY: undefined,
    };

    this.onPress = this.onPress.bind(this);
  }

  get hasValidLastClick() {
    return (
      typeof this.state.latitude === 'number' &&
      typeof this.state.longitude === 'number'
    );
  }

  onPress(event) {
    const {geometry, properties} = event;

    this.setState({
      latitude: geometry.coordinates[1],
      longitude: geometry.coordinates[0],
      screenPointX: properties.screenPointX,
      screenPointY: properties.screenPointY,
    });
  }

  renderLastClicked() {
    if (!this.hasValidLastClick) {
      return (
        <Bubble>
          <Text>Click the map!</Text>
        </Bubble>
      );
    }

    return (
      <Bubble>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>Screen Point X: {this.state.screenPointX}</Text>
        <Text>Screen Point Y: {this.state.screenPointY}</Text>
      </Bubble>
    );
  }

  render() {
    return (
      <Page>
        <VietmapGL.MapView style={sheet.matchParent} onPress={this.onPress}>
          <VietmapGL.Camera centerCoordinate={DEFAULT_CENTER_COORDINATE} />
        </VietmapGL.MapView>
        {this.renderLastClicked()}
      </Page>
    );
  }
}

export default ShowClick;
