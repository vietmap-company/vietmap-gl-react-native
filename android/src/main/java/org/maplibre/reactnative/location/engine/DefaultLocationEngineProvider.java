package org.maplibre.reactnative.location.engine;

import android.content.Context;
import android.util.Log;

import vn.vietmap.vietmapsdk.location.engine.LocationEngine;
import vn.vietmap.vietmapsdk.location.engine.LocationEngineDefault;

public class DefaultLocationEngineProvider implements LocationEngineProvidable {
    private static final String LOG_TAG = "DefaultLocationEngineProvider";

    @Override
    public LocationEngine getLocationEngine(Context context) {
        LocationEngine locationEngine = LocationEngineDefault.INSTANCE.getDefaultLocationEngine(context.getApplicationContext());
        Log.d(LOG_TAG, "DefaultLocationEngine will be used.");
        return locationEngine;
    }
}