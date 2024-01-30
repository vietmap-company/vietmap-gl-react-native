package com.mapbox.rctmgl.utils;

import vn.vietmap.vietmapsdk.maps.VietMapGL;

import com.mapbox.rctmgl.components.AbstractEventEmitter;
import com.mapbox.rctmgl.events.IEvent;

/**
 * Created by nickitaliano on 8/31/17.
 */

public class SimpleEventCallback implements VietMapGL.CancelableCallback {
    private AbstractEventEmitter mEventEmitter;
    private IEvent mEvent;

    public SimpleEventCallback(AbstractEventEmitter eventEmitter, IEvent event) {
        mEventEmitter = eventEmitter;
        mEvent = event;
    }

    @Override
    public void onCancel() {
        mEventEmitter.handleEvent(mEvent);
    }

    @Override
    public void onFinish() {
        mEventEmitter.handleEvent(mEvent);
    }
}
