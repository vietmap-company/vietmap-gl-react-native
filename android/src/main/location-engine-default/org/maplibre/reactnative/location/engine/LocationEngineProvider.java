package org.maplibre.reactnative.location.engine;

import android.content.Context;

import vn.vietmap.vietmapsdk.location.engine.LocationEngine;

public class LocationEngineProvider implements LocationEngineProvidable {
    @Override
    public LocationEngine getLocationEngine(Context context) {
        return new DefaultLocationEngineProvider().getLocationEngine(context);
    }
}
