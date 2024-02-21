import React, {ReactElement} from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

import {HeatmapLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';

import AbstractLayer, {BaseLayerProps, NativeBaseProps} from './AbstractLayer';

const VietmapGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLHeatmapLayer';

interface HeatmapLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: HeatmapLayerStyleProps;
}

interface NativeProps
  extends Omit<HeatmapLayerProps, 'style'>,
    NativeBaseProps {}

/**
 * HeatmapLayer is a style layer that renders one or more filled circles on the map.
 */
class HeatmapLayer extends AbstractLayer<HeatmapLayerProps, NativeProps> {
  static defaultProps = {
    sourceID: VietmapGL.StyleSource.DefaultSourceID,
  };

  render(): ReactElement {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID,
    };
    return <RCTMGLHeatmapLayer ref={this.setNativeLayer} {...props} />;
  }
}

const RCTMGLHeatmapLayer =
  requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

export default HeatmapLayer;
