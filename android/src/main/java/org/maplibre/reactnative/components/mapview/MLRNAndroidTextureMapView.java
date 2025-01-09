package org.maplibre.reactnative.components.mapview;

import android.content.Context;
import vn.vietmap.vietmapsdk.maps.VietMapGLOptions;

@SuppressWarnings({"MissingPermission"})
public class MLRNAndroidTextureMapView extends MLRNMapView {
	public static final String LOG_TAG = "MLRNAndroidTextureMapView";
	
    public MLRNAndroidTextureMapView(Context context, MLRNAndroidTextureMapViewManager manager, VietMapGLOptions options) {
        super(context, manager, options);
    }
}
