// DO NOT MODIFY
// This file is auto-generated from scripts/templates/MLRNStyle.h.ejs

#import "MLRNStyle.h"
#import "MLRNStyleValue.h"
#import <React/RCTBridge.h>

@import VietMap;

@interface MLRNStyle : NSObject

@property (nonatomic, weak) RCTBridge *bridge;
@property (nonatomic, strong) MLNStyle *style;

- (id)initWithMLNStyle:(MLNStyle*)mlnStyle;

- (void)fillLayer:(MLNFillStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)lineLayer:(MLNLineStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)symbolLayer:(MLNSymbolStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)circleLayer:(MLNCircleStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)rasterLayer:(MLNRasterStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)backgroundLayer:(MLNBackgroundStyleLayer *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;
- (void)lightLayer:(MLNLight *)layer withReactStyle:(NSDictionary *)reactStyle isValid:(BOOL (^)(void)) isValid;

- (void)setFillStyleLayerVisibility:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillAntialias:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillOpacity:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillOpacityTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillColor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillColorTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillOutlineColor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillOutlineColorTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillTranslate:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillTranslateTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillTranslateAnchor:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillPattern:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setFillPatternTransition:(MLNFillStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineCap:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineJoin:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineMiterLimit:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineRoundLimit:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineStyleLayerVisibility:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineOpacity:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineOpacityTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineColor:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineColorTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineTranslate:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineTranslateTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineTranslateAnchor:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineWidth:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineWidthTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineGapWidth:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineGapWidthTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineOffset:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineOffsetTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineBlur:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineBlurTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineDasharray:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLineDasharrayTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLinePattern:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setLinePatternTransition:(MLNLineStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setSymbolPlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setSymbolSpacing:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setSymbolAvoidEdges:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconAllowOverlap:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconIgnorePlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconOptional:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconRotationAlignment:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconSize:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconImage:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconRotate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconPadding:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconKeepUpright:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconOffset:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextRotationAlignment:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextField:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextFont:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextSize:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextMaxWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextLineHeight:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextLetterSpacing:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextJustify:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextMaxAngle:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextRotate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextPadding:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextKeepUpright:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextTransform:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextOffset:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextAllowOverlap:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextIgnorePlacement:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextOptional:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setSymbolStyleLayerVisibility:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconOpacity:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconOpacityTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloWidthTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloBlur:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconHaloBlurTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconTranslate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconTranslateTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setIconTranslateAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextOpacity:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextOpacityTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloColor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloColorTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloWidth:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloWidthTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloBlur:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextHaloBlurTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextTranslate:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextTranslateTransition:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setTextTranslateAnchor:(MLNSymbolStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleStyleLayerVisibility:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleRadius:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleRadiusTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleColor:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleColorTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleBlur:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleBlurTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleOpacity:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleOpacityTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleTranslate:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleTranslateTransition:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setCircleTranslateAnchor:(MLNCircleStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterStyleLayerVisibility:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterOpacity:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterOpacityTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterHueRotate:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterHueRotateTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterBrightnessMin:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterBrightnessMinTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterBrightnessMax:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterBrightnessMaxTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterSaturation:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterSaturationTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterContrast:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterContrastTransition:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setRasterFadeDuration:(MLNRasterStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundStyleLayerVisibility:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundColor:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundColorTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundPattern:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundPatternTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundOpacity:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;
- (void)setBackgroundOpacityTransition:(MLNBackgroundStyleLayer *)layer withReactStyleValue:(MLRNStyleValue *)styleValue;


@end
