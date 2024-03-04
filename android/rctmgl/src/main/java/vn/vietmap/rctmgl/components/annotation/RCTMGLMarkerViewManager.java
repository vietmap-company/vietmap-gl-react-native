package vn.vietmap.rctmgl.components.annotation;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import vn.vietmap.rctmgl.components.AbstractEventEmitter;
import vn.vietmap.rctmgl.utils.GeoJSONUtils;

import java.util.Map;

import vn.vietmap.rctmgl.components.AbstractEventEmitter;

public class RCTMGLMarkerViewManager extends AbstractEventEmitter<RCTMGLMarkerView> {
    public static final String REACT_CLASS = "RCTMGLMarkerView";

    public RCTMGLMarkerViewManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name="coordinate")
    public void setCoordinate(RCTMGLMarkerView markerView, String geoJSONStr) {
        markerView.setCoordinate(GeoJSONUtils.toPointGeometry(geoJSONStr));
    }

    @ReactProp(name="anchor")
    public void setAnchor(RCTMGLMarkerView markerView, ReadableMap map) {
        markerView.setAnchor((float) map.getDouble("x"), (float) map.getDouble("y"));
    }

    @Override
    protected RCTMGLMarkerView createViewInstance(ThemedReactContext reactContext) {
        return new RCTMGLMarkerView(reactContext, this);
    }

    @Override
    public Map<String, String> customEvents() {
        return MapBuilder.<String, String>builder()
                .build();
    }
}
