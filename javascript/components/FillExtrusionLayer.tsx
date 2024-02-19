import {FillExtrusionLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';

import AbstractLayer, {BaseLayerProps, NativeBaseProps} from './AbstractLayer';

import React, {ReactElement} from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

const VietmapGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLFillExtrusionLayer';

interface FillExtrusionLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: FillExtrusionLayerStyleProps;
}

interface NativeProps
  extends Omit<FillExtrusionLayerProps, 'style'>,
    NativeBaseProps {}

/**
 * FillExtrusionLayer is a style layer that renders one or more 3D extruded polygons on the map.
 */
class FillExtrusionLayer extends AbstractLayer<
  FillExtrusionLayerProps,
  NativeProps
> {
  static defaultProps = {
    sourceID: VietmapGL.StyleSource.DefaultSourceID,
  };

  render(): ReactElement {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID,
    };
    return <RCTMGLFillExtrusionLayer ref={this.setNativeLayer} {...props} />;
  }
}

const RCTMGLFillExtrusionLayer =
  requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

export default FillExtrusionLayer;
