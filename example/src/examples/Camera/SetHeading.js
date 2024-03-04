import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import TabBarPage from '../common/TabBarPage';

class SetHeading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: 0,
      zoomLevel: 16,
      animationDuration: 150,
      followUserLocation: true,
    };

    this._bearingOptions = [
      {label: '0', data: 0},
      {label: '90', data: 90},
      {label: '180', data: 180},
    ];

    this.onHeadingChange = this.onHeadingChange.bind(this);
  }

  componentDidMount() {
    VietmapGL.locationManager.start();
  }

  componentDidUpdate() {
    if (this.state.followUserLocation) {
      this.setState({followUserLocation: false});
    }
  }

  componentWillUnmount() {
    VietmapGL.locationManager.stop();
  }

  onHeadingChange(index, heading) {
    this.setState({heading});
  }

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={this._bearingOptions}
        onOptionPress={this.onHeadingChange}>
        <VietmapGL.MapView
          ref={ref => (this.map = ref)}
          style={sheet.matchParent}>
          <VietmapGL.Camera {...this.state} />
          <VietmapGL.UserLocation />
        </VietmapGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetHeading;
