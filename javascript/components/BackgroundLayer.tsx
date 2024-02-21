import React, {ReactNode} from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

import {BackgroundLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';

import AbstractLayer, {BaseLayerProps, NativeBaseProps} from './AbstractLayer';

const VietmapGL = NativeModules.MGLModule;

export const NATIVE_MODULE_NAME = 'RCTMGLBackgroundLayer';

interface BackgroundLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: BackgroundLayerStyleProps;
}

interface NativeProps
  extends Omit<BackgroundLayerProps, 'style'>,
    NativeBaseProps {}

class BackgroundLayer extends AbstractLayer<BackgroundLayerProps, NativeProps> {
  static defaultProps = {
    sourceID: VietmapGL.StyleSource.DefaultSourceID,
  };

  render(): ReactNode {
    return (
      <RCTMGLBackgroundLayer
        testID="rctmglBackgroundLayer"
        ref={this.setNativeLayer}
        {...this.baseProps}
      />
    );
  }
}

const RCTMGLBackgroundLayer =
  requireNativeComponent<BackgroundLayerProps>(NATIVE_MODULE_NAME);

export default BackgroundLayer;
