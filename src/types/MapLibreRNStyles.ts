// DO NOT MODIFY
// This file is auto-generated from scripts/templates/MapLibreRNStyles.ts.ejs

import { type ImageSourcePropType } from "react-native";

export type Translation = { x: number; y: number } | [number, number];

export interface Transition {
  duration: number;
  delay: number;
}

export type FormattedString = string;

export type ExpressionName =
  // Types
  | "array"
  | "boolean"
  | "collator"
  | "format"
  | "image"
  | "literal"
  | "number"
  | "number-format"
  | "object"
  | "string"
  | "to-boolean"
  | "to-color"
  | "to-number"
  | "to-string"
  | "typeof"
  // Feature data
  | "accumulated"
  | "feature-state"
  | "geometry-type"
  | "id"
  | "line-progress"
  | "properties"
  // Lookup
  | "at"
  | "get"
  | "has"
  | "in"
  | "index-of"
  | "length"
  | "slice"
  // Decision
  | "!"
  | "!="
  | "<"
  | "<="
  | "=="
  | ">"
  | ">="
  | "all"
  | "any"
  | "case"
  | "match"
  | "coalesce"
  | "within"
  // Ramps, scales, curves
  | "interpolate"
  | "interpolate-hcl"
  | "interpolate-lab"
  | "step"
  // Variable binding
  | "let"
  | "var"
  // String
  | "concat"
  | "downcase"
  | "is-supported-script"
  | "resolved-locale"
  | "upcase"
  // Color
  | "rgb"
  | "rgba"
  | "to-rgba"
  // Math
  | "-"
  | "*"
  | "/"
  | "%"
  | "^"
  | "+"
  | "abs"
  | "acos"
  | "asin"
  | "atan"
  | "ceil"
  | "cos"
  | "distance"
  | "e"
  | "floor"
  | "ln"
  | "ln2"
  | "log10"
  | "log2"
  | "max"
  | "min"
  | "pi"
  | "round"
  | "sin"
  | "sqrt"
  | "tan"
  // Zoom, Heatmap
  | "zoom"
  | "heatmap-density";

export type ExpressionField =
  | string
  | number
  | boolean
  | Expression
  | ExpressionField[]
  | { [key: string]: ExpressionField };

export type Expression = readonly [ExpressionName, ...ExpressionField[]];

export type FilterExpression = Expression;

type ExpressionParameters =
  | "zoom"
  | "feature"
  | "feature-state"
  | "sky-radial-progress"
  | "line-progress"
  | "heatmap-density";

type ResolvedImageType = ImageSourcePropType | string;

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Value<T, AllowedParameters extends ExpressionParameters[] = []> =
  | T
  | Expression;

export interface FillLayerStyle {
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * Whether or not the fill should be antialiased.
   */
  fillAntialias?: Value<boolean, ["zoom"]>;
  /**
   * The opacity of the entire fill layer. In contrast to the `fillColor`, this value will also affect the 1px stroke around the fill, if the stroke is used.
   */
  fillOpacity?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillOpacity property.
   */
  fillOpacityTransition?: Transition;
  /**
   * The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.
   *
   * @disabledBy fillPattern
   */
  fillColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillColor property.
   */
  fillColorTransition?: Transition;
  /**
   * The outline color of the fill. Matches the value of `fillColor` if unspecified.
   *
   * @disabledBy fillPattern
   */
  fillOutlineColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillOutlineColor property.
   */
  fillOutlineColorTransition?: Transition;
  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  fillTranslate?: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s fillTranslate property.
   */
  fillTranslateTransition?: Transition;
  /**
   * Controls the frame of reference for `fillTranslate`.
   *
   * @requires fillTranslate
   */
  fillTranslateAnchor?: Value<"map" | "viewport", ["zoom"]>;
  /**
   * Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  fillPattern?: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * The transition affecting any changes to this layer’s fillPattern property.
   */
  fillPatternTransition?: Transition;
}
export interface LineLayerStyle {
  /**
   * The display of line endings.
   */
  lineCap?: Value<"butt" | "round" | "square", ["zoom"]>;
  /**
   * The display of lines when joining.
   */
  lineJoin?: Value<"bevel" | "round" | "miter", ["zoom", "feature"]>;
  /**
   * Used to automatically convert miter joins to bevel joins for sharp angles.
   */
  lineMiterLimit?: Value<number, ["zoom"]>;
  /**
   * Used to automatically convert round joins to miter joins for shallow angles.
   */
  lineRoundLimit?: Value<number, ["zoom"]>;
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * The opacity at which the line will be drawn.
   */
  lineOpacity?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineOpacity property.
   */
  lineOpacityTransition?: Transition;
  /**
   * The color with which the line will be drawn.
   *
   * @disabledBy linePattern
   */
  lineColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineColor property.
   */
  lineColorTransition?: Transition;
  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  lineTranslate?: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s lineTranslate property.
   */
  lineTranslateTransition?: Transition;
  /**
   * Controls the frame of reference for `lineTranslate`.
   *
   * @requires lineTranslate
   */
  lineTranslateAnchor?: Value<"map" | "viewport", ["zoom"]>;
  /**
   * Stroke thickness.
   */
  lineWidth?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineWidth property.
   */
  lineWidthTransition?: Transition;
  /**
   * Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.
   */
  lineGapWidth?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineGapWidth property.
   */
  lineGapWidthTransition?: Transition;
  /**
   * The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.
   */
  lineOffset?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineOffset property.
   */
  lineOffsetTransition?: Transition;
  /**
   * Blur applied to the line, in pixels.
   */
  lineBlur?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineBlur property.
   */
  lineBlurTransition?: Transition;
  /**
   * Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won't render dashed lines to the expected scale. Also note that zoomDependent expressions will be evaluated only at integer zoom levels.
   *
   * @disabledBy linePattern
   */
  lineDasharray?: Value<number[], ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s lineDasharray property.
   */
  lineDasharrayTransition?: Transition;
  /**
   * Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  linePattern?: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * The transition affecting any changes to this layer’s linePattern property.
   */
  linePatternTransition?: Transition;
}
export interface SymbolLayerStyle {
  /**
   * Label placement relative to its geometry.
   */
  symbolPlacement?: Value<"point" | "line" | "line-center", ["zoom"]>;
  /**
   * Distance between two symbol anchors.
   */
  symbolSpacing?: Value<number, ["zoom"]>;
  /**
   * If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer. When using a client that supports global collision detection, like MapLibre GL JS version 0.42.0 or greater, enabling this property is not needed to prevent clipped labels at tile boundaries.
   */
  symbolAvoidEdges?: Value<boolean, ["zoom"]>;
  /**
   * If true, the icon will be visible even if it collides with other previously drawn symbols.
   *
   * @requires iconImage
   *
   * @disabledBy iconOverlap
   */
  iconAllowOverlap?: Value<boolean, ["zoom"]>;
  /**
   * If true, other symbols can be visible even if they collide with the icon.
   *
   * @requires iconImage
   */
  iconIgnorePlacement?: Value<boolean, ["zoom"]>;
  /**
   * If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.
   *
   * @requires iconImage, textField
   */
  iconOptional?: Value<boolean, ["zoom"]>;
  /**
   * In combination with `symbolPlacement`, determines the rotation behavior of icons.
   *
   * @requires iconImage
   */
  iconRotationAlignment?: Value<"map" | "viewport" | "auto", ["zoom"]>;
  /**
   * Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `iconSize`. 1 is the original size; 3 triples the size of the image.
   *
   * @requires iconImage
   */
  iconSize?: Value<number, ["zoom", "feature"]>;
  /**
   * Name of image in sprite to use for drawing an image background.
   */
  iconImage?: Value<ResolvedImageType, ["zoom", "feature"]>;
  /**
   * Rotates the icon clockwise.
   *
   * @requires iconImage
   */
  iconRotate?: Value<number, ["zoom", "feature"]>;
  /**
   * Size of additional area round the icon bounding box used for detecting symbol collisions.
   *
   * @requires iconImage
   */
  iconPadding?: Value<number[], ["zoom", "feature"]>;
  /**
   * If true, the icon may be flipped to prevent it from being rendered upsideDown.
   *
   * @requires iconImage
   */
  iconKeepUpright?: Value<boolean, ["zoom"]>;
  /**
   * Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `iconSize` to obtain the final offset in pixels. When combined with `iconRotate` the offset will be as if the rotated direction was up.
   *
   * @requires iconImage
   */
  iconOffset?: Value<number[], ["zoom", "feature"]>;
  /**
   * In combination with `symbolPlacement`, determines the rotation behavior of the individual glyphs forming the text.
   *
   * @requires textField
   */
  textRotationAlignment?: Value<
    "map" | "viewport" | "viewport-glyph" | "auto",
    ["zoom"]
  >;
  /**
   * Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options.
   */
  textField?: Value<FormattedString, ["zoom", "feature"]>;
  /**
   * Font stack to use for displaying text.
   *
   * @requires textField
   */
  textFont?: Value<string[], ["zoom", "feature"]>;
  /**
   * Font size.
   *
   * @requires textField
   */
  textSize?: Value<number, ["zoom", "feature"]>;
  /**
   * The maximum line width for text wrapping.
   *
   * @requires textField
   */
  textMaxWidth?: Value<number, ["zoom", "feature"]>;
  /**
   * Text leading value for multiLine text.
   *
   * @requires textField
   */
  textLineHeight?: Value<number, ["zoom"]>;
  /**
   * Text tracking amount.
   *
   * @requires textField
   */
  textLetterSpacing?: Value<number, ["zoom", "feature"]>;
  /**
   * Text justification options.
   *
   * @requires textField
   */
  textJustify?: Value<
    "auto" | "left" | "center" | "right",
    ["zoom", "feature"]
  >;
  /**
   * Part of the text placed closest to the anchor.
   *
   * @requires textField
   *
   * @disabledBy textVariableAnchor
   */
  textAnchor?: Value<
    | "center"
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right",
    ["zoom", "feature"]
  >;
  /**
   * Maximum angle change between adjacent characters.
   *
   * @requires textField
   */
  textMaxAngle?: Value<number, ["zoom"]>;
  /**
   * Rotates the text clockwise.
   *
   * @requires textField
   */
  textRotate?: Value<number, ["zoom", "feature"]>;
  /**
   * Size of the additional area around the text bounding box used for detecting symbol collisions.
   *
   * @requires textField
   */
  textPadding?: Value<number, ["zoom"]>;
  /**
   * If true, the text may be flipped vertically to prevent it from being rendered upsideDown.
   *
   * @requires textField
   */
  textKeepUpright?: Value<boolean, ["zoom"]>;
  /**
   * Specifies how to capitalize text, similar to the CSS `textTransform` property.
   *
   * @requires textField
   */
  textTransform?: Value<
    "none" | "uppercase" | "lowercase",
    ["zoom", "feature"]
  >;
  /**
   * Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up. If used with textVariableAnchor, input values will be taken as absolute values. Offsets along the x and yAxis will be applied automatically based on the anchor position.
   *
   * @requires textField
   *
   * @disabledBy textRadialOffset
   */
  textOffset?: Value<number[], ["zoom", "feature"]>;
  /**
   * If true, the text will be visible even if it collides with other previously drawn symbols.
   *
   * @requires textField
   *
   * @disabledBy textOverlap
   */
  textAllowOverlap?: Value<boolean, ["zoom"]>;
  /**
   * If true, other symbols can be visible even if they collide with the text.
   *
   * @requires textField
   */
  textIgnorePlacement?: Value<boolean, ["zoom"]>;
  /**
   * If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.
   *
   * @requires textField, iconImage
   */
  textOptional?: Value<boolean, ["zoom"]>;
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * The opacity at which the icon will be drawn.
   *
   * @requires iconImage
   */
  iconOpacity?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconOpacity property.
   */
  iconOpacityTransition?: Transition;
  /**
   * The color of the icon. This can only be used with SDF icons.
   *
   * @requires iconImage
   */
  iconColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconColor property.
   */
  iconColorTransition?: Transition;
  /**
   * The color of the icon's halo. Icon halos can only be used with SDF icons.
   *
   * @requires iconImage
   */
  iconHaloColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloColor property.
   */
  iconHaloColorTransition?: Transition;
  /**
       * Distance of halo to the icon outline. 

The unit is in pixels only for SDF sprites that were created with a blur radius of 8, multiplied by the display density. I.e., the radius needs to be 16 for `@2x` sprites, etc.
       *
       * @requires iconImage
       */
  iconHaloWidth?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloWidth property.
   */
  iconHaloWidthTransition?: Transition;
  /**
   * Fade out the halo towards the outside.
   *
   * @requires iconImage
   */
  iconHaloBlur?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloBlur property.
   */
  iconHaloBlurTransition?: Transition;
  /**
   * Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires iconImage
   */
  iconTranslate?: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s iconTranslate property.
   */
  iconTranslateTransition?: Transition;
  /**
   * Controls the frame of reference for `iconTranslate`.
   *
   * @requires iconImage, iconTranslate
   */
  iconTranslateAnchor?: Value<"map" | "viewport", ["zoom"]>;
  /**
   * The opacity at which the text will be drawn.
   *
   * @requires textField
   */
  textOpacity?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textOpacity property.
   */
  textOpacityTransition?: Transition;
  /**
   * The color with which the text will be drawn.
   *
   * @requires textField
   */
  textColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textColor property.
   */
  textColorTransition?: Transition;
  /**
   * The color of the text's halo, which helps it stand out from backgrounds.
   *
   * @requires textField
   */
  textHaloColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloColor property.
   */
  textHaloColorTransition?: Transition;
  /**
   * Distance of halo to the font outline. Max text halo width is 1/4 of the fontSize.
   *
   * @requires textField
   */
  textHaloWidth?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloWidth property.
   */
  textHaloWidthTransition?: Transition;
  /**
   * The halo's fadeout distance towards the outside.
   *
   * @requires textField
   */
  textHaloBlur?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloBlur property.
   */
  textHaloBlurTransition?: Transition;
  /**
   * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires textField
   */
  textTranslate?: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s textTranslate property.
   */
  textTranslateTransition?: Transition;
  /**
   * Controls the frame of reference for `textTranslate`.
   *
   * @requires textField, textTranslate
   */
  textTranslateAnchor?: Value<"map" | "viewport", ["zoom"]>;
}
export interface CircleLayerStyle {
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * Circle radius.
   */
  circleRadius?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleRadius property.
   */
  circleRadiusTransition?: Transition;
  /**
   * The fill color of the circle.
   */
  circleColor?: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleColor property.
   */
  circleColorTransition?: Transition;
  /**
   * Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.
   */
  circleBlur?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleBlur property.
   */
  circleBlurTransition?: Transition;
  /**
   * The opacity at which the circle will be drawn.
   */
  circleOpacity?: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleOpacity property.
   */
  circleOpacityTransition?: Transition;
  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  circleTranslate?: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s circleTranslate property.
   */
  circleTranslateTransition?: Transition;
  /**
   * Controls the frame of reference for `circleTranslate`.
   *
   * @requires circleTranslate
   */
  circleTranslateAnchor?: Value<"map" | "viewport", ["zoom"]>;
}
export interface RasterLayerStyle {
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * The opacity at which the image will be drawn.
   */
  rasterOpacity?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterOpacity property.
   */
  rasterOpacityTransition?: Transition;
  /**
   * Rotates hues around the color wheel.
   */
  rasterHueRotate?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterHueRotate property.
   */
  rasterHueRotateTransition?: Transition;
  /**
   * Increase or reduce the brightness of the image. The value is the minimum brightness.
   */
  rasterBrightnessMin?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMin property.
   */
  rasterBrightnessMinTransition?: Transition;
  /**
   * Increase or reduce the brightness of the image. The value is the maximum brightness.
   */
  rasterBrightnessMax?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMax property.
   */
  rasterBrightnessMaxTransition?: Transition;
  /**
   * Increase or reduce the saturation of the image.
   */
  rasterSaturation?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterSaturation property.
   */
  rasterSaturationTransition?: Transition;
  /**
   * Increase or reduce the contrast of the image.
   */
  rasterContrast?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterContrast property.
   */
  rasterContrastTransition?: Transition;
  /**
   * Fade duration when a new tile is added, or when a video is started or its coordinates are updated.
   */
  rasterFadeDuration?: Value<number, ["zoom"]>;
}
export interface BackgroundLayerStyle {
  /**
   * Whether this layer is displayed.
   */
  visibility?: "visible" | "none";
  /**
   * The color with which the background will be drawn.
   *
   * @disabledBy backgroundPattern
   */
  backgroundColor?: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundColor property.
   */
  backgroundColorTransition?: Transition;
  /**
   * Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  backgroundPattern?: Value<ResolvedImageType, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundPattern property.
   */
  backgroundPatternTransition?: Transition;
  /**
   * The opacity at which the background will be drawn.
   */
  backgroundOpacity?: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundOpacity property.
   */
  backgroundOpacityTransition?: Transition;
}
export interface LightLayerStyle {}

export type AllLayerStyle =
  | FillLayerStyle
  | LineLayerStyle
  | SymbolLayerStyle
  | CircleLayerStyle
  | RasterLayerStyle
  | BackgroundLayerStyle
  | LightLayerStyle;
