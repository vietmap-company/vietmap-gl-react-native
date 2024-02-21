import React, {ReactElement} from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

import {LineLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';

import AbstractLayer, {BaseLayerProps, NativeBaseProps} from './AbstractLayer';

const VietmapGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLLineLayer';

interface LineLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: LineLayerStyleProps;
}

interface NativeProps extends Omit<LineLayerProps, 'style'>, NativeBaseProps {}

/**
 * LineLayer is a style layer that renders one or more stroked polylines on the map.
 */
class LineLayer extends AbstractLayer<LineLayerProps, NativeProps> {
  static defaultProps = {
    sourceID: VietmapGL.StyleSource.DefaultSourceID,
  };

  render(): ReactElement {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID,
    };
    return <RCTMGLLineLayer ref={this.setNativeLayer} {...props} />;
  }
}

const RCTMGLLineLayer =
  requireNativeComponent<NativeBaseProps>(NATIVE_MODULE_NAME);

export default LineLayer;
