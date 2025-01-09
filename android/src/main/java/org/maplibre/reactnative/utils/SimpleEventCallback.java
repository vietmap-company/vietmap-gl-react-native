package org.maplibre.reactnative.utils;

import vn.vietmap.vietmapsdk.maps.VietMapGL;

import org.maplibre.reactnative.components.AbstractEventEmitter;
import org.maplibre.reactnative.events.IEvent;

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
