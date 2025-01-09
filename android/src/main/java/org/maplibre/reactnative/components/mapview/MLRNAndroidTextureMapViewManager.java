package org.maplibre.reactnative.components.mapview;

import com.facebook.react.bridge.ReactApplicationContext;
import vn.vietmap.vietmapsdk.maps.VietMapGLOptions;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class MLRNAndroidTextureMapViewManager extends MLRNMapViewManager {
    public static final String LOG_TAG = "MLRNAndroidTextureMapViewManager";
    public static final String REACT_CLASS = "MLRNAndroidTextureMapView";

    public MLRNAndroidTextureMapViewManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MLRNAndroidTextureMapView createViewInstance(ThemedReactContext themedReactContext) {
        VietMapGLOptions options = new VietMapGLOptions();
        options.textureMode(true);
        return new MLRNAndroidTextureMapView(themedReactContext, this, options);
    }
}
