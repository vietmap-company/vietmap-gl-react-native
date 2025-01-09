package org.maplibre.reactnative.location.engine;

import android.content.Context;

import vn.vietmap.vietmapsdk.location.engine.LocationEngine;

public interface LocationEngineProvidable {
    LocationEngine getLocationEngine(Context context);
}