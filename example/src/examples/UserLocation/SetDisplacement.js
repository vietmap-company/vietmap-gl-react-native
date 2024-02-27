import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import TabBarPage from '../common/TabBarPage';

const DISPLACEMENT = [0, 5, 10];
const OPTIONS = [{label: '0 meter'}, {label: '5 meter'}, {label: '10 meter'}];

class SetDisplacement extends React.Component {
  state = {minDisplacement: DISPLACEMENT[0]};

  componentDidMount() {
    VietmapGL.locationManager.start();
  }

  componentWillUnmount() {
    VietmapGL.locationManager.stop();
  }

  onDisplacementChange = index => {
    this.setState({minDisplacement: DISPLACEMENT[index]});
  };

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={OPTIONS}
        onOptionPress={this.onDisplacementChange}>
        <VietmapGL.MapView style={sheet.matchParent}>
          <VietmapGL.Camera
            followZoomLevel={16}
            followUserMode="compass"
            followUserLocation
          />

          <VietmapGL.UserLocation
            minDisplacement={this.state.minDisplacement}
          />
        </VietmapGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetDisplacement;
