package vn.vietmap.rctmgl.events;

import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import vn.vietmap.rctmgl.events.constants.EventKeys;
import vn.vietmap.rctmgl.events.constants.EventTypes;
import vn.vietmap.rctmgl.location.UserTrackingMode;
import vn.vietmap.rctmgl.events.constants.EventKeys;
import vn.vietmap.rctmgl.events.constants.EventTypes;

/**
 * Created by nickitaliano on 12/19/17.
 */

public class MapUserTrackingModeEvent extends AbstractEvent {
    private int mUserTrackingMode;

    public MapUserTrackingModeEvent(View view, int userTrackingMode) {
        super(view, EventTypes.MAP_USER_TRACKING_MODE_CHANGE);
        mUserTrackingMode = userTrackingMode;
    }

    @Override
    public String getKey() {
        return EventKeys.MAP_USER_TRACKING_MODE_CHANGE;
    }

    @Override
    public WritableMap getPayload() {
        WritableMap payload = Arguments.createMap();
        payload.putBoolean("followUserLocation", mUserTrackingMode != UserTrackingMode.NONE);
        payload.putString("followUserMode", UserTrackingMode.toString(mUserTrackingMode));

        return payload;
    }
}
