// DO NOT MODIFY
// This file is auto-generated from scripts/templates/MLRNStyleFactory.java.ejs

package org.maplibre.reactnative.components.styles;

import org.maplibre.android.style.layers.BackgroundLayer;
import org.maplibre.android.style.layers.CircleLayer;
import org.maplibre.android.style.layers.FillExtrusionLayer;
import org.maplibre.android.style.layers.FillLayer;
import org.maplibre.android.style.layers.LineLayer;
import org.maplibre.android.style.layers.PropertyFactory;
import org.maplibre.android.style.layers.RasterLayer;
import org.maplibre.android.style.layers.SymbolLayer;
import org.maplibre.android.style.layers.HeatmapLayer;
import org.maplibre.android.style.layers.HillshadeLayer;
import org.maplibre.android.style.layers.TransitionOptions;
import org.maplibre.android.style.light.Light;
import org.maplibre.android.style.light.Position;
import org.maplibre.reactnative.utils.DownloadMapImageTask;

import java.util.List;

public class MLRNStyleFactory {
    public static final String VALUE_KEY = "value";
    public static final String SHOULD_ADD_IMAGE_KEY = "shouldAddImage";

    public static void setFillLayerStyle(final FillLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "fillAntialias":
              MLRNStyleFactory.setFillAntialias(layer, styleValue);
              break;
            case "fillOpacity":
              MLRNStyleFactory.setFillOpacity(layer, styleValue);
              break;
            case "fillOpacityTransition":
              MLRNStyleFactory.setFillOpacityTransition(layer, styleValue);
              break;
            case "fillColor":
              MLRNStyleFactory.setFillColor(layer, styleValue);
              break;
            case "fillColorTransition":
              MLRNStyleFactory.setFillColorTransition(layer, styleValue);
              break;
            case "fillOutlineColor":
              MLRNStyleFactory.setFillOutlineColor(layer, styleValue);
              break;
            case "fillOutlineColorTransition":
              MLRNStyleFactory.setFillOutlineColorTransition(layer, styleValue);
              break;
            case "fillTranslate":
              MLRNStyleFactory.setFillTranslate(layer, styleValue);
              break;
            case "fillTranslateTransition":
              MLRNStyleFactory.setFillTranslateTransition(layer, styleValue);
              break;
            case "fillTranslateAnchor":
              MLRNStyleFactory.setFillTranslateAnchor(layer, styleValue);
              break;
            case "fillPattern":
              style.addImage(styleValue, new DownloadMapImageTask.OnAllImagesLoaded() {
                  @Override
                  public void onAllImagesLoaded() {
                      MLRNStyleFactory.setFillPattern(layer, styleValue);
                  }
              });
              break;
            case "fillPatternTransition":
              MLRNStyleFactory.setFillPatternTransition(layer, styleValue);
              break;
        }
      }
    }
    public static void setLineLayerStyle(final LineLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "lineCap":
              MLRNStyleFactory.setLineCap(layer, styleValue);
              break;
            case "lineJoin":
              MLRNStyleFactory.setLineJoin(layer, styleValue);
              break;
            case "lineMiterLimit":
              MLRNStyleFactory.setLineMiterLimit(layer, styleValue);
              break;
            case "lineRoundLimit":
              MLRNStyleFactory.setLineRoundLimit(layer, styleValue);
              break;
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "lineOpacity":
              MLRNStyleFactory.setLineOpacity(layer, styleValue);
              break;
            case "lineOpacityTransition":
              MLRNStyleFactory.setLineOpacityTransition(layer, styleValue);
              break;
            case "lineColor":
              MLRNStyleFactory.setLineColor(layer, styleValue);
              break;
            case "lineColorTransition":
              MLRNStyleFactory.setLineColorTransition(layer, styleValue);
              break;
            case "lineTranslate":
              MLRNStyleFactory.setLineTranslate(layer, styleValue);
              break;
            case "lineTranslateTransition":
              MLRNStyleFactory.setLineTranslateTransition(layer, styleValue);
              break;
            case "lineTranslateAnchor":
              MLRNStyleFactory.setLineTranslateAnchor(layer, styleValue);
              break;
            case "lineWidth":
              MLRNStyleFactory.setLineWidth(layer, styleValue);
              break;
            case "lineWidthTransition":
              MLRNStyleFactory.setLineWidthTransition(layer, styleValue);
              break;
            case "lineGapWidth":
              MLRNStyleFactory.setLineGapWidth(layer, styleValue);
              break;
            case "lineGapWidthTransition":
              MLRNStyleFactory.setLineGapWidthTransition(layer, styleValue);
              break;
            case "lineOffset":
              MLRNStyleFactory.setLineOffset(layer, styleValue);
              break;
            case "lineOffsetTransition":
              MLRNStyleFactory.setLineOffsetTransition(layer, styleValue);
              break;
            case "lineBlur":
              MLRNStyleFactory.setLineBlur(layer, styleValue);
              break;
            case "lineBlurTransition":
              MLRNStyleFactory.setLineBlurTransition(layer, styleValue);
              break;
            case "lineDasharray":
              MLRNStyleFactory.setLineDasharray(layer, styleValue);
              break;
            case "lineDasharrayTransition":
              MLRNStyleFactory.setLineDasharrayTransition(layer, styleValue);
              break;
            case "linePattern":
              style.addImage(styleValue, new DownloadMapImageTask.OnAllImagesLoaded() {
                  @Override
                  public void onAllImagesLoaded() {
                      MLRNStyleFactory.setLinePattern(layer, styleValue);
                  }
              });
              break;
            case "linePatternTransition":
              MLRNStyleFactory.setLinePatternTransition(layer, styleValue);
              break;
        }
      }
    }
    public static void setSymbolLayerStyle(final SymbolLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "symbolPlacement":
              MLRNStyleFactory.setSymbolPlacement(layer, styleValue);
              break;
            case "symbolSpacing":
              MLRNStyleFactory.setSymbolSpacing(layer, styleValue);
              break;
            case "symbolAvoidEdges":
              MLRNStyleFactory.setSymbolAvoidEdges(layer, styleValue);
              break;
            case "iconAllowOverlap":
              MLRNStyleFactory.setIconAllowOverlap(layer, styleValue);
              break;
            case "iconIgnorePlacement":
              MLRNStyleFactory.setIconIgnorePlacement(layer, styleValue);
              break;
            case "iconOptional":
              MLRNStyleFactory.setIconOptional(layer, styleValue);
              break;
            case "iconRotationAlignment":
              MLRNStyleFactory.setIconRotationAlignment(layer, styleValue);
              break;
            case "iconSize":
              MLRNStyleFactory.setIconSize(layer, styleValue);
              break;
            case "iconImage":
              style.addImage(styleValue, new DownloadMapImageTask.OnAllImagesLoaded() {
                  @Override
                  public void onAllImagesLoaded() {
                      MLRNStyleFactory.setIconImage(layer, styleValue);
                  }
              });
              break;
            case "iconRotate":
              MLRNStyleFactory.setIconRotate(layer, styleValue);
              break;
            case "iconPadding":
              MLRNStyleFactory.setIconPadding(layer, styleValue);
              break;
            case "iconKeepUpright":
              MLRNStyleFactory.setIconKeepUpright(layer, styleValue);
              break;
            case "iconOffset":
              MLRNStyleFactory.setIconOffset(layer, styleValue);
              break;
            case "textRotationAlignment":
              MLRNStyleFactory.setTextRotationAlignment(layer, styleValue);
              break;
            case "textField":
              MLRNStyleFactory.setTextField(layer, styleValue);
              break;
            case "textFont":
              MLRNStyleFactory.setTextFont(layer, styleValue);
              break;
            case "textSize":
              MLRNStyleFactory.setTextSize(layer, styleValue);
              break;
            case "textMaxWidth":
              MLRNStyleFactory.setTextMaxWidth(layer, styleValue);
              break;
            case "textLineHeight":
              MLRNStyleFactory.setTextLineHeight(layer, styleValue);
              break;
            case "textLetterSpacing":
              MLRNStyleFactory.setTextLetterSpacing(layer, styleValue);
              break;
            case "textJustify":
              MLRNStyleFactory.setTextJustify(layer, styleValue);
              break;
            case "textAnchor":
              MLRNStyleFactory.setTextAnchor(layer, styleValue);
              break;
            case "textMaxAngle":
              MLRNStyleFactory.setTextMaxAngle(layer, styleValue);
              break;
            case "textRotate":
              MLRNStyleFactory.setTextRotate(layer, styleValue);
              break;
            case "textPadding":
              MLRNStyleFactory.setTextPadding(layer, styleValue);
              break;
            case "textKeepUpright":
              MLRNStyleFactory.setTextKeepUpright(layer, styleValue);
              break;
            case "textTransform":
              MLRNStyleFactory.setTextTransform(layer, styleValue);
              break;
            case "textOffset":
              MLRNStyleFactory.setTextOffset(layer, styleValue);
              break;
            case "textAllowOverlap":
              MLRNStyleFactory.setTextAllowOverlap(layer, styleValue);
              break;
            case "textIgnorePlacement":
              MLRNStyleFactory.setTextIgnorePlacement(layer, styleValue);
              break;
            case "textOptional":
              MLRNStyleFactory.setTextOptional(layer, styleValue);
              break;
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "iconOpacity":
              MLRNStyleFactory.setIconOpacity(layer, styleValue);
              break;
            case "iconOpacityTransition":
              MLRNStyleFactory.setIconOpacityTransition(layer, styleValue);
              break;
            case "iconColor":
              MLRNStyleFactory.setIconColor(layer, styleValue);
              break;
            case "iconColorTransition":
              MLRNStyleFactory.setIconColorTransition(layer, styleValue);
              break;
            case "iconHaloColor":
              MLRNStyleFactory.setIconHaloColor(layer, styleValue);
              break;
            case "iconHaloColorTransition":
              MLRNStyleFactory.setIconHaloColorTransition(layer, styleValue);
              break;
            case "iconHaloWidth":
              MLRNStyleFactory.setIconHaloWidth(layer, styleValue);
              break;
            case "iconHaloWidthTransition":
              MLRNStyleFactory.setIconHaloWidthTransition(layer, styleValue);
              break;
            case "iconHaloBlur":
              MLRNStyleFactory.setIconHaloBlur(layer, styleValue);
              break;
            case "iconHaloBlurTransition":
              MLRNStyleFactory.setIconHaloBlurTransition(layer, styleValue);
              break;
            case "iconTranslate":
              MLRNStyleFactory.setIconTranslate(layer, styleValue);
              break;
            case "iconTranslateTransition":
              MLRNStyleFactory.setIconTranslateTransition(layer, styleValue);
              break;
            case "iconTranslateAnchor":
              MLRNStyleFactory.setIconTranslateAnchor(layer, styleValue);
              break;
            case "textOpacity":
              MLRNStyleFactory.setTextOpacity(layer, styleValue);
              break;
            case "textOpacityTransition":
              MLRNStyleFactory.setTextOpacityTransition(layer, styleValue);
              break;
            case "textColor":
              MLRNStyleFactory.setTextColor(layer, styleValue);
              break;
            case "textColorTransition":
              MLRNStyleFactory.setTextColorTransition(layer, styleValue);
              break;
            case "textHaloColor":
              MLRNStyleFactory.setTextHaloColor(layer, styleValue);
              break;
            case "textHaloColorTransition":
              MLRNStyleFactory.setTextHaloColorTransition(layer, styleValue);
              break;
            case "textHaloWidth":
              MLRNStyleFactory.setTextHaloWidth(layer, styleValue);
              break;
            case "textHaloWidthTransition":
              MLRNStyleFactory.setTextHaloWidthTransition(layer, styleValue);
              break;
            case "textHaloBlur":
              MLRNStyleFactory.setTextHaloBlur(layer, styleValue);
              break;
            case "textHaloBlurTransition":
              MLRNStyleFactory.setTextHaloBlurTransition(layer, styleValue);
              break;
            case "textTranslate":
              MLRNStyleFactory.setTextTranslate(layer, styleValue);
              break;
            case "textTranslateTransition":
              MLRNStyleFactory.setTextTranslateTransition(layer, styleValue);
              break;
            case "textTranslateAnchor":
              MLRNStyleFactory.setTextTranslateAnchor(layer, styleValue);
              break;
        }
      }
    }
    public static void setCircleLayerStyle(final CircleLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "circleRadius":
              MLRNStyleFactory.setCircleRadius(layer, styleValue);
              break;
            case "circleRadiusTransition":
              MLRNStyleFactory.setCircleRadiusTransition(layer, styleValue);
              break;
            case "circleColor":
              MLRNStyleFactory.setCircleColor(layer, styleValue);
              break;
            case "circleColorTransition":
              MLRNStyleFactory.setCircleColorTransition(layer, styleValue);
              break;
            case "circleBlur":
              MLRNStyleFactory.setCircleBlur(layer, styleValue);
              break;
            case "circleBlurTransition":
              MLRNStyleFactory.setCircleBlurTransition(layer, styleValue);
              break;
            case "circleOpacity":
              MLRNStyleFactory.setCircleOpacity(layer, styleValue);
              break;
            case "circleOpacityTransition":
              MLRNStyleFactory.setCircleOpacityTransition(layer, styleValue);
              break;
            case "circleTranslate":
              MLRNStyleFactory.setCircleTranslate(layer, styleValue);
              break;
            case "circleTranslateTransition":
              MLRNStyleFactory.setCircleTranslateTransition(layer, styleValue);
              break;
            case "circleTranslateAnchor":
              MLRNStyleFactory.setCircleTranslateAnchor(layer, styleValue);
              break;
        }
      }
    }
    public static void setRasterLayerStyle(final RasterLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "rasterOpacity":
              MLRNStyleFactory.setRasterOpacity(layer, styleValue);
              break;
            case "rasterOpacityTransition":
              MLRNStyleFactory.setRasterOpacityTransition(layer, styleValue);
              break;
            case "rasterHueRotate":
              MLRNStyleFactory.setRasterHueRotate(layer, styleValue);
              break;
            case "rasterHueRotateTransition":
              MLRNStyleFactory.setRasterHueRotateTransition(layer, styleValue);
              break;
            case "rasterBrightnessMin":
              MLRNStyleFactory.setRasterBrightnessMin(layer, styleValue);
              break;
            case "rasterBrightnessMinTransition":
              MLRNStyleFactory.setRasterBrightnessMinTransition(layer, styleValue);
              break;
            case "rasterBrightnessMax":
              MLRNStyleFactory.setRasterBrightnessMax(layer, styleValue);
              break;
            case "rasterBrightnessMaxTransition":
              MLRNStyleFactory.setRasterBrightnessMaxTransition(layer, styleValue);
              break;
            case "rasterSaturation":
              MLRNStyleFactory.setRasterSaturation(layer, styleValue);
              break;
            case "rasterSaturationTransition":
              MLRNStyleFactory.setRasterSaturationTransition(layer, styleValue);
              break;
            case "rasterContrast":
              MLRNStyleFactory.setRasterContrast(layer, styleValue);
              break;
            case "rasterContrastTransition":
              MLRNStyleFactory.setRasterContrastTransition(layer, styleValue);
              break;
            case "rasterFadeDuration":
              MLRNStyleFactory.setRasterFadeDuration(layer, styleValue);
              break;
        }
      }
    }
    public static void setBackgroundLayerStyle(final BackgroundLayer layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
            case "visibility":
              MLRNStyleFactory.setVisibility(layer, styleValue);
              break;
            case "backgroundColor":
              MLRNStyleFactory.setBackgroundColor(layer, styleValue);
              break;
            case "backgroundColorTransition":
              MLRNStyleFactory.setBackgroundColorTransition(layer, styleValue);
              break;
            case "backgroundPattern":
              style.addImage(styleValue, new DownloadMapImageTask.OnAllImagesLoaded() {
                  @Override
                  public void onAllImagesLoaded() {
                      MLRNStyleFactory.setBackgroundPattern(layer, styleValue);
                  }
              });
              break;
            case "backgroundPatternTransition":
              MLRNStyleFactory.setBackgroundPatternTransition(layer, styleValue);
              break;
            case "backgroundOpacity":
              MLRNStyleFactory.setBackgroundOpacity(layer, styleValue);
              break;
            case "backgroundOpacityTransition":
              MLRNStyleFactory.setBackgroundOpacityTransition(layer, styleValue);
              break;
        }
      }
    }
    public static void setLightLayerStyle(final Light layer, MLRNStyle style) {
      List<String> styleKeys = style.getAllStyleKeys();

      if (styleKeys.isEmpty()) {
        return;
      }

      for (String styleKey : styleKeys) {
        final MLRNStyleValue styleValue = style.getStyleValueForKey(styleKey);

        switch (styleKey) {
        }
      }
    }

    public static void setVisibility(FillLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setFillAntialias(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillAntialias(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillAntialias(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setFillOpacity(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setFillOpacityTransition(FillLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setFillOpacityTransition(transition);
      }
    }

    public static void setFillColor(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setFillColorTransition(FillLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setFillColorTransition(transition);
      }
    }

    public static void setFillOutlineColor(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillOutlineColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillOutlineColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setFillOutlineColorTransition(FillLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setFillOutlineColorTransition(transition);
      }
    }

    public static void setFillTranslate(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillTranslate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillTranslate(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setFillTranslateTransition(FillLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setFillTranslateTransition(transition);
      }
    }

    public static void setFillTranslateAnchor(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.fillTranslateAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.fillTranslateAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setFillPattern(FillLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        if (styleValue.isImageStringValue()) {
          layer.setProperties(PropertyFactory.fillPattern(styleValue.getImageStringValue()));
        } else {
          layer.setProperties(PropertyFactory.fillPattern(styleValue.getExpression()));
        }
      } else {
        layer.setProperties(PropertyFactory.fillPattern(styleValue.getImageURI()));
      }
    }


    public static void setFillPatternTransition(FillLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setFillPatternTransition(transition);
      }
    }

    public static void setLineCap(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineCap(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineCap(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setLineJoin(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineJoin(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineJoin(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setLineMiterLimit(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineMiterLimit(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineMiterLimit(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setLineRoundLimit(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineRoundLimit(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineRoundLimit(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setVisibility(LineLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setLineOpacity(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setLineOpacityTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineOpacityTransition(transition);
      }
    }

    public static void setLineColor(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setLineColorTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineColorTransition(transition);
      }
    }

    public static void setLineTranslate(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineTranslate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineTranslate(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setLineTranslateTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineTranslateTransition(transition);
      }
    }

    public static void setLineTranslateAnchor(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineTranslateAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineTranslateAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setLineWidth(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineWidth(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineWidth(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setLineWidthTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineWidthTransition(transition);
      }
    }

    public static void setLineGapWidth(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineGapWidth(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineGapWidth(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setLineGapWidthTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineGapWidthTransition(transition);
      }
    }

    public static void setLineOffset(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineOffset(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineOffset(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setLineOffsetTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineOffsetTransition(transition);
      }
    }

    public static void setLineBlur(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineBlur(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineBlur(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setLineBlurTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineBlurTransition(transition);
      }
    }

    public static void setLineDasharray(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.lineDasharray(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.lineDasharray(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setLineDasharrayTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLineDasharrayTransition(transition);
      }
    }

    public static void setLinePattern(LineLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        if (styleValue.isImageStringValue()) {
          layer.setProperties(PropertyFactory.linePattern(styleValue.getImageStringValue()));
        } else {
          layer.setProperties(PropertyFactory.linePattern(styleValue.getExpression()));
        }
      } else {
        layer.setProperties(PropertyFactory.linePattern(styleValue.getImageURI()));
      }
    }


    public static void setLinePatternTransition(LineLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setLinePatternTransition(transition);
      }
    }

    public static void setSymbolPlacement(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.symbolPlacement(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.symbolPlacement(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setSymbolSpacing(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.symbolSpacing(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.symbolSpacing(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setSymbolAvoidEdges(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.symbolAvoidEdges(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.symbolAvoidEdges(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setIconAllowOverlap(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconAllowOverlap(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconAllowOverlap(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setIconIgnorePlacement(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconIgnorePlacement(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconIgnorePlacement(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setIconOptional(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconOptional(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconOptional(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setIconRotationAlignment(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconRotationAlignment(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconRotationAlignment(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setIconSize(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconSize(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconSize(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setIconImage(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        if (styleValue.isImageStringValue()) {
          layer.setProperties(PropertyFactory.iconImage(styleValue.getImageStringValue()));
        } else {
          layer.setProperties(PropertyFactory.iconImage(styleValue.getExpression()));
        }
      } else {
        layer.setProperties(PropertyFactory.iconImage(styleValue.getImageURI()));
      }
    }

    public static void setIconRotate(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconRotate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconRotate(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setIconPadding(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconPadding(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconPadding(styleValue.getFloatArray(VALUE_KEY)));
      }
    }

    public static void setIconKeepUpright(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconKeepUpright(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconKeepUpright(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setIconOffset(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconOffset(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconOffset(styleValue.getFloatArray(VALUE_KEY)));
      }
    }

    public static void setTextRotationAlignment(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textRotationAlignment(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textRotationAlignment(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextField(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textField(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textField(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextFont(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textFont(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textFont(styleValue.getStringArray(VALUE_KEY)));
      }
    }

    public static void setTextSize(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textSize(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textSize(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextMaxWidth(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textMaxWidth(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textMaxWidth(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextLineHeight(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textLineHeight(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textLineHeight(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextLetterSpacing(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textLetterSpacing(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textLetterSpacing(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextJustify(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textJustify(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textJustify(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextAnchor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextMaxAngle(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textMaxAngle(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textMaxAngle(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextRotate(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textRotate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textRotate(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextPadding(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textPadding(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textPadding(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setTextKeepUpright(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textKeepUpright(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textKeepUpright(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setTextTransform(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textTransform(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textTransform(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextOffset(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textOffset(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textOffset(styleValue.getFloatArray(VALUE_KEY)));
      }
    }

    public static void setTextAllowOverlap(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textAllowOverlap(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textAllowOverlap(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setTextIgnorePlacement(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textIgnorePlacement(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textIgnorePlacement(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setTextOptional(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textOptional(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textOptional(styleValue.getBoolean(VALUE_KEY)));
      }
    }

    public static void setVisibility(SymbolLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setIconOpacity(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setIconOpacityTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconOpacityTransition(transition);
      }
    }

    public static void setIconColor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setIconColorTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconColorTransition(transition);
      }
    }

    public static void setIconHaloColor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconHaloColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconHaloColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setIconHaloColorTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconHaloColorTransition(transition);
      }
    }

    public static void setIconHaloWidth(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconHaloWidth(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconHaloWidth(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setIconHaloWidthTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconHaloWidthTransition(transition);
      }
    }

    public static void setIconHaloBlur(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconHaloBlur(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconHaloBlur(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setIconHaloBlurTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconHaloBlurTransition(transition);
      }
    }

    public static void setIconTranslate(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconTranslate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconTranslate(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setIconTranslateTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setIconTranslateTransition(transition);
      }
    }

    public static void setIconTranslateAnchor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.iconTranslateAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.iconTranslateAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setTextOpacity(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setTextOpacityTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextOpacityTransition(transition);
      }
    }

    public static void setTextColor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setTextColorTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextColorTransition(transition);
      }
    }

    public static void setTextHaloColor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textHaloColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textHaloColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setTextHaloColorTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextHaloColorTransition(transition);
      }
    }

    public static void setTextHaloWidth(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textHaloWidth(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textHaloWidth(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setTextHaloWidthTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextHaloWidthTransition(transition);
      }
    }

    public static void setTextHaloBlur(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textHaloBlur(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textHaloBlur(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setTextHaloBlurTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextHaloBlurTransition(transition);
      }
    }

    public static void setTextTranslate(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textTranslate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textTranslate(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setTextTranslateTransition(SymbolLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setTextTranslateTransition(transition);
      }
    }

    public static void setTextTranslateAnchor(SymbolLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.textTranslateAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.textTranslateAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setVisibility(CircleLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setCircleRadius(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleRadius(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleRadius(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setCircleRadiusTransition(CircleLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setCircleRadiusTransition(transition);
      }
    }

    public static void setCircleColor(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setCircleColorTransition(CircleLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setCircleColorTransition(transition);
      }
    }

    public static void setCircleBlur(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleBlur(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleBlur(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setCircleBlurTransition(CircleLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setCircleBlurTransition(transition);
      }
    }

    public static void setCircleOpacity(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setCircleOpacityTransition(CircleLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setCircleOpacityTransition(transition);
      }
    }

    public static void setCircleTranslate(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleTranslate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleTranslate(styleValue.getFloatArray(VALUE_KEY)));
      }
    }


    public static void setCircleTranslateTransition(CircleLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setCircleTranslateTransition(transition);
      }
    }

    public static void setCircleTranslateAnchor(CircleLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.circleTranslateAnchor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.circleTranslateAnchor(styleValue.getString(VALUE_KEY)));
      }
    }

    public static void setVisibility(RasterLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setRasterOpacity(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterOpacityTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterOpacityTransition(transition);
      }
    }

    public static void setRasterHueRotate(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterHueRotate(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterHueRotate(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterHueRotateTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterHueRotateTransition(transition);
      }
    }

    public static void setRasterBrightnessMin(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterBrightnessMin(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterBrightnessMin(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterBrightnessMinTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterBrightnessMinTransition(transition);
      }
    }

    public static void setRasterBrightnessMax(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterBrightnessMax(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterBrightnessMax(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterBrightnessMaxTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterBrightnessMaxTransition(transition);
      }
    }

    public static void setRasterSaturation(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterSaturation(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterSaturation(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterSaturationTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterSaturationTransition(transition);
      }
    }

    public static void setRasterContrast(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterContrast(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterContrast(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setRasterContrastTransition(RasterLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setRasterContrastTransition(transition);
      }
    }

    public static void setRasterFadeDuration(RasterLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.rasterFadeDuration(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.rasterFadeDuration(styleValue.getFloat(VALUE_KEY)));
      }
    }

    public static void setVisibility(BackgroundLayer layer, MLRNStyleValue styleValue) {
      layer.setProperties(PropertyFactory.visibility(styleValue.getString(VALUE_KEY)));
    }

    public static void setBackgroundColor(BackgroundLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.backgroundColor(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.backgroundColor(styleValue.getInt(VALUE_KEY)));
      }
    }


    public static void setBackgroundColorTransition(BackgroundLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setBackgroundColorTransition(transition);
      }
    }

    public static void setBackgroundPattern(BackgroundLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        if (styleValue.isImageStringValue()) {
          layer.setProperties(PropertyFactory.backgroundPattern(styleValue.getImageStringValue()));
        } else {
          layer.setProperties(PropertyFactory.backgroundPattern(styleValue.getExpression()));
        }
      } else {
        layer.setProperties(PropertyFactory.backgroundPattern(styleValue.getImageURI()));
      }
    }


    public static void setBackgroundPatternTransition(BackgroundLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setBackgroundPatternTransition(transition);
      }
    }

    public static void setBackgroundOpacity(BackgroundLayer layer, MLRNStyleValue styleValue) {
      if (styleValue.isExpression()) {
        layer.setProperties(PropertyFactory.backgroundOpacity(styleValue.getExpression()));
      } else {
        layer.setProperties(PropertyFactory.backgroundOpacity(styleValue.getFloat(VALUE_KEY)));
      }
    }


    public static void setBackgroundOpacityTransition(BackgroundLayer layer, MLRNStyleValue styleValue) {
      TransitionOptions transition = styleValue.getTransition();
      if (transition != null) {
        layer.setBackgroundOpacityTransition(transition);
      }
    }

}
