import React from 'react';
import {View, StyleSheet} from 'react-native';
import VietmapGL from '@vietmap/vietmap-gl-react-native';
import {Slider} from 'react-native-elements';

import sheet from '../../styles/sheet';
import colors from '../../styles/colors';
import {SF_OFFICE_COORDINATE} from '../../utils';
import Page from '../common/Page';

const styles = StyleSheet.create({
  slider: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    maxHeight: 60,
    paddingHorizontal: 24,
  },
});

class WatercolorRasterTiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1,
    };

    this.onOpacityChange = this.onOpacityChange.bind(this);
  }

  onOpacityChange(value) {
    this.setState({opacity: value});
  }

  render() {
    const rasterSourceProps = {
      id: 'stamenWatercolorSource',
      tileUrlTemplates: [
        'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg',
      ],
      tileSize: 256,
    };

    return (
      <Page>
        <VietmapGL.MapView style={sheet.matchParent}>
          <VietmapGL.Camera
            zoomLevel={16}
            centerCoordinate={SF_OFFICE_COORDINATE}
          />

          <VietmapGL.RasterSource {...rasterSourceProps}>
            <VietmapGL.RasterLayer
              id="stamenWatercolorLayer"
              sourceID="stamenWatercolorSource"
              style={{rasterOpacity: this.state.opacity}}
            />
          </VietmapGL.RasterSource>
        </VietmapGL.MapView>

        <View style={styles.slider}>
          <Slider
            value={this.state.opacity}
            onValueChange={this.onOpacityChange}
            thumbTintColor={colors.primary.blue}
            thumbTouchSize={{width: 44, height: 44}}
            maximumTrackTintColor={colors.secondary.purpleLight}
            minimumTrackTintColor={colors.secondary.purpleDark}
          />
        </View>
      </Page>
    );
  }
}

export default WatercolorRasterTiles;
