import {LightLayerStyleProps} from '../utils/VietmapStyles';
import BaseProps from '../types/BaseProps';
import {StyleValue, transformStyle} from '../utils/StyleValue';

import AbstractLayer, {BaseLayerProps} from './AbstractLayer';

import React, {
  Component,
  createRef,
  MutableRefObject,
  ReactElement,
} from 'react';
import {NativeMethods, requireNativeComponent} from 'react-native';

export const NATIVE_MODULE_NAME = 'RCTMGLLight';

interface LightProps extends BaseProps {
  /**
   * Customizable style attributes
   */
  style?: LightLayerStyleProps;
}

interface NativeProps extends Omit<LightProps, 'style'> {
  reactStyle?: {[key: string]: StyleValue};
}
/**
 * Light represents the light source for extruded geometries
 */
class Light extends AbstractLayer<LightProps, NativeProps> {
  lightRef: MutableRefObject<
    (Component<NativeProps> & Readonly<NativeMethods>) | null
  >;

  constructor(props: LightProps & BaseLayerProps) {
    super(props);

    this.lightRef = createRef<
      (Component<NativeProps> & Readonly<NativeMethods>) | null
    >();
  }

  setNativeProps(props: LightProps): void {
    if (this.lightRef.current && props.style) {
      const nativeProps = {
        ...props,
        reactStyle: transformStyle(props.style),
      };
      this.lightRef.current.setNativeProps(nativeProps);
    }
  }

  render(): ReactElement {
    return (
      <RCTMGLLight
        ref={this.lightRef}
        testID="rctmglLight"
        {...this.props}
        reactStyle={this.getStyle()}
      />
    );
  }
}

const RCTMGLLight = requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

export default Light;
