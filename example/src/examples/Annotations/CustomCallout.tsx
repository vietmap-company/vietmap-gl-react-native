import React, {FC, useState} from 'react';
import VietmapGL, {SymbolLayerStyle} from '@vietmap/vietmap-gl-react-native';
import {Feature} from '@turf/helpers/dist/js';
import {View, Text, ViewStyle, StyleProp, TextStyle} from 'react-native';
import {ReactElement} from 'react';

import exampleIcon from '../../assets/pin.png';
import sheet from '../../styles/sheet';
import Page from '../common/Page';

const defaultCamera = {
  centerCoordinate: [12.338, 45.4385],
  zoomLevel: 17.4,
};

const featureCollection: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: '9d10456e-bdda-4aa9-9269-04c1667d4552',
      properties: {
        icon: 'example',
        message: 'Hello!',
      },
      geometry: {
        type: 'Point',
        coordinates: [12.338, 45.4385],
      },
    },
  ],
};

type CustomCalloutViewProps = {
  message: string;
};

const CustomCalloutView: FC<CustomCalloutViewProps> = ({message}) => {
  return (
    <View style={styles.calloutContainerStyle}>
      <Text style={styles.customCalloutText}>{message}</Text>
    </View>
  );
};

type CustomCalloutProps = {
  label: string;
};

const CustomCallout = (props: CustomCalloutProps): ReactElement => {
  const [selectedFeature, setSelectedFeature] =
    useState<Feature<{type: string; coordinates: number[]}>>();

  const onPinPress = (e: any): void => {
    if (selectedFeature) {
      setSelectedFeature(undefined);
      return;
    }

    const feature = e?.features[0];
    setSelectedFeature(feature);
  };

  return (
    <Page {...props}>
      <VietmapGL.MapView style={sheet.matchParent}>
        <VietmapGL.Camera defaultSettings={defaultCamera} />
        <VietmapGL.ShapeSource
          id="mapPinsSource"
          shape={featureCollection}
          onPress={onPinPress}>
          <VietmapGL.SymbolLayer id="mapPinsLayer" style={styles.mapPinLayer} />
        </VietmapGL.ShapeSource>
        {selectedFeature && (
          <VietmapGL.MarkerView
            id="selectedFeatureMarkerView"
            coordinate={selectedFeature.geometry.coordinates}>
            <CustomCalloutView message={selectedFeature?.properties?.message} />
          </VietmapGL.MarkerView>
        )}
      </VietmapGL.MapView>
    </Page>
  );
};

interface CustomCalloutStyles {
  mapPinLayer: SymbolLayerStyle;
  customCalloutText: StyleProp<TextStyle>;
  calloutContainerStyle: StyleProp<ViewStyle>;
}

const styles: CustomCalloutStyles = {
  mapPinLayer: {
    iconAllowOverlap: true,
    iconAnchor: 'bottom',
    iconSize: 1.0,
    iconImage: exampleIcon,
  },
  customCalloutText: {
    color: 'black',
    fontSize: 16,
  },
  calloutContainerStyle: {
    backgroundColor: 'white',
    width: 60,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default CustomCallout;
