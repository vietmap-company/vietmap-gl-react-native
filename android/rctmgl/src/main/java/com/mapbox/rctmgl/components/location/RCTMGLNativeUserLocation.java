package com.mapbox.rctmgl.components.location;

import android.annotation.SuppressLint;
import android.content.Context;
import androidx.annotation.NonNull;

import vn.vietmap.vietmapsdk.location.permissions.PermissionsManager;
import vn.vietmap.vietmapsdk.location.modes.RenderMode;
import vn.vietmap.vietmapsdk.maps.VietMapGL;
import vn.vietmap.vietmapsdk.maps.OnMapReadyCallback;
import vn.vietmap.vietmapsdk.maps.Style;
import com.mapbox.rctmgl.components.AbstractMapFeature;
import com.mapbox.rctmgl.components.mapview.RCTMGLMapView;

public class RCTMGLNativeUserLocation extends AbstractMapFeature implements OnMapReadyCallback, Style.OnStyleLoaded {
    private boolean mEnabled = true;
    private VietMapGL mMap;
    private RCTMGLMapView mMapView;
    private @RenderMode.Mode int mRenderMode = RenderMode.COMPASS;

    public RCTMGLNativeUserLocation(Context context) {
        super(context);
    }

    @Override
    public void addToMap(RCTMGLMapView mapView) {
        mEnabled = true;
        mMapView = mapView;
        mapView.getMapAsync(this);
        setRenderMode(mRenderMode);
    }

    @Override
    public void removeFromMap(RCTMGLMapView mapView) {
        mEnabled = false;
        if (mMap != null) mMap.getStyle(this);
    }

    @SuppressLint("MissingPermission")
    @Override
    public void onMapReady(@NonNull VietMapGL vietMapGL) {
        mMap = vietMapGL;
        vietMapGL.getStyle(this);
    }

    @SuppressLint("MissingPermission")
    @Override
    public void onStyleLoaded(@NonNull Style style) {
        Context context = getContext();
        if (!PermissionsManager.areLocationPermissionsGranted(context)) {
            return;
        }

        LocationComponentManager locationComponent = mMapView.getLocationComponentManager();
        locationComponent.update(style);
        locationComponent.showUserLocation(mEnabled);
    }

    public void setRenderMode(@RenderMode.Mode int renderMode) {
        mRenderMode = renderMode;
        if (mMapView != null) {
            LocationComponentManager locationComponent = mMapView.getLocationComponentManager();
            locationComponent.setRenderMode(renderMode);
        }
    }
}
