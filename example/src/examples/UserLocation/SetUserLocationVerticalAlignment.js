import React from 'react';
import VietmapGL from '@vietmap/vietmap-gl-react-native';

import sheet from '../../styles/sheet';
import TabBarPage from '../common/TabBarPage';

const Alignments = {
  Center: [0, 0, 0, 0],
  Bottom: [300, 0, 0, 0],
  Top: [0, 0, 300, 0],
};

class SetUserLocationVerticalAlignment extends React.Component {
  constructor(props) {
    super(props);

    this._alignmentOptions = Object.keys(Alignments).map(key => {
      console.log('key: ', key);

      return {
        label: key,
        data: key,
      };
    });

    this.state = {
      currentAlignmentMode: Alignments.Center,
    };

    this.onAlignmentChange = this.onAlignmentChange.bind(this);
  }

  onAlignmentChange(index, userLocationVerticalAlignment) {
    this.setState({
      currentAlignmentMode: Alignments[userLocationVerticalAlignment],
    });
  }

  render() {
    return (
      <TabBarPage
        {...this.props}
        options={this._alignmentOptions}
        onOptionPress={this.onAlignmentChange}>
        <VietmapGL.MapView
          contentInset={this.state.currentAlignmentMode}
          style={sheet.matchParent}>
          <VietmapGL.Camera followUserLocation />
          <VietmapGL.UserLocation />
        </VietmapGL.MapView>
      </TabBarPage>
    );
  }
}

export default SetUserLocationVerticalAlignment;
