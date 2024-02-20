import React, {ReactElement} from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

import {FillLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';

import AbstractLayer, {BaseLayerProps, NativeBaseProps} from './AbstractLayer';

const VietmapGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLFillLayer';

interface FillLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: FillLayerStyleProps;
}

interface NativeProps extends Omit<FillLayerProps, 'style'>, NativeBaseProps {}

/**
 * FillLayer is a style layer that renders one or more filled (and optionally stroked) polygons on the map.
 */
class FillLayer extends AbstractLayer<FillLayerProps, NativeProps> {
  static defaultProps = {
    sourceID: VietmapGL.StyleSource.DefaultSourceID,
  };

  render(): ReactElement {
    const props = {
      ...this.baseProps,
      sourceLayerID: this.props.sourceLayerID,
    };
    return <RCTMGLFillLayer ref={this.setNativeLayer} {...props} />;
  }
}

const RCTMGLFillLayer = requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

export default FillLayer;
