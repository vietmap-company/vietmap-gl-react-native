import React from 'react';
import VietmapGL from '@maplibre/maplibre-react-native';

import sheet from '../../styles/sheet';
import TabBarPage from '../common/TabBarPage';

const COLOR = ['red', 'yellow', 'green'];
const OPTIONS = [{label: 'red'}, {label: 'yellow'}, {label: 'green'}];

class SetTintColor extends React.Component {
  state = {tintColor: COLOR[0]};

  onTintColorChange = index => {
    this.setState({tintColor: COLOR[index]});
  };

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={OPTIONS}
        onOptionPress={this.onTintColorChange}>
        <VietmapGL.MapView
          style={sheet.matchParent}
          tintColor={this.state.tintColor}>
          <VietmapGL.Camera
            followZoomLevel={16}
            followUserMode="compass"
            followUserLocation
          />

          <VietmapGL.UserLocation
            renderMode="native"
            androidRenderMode="compass"
          />
        </VietmapGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetTintColor;
