package com.mapbox.rctmgl.components.mapview;

import android.content.Context;
import vn.vietmap.vietmapsdk.maps.VietMapGLOptions;
/**
 * Created by hernanmateo on 12/11/18.
 */

@SuppressWarnings({"MissingPermission"})
public class RCTMGLAndroidTextureMapView extends RCTMGLMapView {
	public static final String LOG_TAG = "RCTMGLAndroidTextureMapView";
	
    public RCTMGLAndroidTextureMapView(Context context, RCTMGLAndroidTextureMapViewManager manager, VietMapGLOptions options) {
        super(context, manager, options);
    }
}
