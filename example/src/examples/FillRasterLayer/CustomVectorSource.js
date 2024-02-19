import React from 'react';
import VietmapGL from '@maplibre/maplibre-react-native';
import {Text} from 'react-native';

import sheet from '../../styles/sheet';
import Page from '../common/Page';
import Bubble from '../common/Bubble';

const styles = {
  boxFill: {
    fillColor: [
      'interpolate',
      ['linear'],
      ['get', 'box'],
      0,
      'green',
      1,
      'blue',
    ],

    fillAntialias: true,
  },
};

const VECTOR_SOURCE_URL =
  'mapbox://nickitaliano.cj94go8xl18fl2qp92v8bdivv-4kgl9';

class CustomVectorSource extends React.PureComponent {
  state = {
    featuresCount: null,
  };

  queryFeatures = async () => {
    const features = await this._vectorSource.features([
      'react-native-example',
    ]);
    this.setState({featuresCount: features.features.length});
  };

  render() {
    const {featuresCount} = this.state;
    return (
      <Page>
        <VietmapGL.MapView style={sheet.matchParent}>
          <VietmapGL.Camera
            zoomLevel={2}
            centerCoordinate={[-101.051593, 41.370337]}
          />

          <VietmapGL.VectorSource
            id="customSourceExample"
            url={VECTOR_SOURCE_URL}
            ref={source => {
              this._vectorSource = source;
            }}
            onPress={e => {
              console.log(`VectorSource onPress: ${e.features}`, e.features);
            }}>
            <VietmapGL.FillLayer
              id="customSourceFill"
              sourceLayerID="react-native-example"
              style={styles.boxFill}
            />
          </VietmapGL.VectorSource>
        </VietmapGL.MapView>
        <Bubble onPress={this.queryFeatures}>
          <Text>Query features:</Text>
          {featuresCount && <Text>Count: {featuresCount}</Text>}
        </Bubble>
      </Page>
    );
  }
}

export default CustomVectorSource;
