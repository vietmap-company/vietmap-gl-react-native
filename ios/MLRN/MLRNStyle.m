// DO NOT MODIFY
// This file is auto-generated from scripts/templates/MLRNStyle.m.ejs

#import "MLRNStyle.h"
#import "MLRNUtils.h"

@implementation MLRNStyle

- (id)initWithMLNStyle:(MLNStyle*)mlnStyle
{
    if (self = [super init]) {
        _style = mlnStyle;
    }
    return self;
}


- (void)fillLayer:(MLNFillStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"visibility"]) {
      [self setFillStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillAntialias"]) {
      [self setFillAntialias:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillOpacity"]) {
      [self setFillOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillOpacityTransition"]) {
      [self setFillOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillColor"]) {
      [self setFillColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillColorTransition"]) {
      [self setFillColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillOutlineColor"]) {
      [self setFillOutlineColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillOutlineColorTransition"]) {
      [self setFillOutlineColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillTranslate"]) {
      [self setFillTranslate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillTranslateTransition"]) {
      [self setFillTranslateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillTranslateAnchor"]) {
      [self setFillTranslateAnchor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"fillPattern"]) {
      if (![styleValue shouldAddImage]) {
        [self setFillPattern:layer withReactStyleValue:styleValue];
      } else {
        NSString *imageURI = [styleValue getImageURI];

        [MLRNUtils fetchImage:_bridge url:imageURI scale:[styleValue getImageScale] callback:^(NSError *error, UIImage *image) {
          if (image != nil) {
            dispatch_async(dispatch_get_main_queue(), ^{
              if (isValid()) {
                [self->_style setImage:image forName:imageURI];
                [self setFillPattern:layer withReactStyleValue:styleValue];
              }
            });
          }
        }];
      }
    } else if ([prop isEqualToString:@"fillPatternTransition"]) {
      [self setFillPatternTransition:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)lineLayer:(MLNLineStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"lineCap"]) {
      [self setLineCap:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineJoin"]) {
      [self setLineJoin:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineMiterLimit"]) {
      [self setLineMiterLimit:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineRoundLimit"]) {
      [self setLineRoundLimit:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"visibility"]) {
      [self setLineStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineOpacity"]) {
      [self setLineOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineOpacityTransition"]) {
      [self setLineOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineColor"]) {
      [self setLineColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineColorTransition"]) {
      [self setLineColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineTranslate"]) {
      [self setLineTranslate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineTranslateTransition"]) {
      [self setLineTranslateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineTranslateAnchor"]) {
      [self setLineTranslateAnchor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineWidth"]) {
      [self setLineWidth:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineWidthTransition"]) {
      [self setLineWidthTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineGapWidth"]) {
      [self setLineGapWidth:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineGapWidthTransition"]) {
      [self setLineGapWidthTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineOffset"]) {
      [self setLineOffset:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineOffsetTransition"]) {
      [self setLineOffsetTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineBlur"]) {
      [self setLineBlur:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineBlurTransition"]) {
      [self setLineBlurTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineDasharray"]) {
      [self setLineDasharray:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"lineDasharrayTransition"]) {
      [self setLineDasharrayTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"linePattern"]) {
      if (![styleValue shouldAddImage]) {
        [self setLinePattern:layer withReactStyleValue:styleValue];
      } else {
        NSString *imageURI = [styleValue getImageURI];

        [MLRNUtils fetchImage:_bridge url:imageURI scale:[styleValue getImageScale] callback:^(NSError *error, UIImage *image) {
          if (image != nil) {
            dispatch_async(dispatch_get_main_queue(), ^{
              if (isValid()) {
                [self->_style setImage:image forName:imageURI];
                [self setLinePattern:layer withReactStyleValue:styleValue];
              }
            });
          }
        }];
      }
    } else if ([prop isEqualToString:@"linePatternTransition"]) {
      [self setLinePatternTransition:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)symbolLayer:(MLNSymbolStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"symbolPlacement"]) {
      [self setSymbolPlacement:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"symbolSpacing"]) {
      [self setSymbolSpacing:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"symbolAvoidEdges"]) {
      [self setSymbolAvoidEdges:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconAllowOverlap"]) {
      [self setIconAllowOverlap:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconIgnorePlacement"]) {
      [self setIconIgnorePlacement:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconOptional"]) {
      [self setIconOptional:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconRotationAlignment"]) {
      [self setIconRotationAlignment:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconSize"]) {
      [self setIconSize:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconImage"]) {
      if (![styleValue shouldAddImage]) {
        [self setIconImage:layer withReactStyleValue:styleValue];
      } else {
        NSString *imageURI = [styleValue getImageURI];

        [MLRNUtils fetchImage:_bridge url:imageURI scale:[styleValue getImageScale] callback:^(NSError *error, UIImage *image) {
          if (image != nil) {
            dispatch_async(dispatch_get_main_queue(), ^{
              if (isValid()) {
                [self->_style setImage:image forName:imageURI];
                [self setIconImage:layer withReactStyleValue:styleValue];
              }
            });
          }
        }];
      }
    } else if ([prop isEqualToString:@"iconRotate"]) {
      [self setIconRotate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconPadding"]) {
      [self setIconPadding:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconKeepUpright"]) {
      [self setIconKeepUpright:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconOffset"]) {
      [self setIconOffset:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textRotationAlignment"]) {
      [self setTextRotationAlignment:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textField"]) {
      [self setTextField:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textFont"]) {
      [self setTextFont:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textSize"]) {
      [self setTextSize:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textMaxWidth"]) {
      [self setTextMaxWidth:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textLineHeight"]) {
      [self setTextLineHeight:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textLetterSpacing"]) {
      [self setTextLetterSpacing:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textJustify"]) {
      [self setTextJustify:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textAnchor"]) {
      [self setTextAnchor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textMaxAngle"]) {
      [self setTextMaxAngle:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textRotate"]) {
      [self setTextRotate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textPadding"]) {
      [self setTextPadding:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textKeepUpright"]) {
      [self setTextKeepUpright:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textTransform"]) {
      [self setTextTransform:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textOffset"]) {
      [self setTextOffset:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textAllowOverlap"]) {
      [self setTextAllowOverlap:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textIgnorePlacement"]) {
      [self setTextIgnorePlacement:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textOptional"]) {
      [self setTextOptional:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"visibility"]) {
      [self setSymbolStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconOpacity"]) {
      [self setIconOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconOpacityTransition"]) {
      [self setIconOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconColor"]) {
      [self setIconColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconColorTransition"]) {
      [self setIconColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloColor"]) {
      [self setIconHaloColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloColorTransition"]) {
      [self setIconHaloColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloWidth"]) {
      [self setIconHaloWidth:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloWidthTransition"]) {
      [self setIconHaloWidthTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloBlur"]) {
      [self setIconHaloBlur:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconHaloBlurTransition"]) {
      [self setIconHaloBlurTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconTranslate"]) {
      [self setIconTranslate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconTranslateTransition"]) {
      [self setIconTranslateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"iconTranslateAnchor"]) {
      [self setIconTranslateAnchor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textOpacity"]) {
      [self setTextOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textOpacityTransition"]) {
      [self setTextOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textColor"]) {
      [self setTextColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textColorTransition"]) {
      [self setTextColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloColor"]) {
      [self setTextHaloColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloColorTransition"]) {
      [self setTextHaloColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloWidth"]) {
      [self setTextHaloWidth:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloWidthTransition"]) {
      [self setTextHaloWidthTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloBlur"]) {
      [self setTextHaloBlur:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textHaloBlurTransition"]) {
      [self setTextHaloBlurTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textTranslate"]) {
      [self setTextTranslate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textTranslateTransition"]) {
      [self setTextTranslateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"textTranslateAnchor"]) {
      [self setTextTranslateAnchor:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)circleLayer:(MLNCircleStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"visibility"]) {
      [self setCircleStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleRadius"]) {
      [self setCircleRadius:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleRadiusTransition"]) {
      [self setCircleRadiusTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleColor"]) {
      [self setCircleColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleColorTransition"]) {
      [self setCircleColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleBlur"]) {
      [self setCircleBlur:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleBlurTransition"]) {
      [self setCircleBlurTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleOpacity"]) {
      [self setCircleOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleOpacityTransition"]) {
      [self setCircleOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleTranslate"]) {
      [self setCircleTranslate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleTranslateTransition"]) {
      [self setCircleTranslateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"circleTranslateAnchor"]) {
      [self setCircleTranslateAnchor:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)rasterLayer:(MLNRasterStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"visibility"]) {
      [self setRasterStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterOpacity"]) {
      [self setRasterOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterOpacityTransition"]) {
      [self setRasterOpacityTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterHueRotate"]) {
      [self setRasterHueRotate:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterHueRotateTransition"]) {
      [self setRasterHueRotateTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterBrightnessMin"]) {
      [self setRasterBrightnessMin:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterBrightnessMinTransition"]) {
      [self setRasterBrightnessMinTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterBrightnessMax"]) {
      [self setRasterBrightnessMax:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterBrightnessMaxTransition"]) {
      [self setRasterBrightnessMaxTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterSaturation"]) {
      [self setRasterSaturation:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterSaturationTransition"]) {
      [self setRasterSaturationTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterContrast"]) {
      [self setRasterContrast:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterContrastTransition"]) {
      [self setRasterContrastTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"rasterFadeDuration"]) {
      [self setRasterFadeDuration:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)backgroundLayer:(MLNBackgroundStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    if ([prop isEqualToString:@"visibility"]) {
      [self setBackgroundStyleLayerVisibility:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"backgroundColor"]) {
      [self setBackgroundColor:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"backgroundColorTransition"]) {
      [self setBackgroundColorTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"backgroundPattern"]) {
      if (![styleValue shouldAddImage]) {
        [self setBackgroundPattern:layer withReactStyleValue:styleValue];
      } else {
        NSString *imageURI = [styleValue getImageURI];

        [MLRNUtils fetchImage:_bridge url:imageURI scale:[styleValue getImageScale] callback:^(NSError *error, UIImage *image) {
          if (image != nil) {
            dispatch_async(dispatch_get_main_queue(), ^{
              if (isValid()) {
                [self->_style setImage:image forName:imageURI];
                [self setBackgroundPattern:layer withReactStyleValue:styleValue];
              }
            });
          }
        }];
      }
    } else if ([prop isEqualToString:@"backgroundPatternTransition"]) {
      [self setBackgroundPatternTransition:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"backgroundOpacity"]) {
      [self setBackgroundOpacity:layer withReactStyleValue:styleValue];
    } else if ([prop isEqualToString:@"backgroundOpacityTransition"]) {
      [self setBackgroundOpacityTransition:layer withReactStyleValue:styleValue];
    } else {
      // TODO throw exception
    }
  }
}

- (void)lightLayer:(MLNLight *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid
{
  if (![self _hasReactStyle:reactStyle]) {
    // TODO throw exception
    return;
  }

  NSArray<NSString*> *styleProps = [reactStyle allKeys];
  for (NSString *prop in styleProps) {
    MLRNStyleValue *styleValue = [MLRNStyleValue make:reactStyle[prop]];

    } else {
      // TODO throw exception
    }
  }
}




- (void)setFillStyleLayerVisibility:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setFillAntialias:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillAntialiased = styleValue.mlnStyleValue;
}

- (void)setFillOpacity:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillOpacity = styleValue.mlnStyleValue;
}

- (void)setFillOpacityTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillOpacityTransition = [styleValue getTransition];
}

- (void)setFillColor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillColor = styleValue.mlnStyleValue;
}

- (void)setFillColorTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillColorTransition = [styleValue getTransition];
}

- (void)setFillOutlineColor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillOutlineColor = styleValue.mlnStyleValue;
}

- (void)setFillOutlineColorTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillOutlineColorTransition = [styleValue getTransition];
}

- (void)setFillTranslate:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillTranslation = styleValue.mlnStyleValue;
}

- (void)setFillTranslateTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillTranslationTransition = [styleValue getTransition];
}

- (void)setFillTranslateAnchor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillTranslationAnchor = styleValue.mlnStyleValue;
}

- (void)setFillPattern:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillPattern = styleValue.mlnStyleValue;
}

- (void)setFillPatternTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.fillPatternTransition = [styleValue getTransition];
}



- (void)setLineCap:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineCap = styleValue.mlnStyleValue;
}

- (void)setLineJoin:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineJoin = styleValue.mlnStyleValue;
}

- (void)setLineMiterLimit:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineMiterLimit = styleValue.mlnStyleValue;
}

- (void)setLineRoundLimit:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineRoundLimit = styleValue.mlnStyleValue;
}

- (void)setLineStyleLayerVisibility:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setLineOpacity:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineOpacity = styleValue.mlnStyleValue;
}

- (void)setLineOpacityTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineOpacityTransition = [styleValue getTransition];
}

- (void)setLineColor:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineColor = styleValue.mlnStyleValue;
}

- (void)setLineColorTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineColorTransition = [styleValue getTransition];
}

- (void)setLineTranslate:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineTranslation = styleValue.mlnStyleValue;
}

- (void)setLineTranslateTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineTranslationTransition = [styleValue getTransition];
}

- (void)setLineTranslateAnchor:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineTranslationAnchor = styleValue.mlnStyleValue;
}

- (void)setLineWidth:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineWidth = styleValue.mlnStyleValue;
}

- (void)setLineWidthTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineWidthTransition = [styleValue getTransition];
}

- (void)setLineGapWidth:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineGapWidth = styleValue.mlnStyleValue;
}

- (void)setLineGapWidthTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineGapWidthTransition = [styleValue getTransition];
}

- (void)setLineOffset:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineOffset = styleValue.mlnStyleValue;
}

- (void)setLineOffsetTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineOffsetTransition = [styleValue getTransition];
}

- (void)setLineBlur:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineBlur = styleValue.mlnStyleValue;
}

- (void)setLineBlurTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineBlurTransition = [styleValue getTransition];
}

- (void)setLineDasharray:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineDashPattern = styleValue.mlnStyleValue;
}

- (void)setLineDasharrayTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.lineDashPatternTransition = [styleValue getTransition];
}

- (void)setLinePattern:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.linePattern = styleValue.mlnStyleValue;
}

- (void)setLinePatternTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.linePatternTransition = [styleValue getTransition];
}



- (void)setSymbolPlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.symbolPlacement = styleValue.mlnStyleValue;
}

- (void)setSymbolSpacing:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.symbolSpacing = styleValue.mlnStyleValue;
}

- (void)setSymbolAvoidEdges:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.symbolAvoidsEdges = styleValue.mlnStyleValue;
}

- (void)setIconAllowOverlap:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconAllowsOverlap = styleValue.mlnStyleValue;
}

- (void)setIconIgnorePlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconIgnoresPlacement = styleValue.mlnStyleValue;
}

- (void)setIconOptional:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconOptional = styleValue.mlnStyleValue;
}

- (void)setIconRotationAlignment:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconRotationAlignment = styleValue.mlnStyleValue;
}

- (void)setIconSize:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconScale = styleValue.mlnStyleValue;
}

- (void)setIconImage:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconImageName = styleValue.mlnStyleValue;
}

- (void)setIconRotate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconRotation = styleValue.mlnStyleValue;
}

- (void)setIconPadding:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconPadding = styleValue.mlnStyleValue;
}

- (void)setIconKeepUpright:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.keepsIconUpright = styleValue.mlnStyleValue;
}

- (void)setIconOffset:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconOffset = styleValue.mlnStyleValue;
}

- (void)setTextRotationAlignment:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textRotationAlignment = styleValue.mlnStyleValue;
}

- (void)setTextField:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.text = styleValue.mlnStyleValue;
}

- (void)setTextFont:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textFontNames = styleValue.mlnStyleValue;
}

- (void)setTextSize:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textFontSize = styleValue.mlnStyleValue;
}

- (void)setTextMaxWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.maximumTextWidth = styleValue.mlnStyleValue;
}

- (void)setTextLineHeight:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textLineHeight = styleValue.mlnStyleValue;
}

- (void)setTextLetterSpacing:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textLetterSpacing = styleValue.mlnStyleValue;
}

- (void)setTextJustify:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textJustification = styleValue.mlnStyleValue;
}

- (void)setTextAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textAnchor = styleValue.mlnStyleValue;
}

- (void)setTextMaxAngle:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.maximumTextAngle = styleValue.mlnStyleValue;
}

- (void)setTextRotate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textRotation = styleValue.mlnStyleValue;
}

- (void)setTextPadding:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textPadding = styleValue.mlnStyleValue;
}

- (void)setTextKeepUpright:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.keepsTextUpright = styleValue.mlnStyleValue;
}

- (void)setTextTransform:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textTransform = styleValue.mlnStyleValue;
}

- (void)setTextOffset:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textOffset = styleValue.mlnStyleValue;
}

- (void)setTextAllowOverlap:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textAllowsOverlap = styleValue.mlnStyleValue;
}

- (void)setTextIgnorePlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textIgnoresPlacement = styleValue.mlnStyleValue;
}

- (void)setTextOptional:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textOptional = styleValue.mlnStyleValue;
}

- (void)setSymbolStyleLayerVisibility:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setIconOpacity:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconOpacity = styleValue.mlnStyleValue;
}

- (void)setIconOpacityTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconOpacityTransition = [styleValue getTransition];
}

- (void)setIconColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconColor = styleValue.mlnStyleValue;
}

- (void)setIconColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconColorTransition = [styleValue getTransition];
}

- (void)setIconHaloColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloColor = styleValue.mlnStyleValue;
}

- (void)setIconHaloColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloColorTransition = [styleValue getTransition];
}

- (void)setIconHaloWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloWidth = styleValue.mlnStyleValue;
}

- (void)setIconHaloWidthTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloWidthTransition = [styleValue getTransition];
}

- (void)setIconHaloBlur:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloBlur = styleValue.mlnStyleValue;
}

- (void)setIconHaloBlurTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconHaloBlurTransition = [styleValue getTransition];
}

- (void)setIconTranslate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconTranslation = styleValue.mlnStyleValue;
}

- (void)setIconTranslateTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconTranslationTransition = [styleValue getTransition];
}

- (void)setIconTranslateAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.iconTranslationAnchor = styleValue.mlnStyleValue;
}

- (void)setTextOpacity:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textOpacity = styleValue.mlnStyleValue;
}

- (void)setTextOpacityTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textOpacityTransition = [styleValue getTransition];
}

- (void)setTextColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textColor = styleValue.mlnStyleValue;
}

- (void)setTextColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textColorTransition = [styleValue getTransition];
}

- (void)setTextHaloColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloColor = styleValue.mlnStyleValue;
}

- (void)setTextHaloColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloColorTransition = [styleValue getTransition];
}

- (void)setTextHaloWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloWidth = styleValue.mlnStyleValue;
}

- (void)setTextHaloWidthTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloWidthTransition = [styleValue getTransition];
}

- (void)setTextHaloBlur:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloBlur = styleValue.mlnStyleValue;
}

- (void)setTextHaloBlurTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textHaloBlurTransition = [styleValue getTransition];
}

- (void)setTextTranslate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textTranslation = styleValue.mlnStyleValue;
}

- (void)setTextTranslateTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textTranslationTransition = [styleValue getTransition];
}

- (void)setTextTranslateAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.textTranslationAnchor = styleValue.mlnStyleValue;
}



- (void)setCircleStyleLayerVisibility:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setCircleRadius:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleRadius = styleValue.mlnStyleValue;
}

- (void)setCircleRadiusTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleRadiusTransition = [styleValue getTransition];
}

- (void)setCircleColor:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleColor = styleValue.mlnStyleValue;
}

- (void)setCircleColorTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleColorTransition = [styleValue getTransition];
}

- (void)setCircleBlur:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleBlur = styleValue.mlnStyleValue;
}

- (void)setCircleBlurTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleBlurTransition = [styleValue getTransition];
}

- (void)setCircleOpacity:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleOpacity = styleValue.mlnStyleValue;
}

- (void)setCircleOpacityTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleOpacityTransition = [styleValue getTransition];
}

- (void)setCircleTranslate:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleTranslation = styleValue.mlnStyleValue;
}

- (void)setCircleTranslateTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleTranslationTransition = [styleValue getTransition];
}

- (void)setCircleTranslateAnchor:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.circleTranslationAnchor = styleValue.mlnStyleValue;
}



- (void)setRasterStyleLayerVisibility:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setRasterOpacity:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterOpacity = styleValue.mlnStyleValue;
}

- (void)setRasterOpacityTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterOpacityTransition = [styleValue getTransition];
}

- (void)setRasterHueRotate:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterHueRotation = styleValue.mlnStyleValue;
}

- (void)setRasterHueRotateTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterHueRotationTransition = [styleValue getTransition];
}

- (void)setRasterBrightnessMin:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.minimumRasterBrightness = styleValue.mlnStyleValue;
}

- (void)setRasterBrightnessMinTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.minimumRasterBrightnessTransition = [styleValue getTransition];
}

- (void)setRasterBrightnessMax:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.maximumRasterBrightness = styleValue.mlnStyleValue;
}

- (void)setRasterBrightnessMaxTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.maximumRasterBrightnessTransition = [styleValue getTransition];
}

- (void)setRasterSaturation:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterSaturation = styleValue.mlnStyleValue;
}

- (void)setRasterSaturationTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterSaturationTransition = [styleValue getTransition];
}

- (void)setRasterContrast:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterContrast = styleValue.mlnStyleValue;
}

- (void)setRasterContrastTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterContrastTransition = [styleValue getTransition];
}

- (void)setRasterFadeDuration:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.rasterFadeDuration = styleValue.mlnStyleValue;
}



- (void)setBackgroundStyleLayerVisibility:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.visible = [styleValue isVisible];
}

- (void)setBackgroundColor:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundColor = styleValue.mlnStyleValue;
}

- (void)setBackgroundColorTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundColorTransition = [styleValue getTransition];
}

- (void)setBackgroundPattern:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundPattern = styleValue.mlnStyleValue;
}

- (void)setBackgroundPatternTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundPatternTransition = [styleValue getTransition];
}

- (void)setBackgroundOpacity:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundOpacity = styleValue.mlnStyleValue;
}

- (void)setBackgroundOpacityTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue
{
    layer.backgroundOpacityTransition = [styleValue getTransition];
}





- (BOOL)_hasReactStyle:(NSDictionary *)reactStyle
{
  return reactStyle != nil && reactStyle.allKeys.count > 0;
}

@end
