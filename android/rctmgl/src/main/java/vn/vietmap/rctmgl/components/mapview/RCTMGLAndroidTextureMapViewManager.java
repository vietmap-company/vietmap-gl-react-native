package vn.vietmap.rctmgl.components.mapview;

import com.facebook.react.bridge.ReactApplicationContext;
import vn.vietmap.vietmapsdk.maps.VietMapGLOptions;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by hernanmateo on 12/11/18.
 */

public class RCTMGLAndroidTextureMapViewManager extends RCTMGLMapViewManager {
    public static final String LOG_TAG = "RCTMGLAndroidTextureMapViewManager";
    public static final String REACT_CLASS = "RCTMGLAndroidTextureMapView";

    public RCTMGLAndroidTextureMapViewManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected RCTMGLAndroidTextureMapView createViewInstance(ThemedReactContext themedReactContext) {
        VietMapGLOptions options = new VietMapGLOptions();
        options.textureMode(true);
        return new RCTMGLAndroidTextureMapView(themedReactContext, this, options);
    }
}
