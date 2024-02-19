import React from 'react';
import VietmapGL from '@maplibre/maplibre-react-native';

import sheet from '../../styles/sheet';
import TabBarPage from '../common/TabBarPage';

class SetPitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followPitch: 15,
      zoomLevel: 16,
      duration: 300,
    };

    this._pitchOptions = [
      {label: '15', data: 15},
      {label: '45', data: 45},
      {label: '60', data: 60},
    ];

    this.onUpdatePitch = this.onUpdatePitch.bind(this);
  }

  componentDidMount() {
    VietmapGL.locationManager.start();
  }

  componentWillUnmount() {
    VietmapGL.locationManager.stop();
  }

  onUpdatePitch(index, pitch) {
    this.setState({followPitch: pitch});
  }

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={this._pitchOptions}
        onOptionPress={this.onUpdatePitch}>
        <VietmapGL.MapView style={sheet.matchParent}>
          <VietmapGL.Camera {...this.state} followUserLocation />
          <VietmapGL.UserLocation />
        </VietmapGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetPitch;
