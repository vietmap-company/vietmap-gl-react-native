package vn.vietmap.rctmgl.events;

import android.graphics.PointF;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import vn.vietmap.rctmgl.events.constants.EventKeys;
import vn.vietmap.rctmgl.events.constants.EventTypes;
import vn.vietmap.vietmapsdk.geometry.LatLng;
import vn.vietmap.rctmgl.components.annotation.RCTMGLPointAnnotation;
import vn.vietmap.rctmgl.events.constants.EventKeys;
import vn.vietmap.rctmgl.events.constants.EventTypes;
import vn.vietmap.rctmgl.utils.GeoJSONUtils;

public class PointAnnotationDragEvent extends MapClickEvent {
    RCTMGLPointAnnotation mView;
    private LatLng mTouchedLatLng;
    private PointF mScreenPoint;

    public PointAnnotationDragEvent(RCTMGLPointAnnotation view, @NonNull LatLng latLng, @NonNull PointF screenPoint, String eventType) {
        super(view, latLng, screenPoint, eventType);
        mView = view;
        mTouchedLatLng = latLng;
        mScreenPoint = screenPoint;
    }

    @Override
    public String getKey() {
        String eventType = getType();

        if (eventType.equals(EventTypes.ANNOTATION_DRAG_START)) {
            return EventKeys.POINT_ANNOTATION_DRAG_START;
        }
        if (eventType.equals(EventTypes.ANNOTATION_DRAG_END)) {
            return EventKeys.POINT_ANNOTATION_DRAG_END;
        }

        return EventKeys.POINT_ANNOTATION_DRAG;
    }

    @Override
    public WritableMap getPayload() {
        WritableMap properties = new WritableNativeMap();
        properties.putString("id", mView.getID());
        properties.putDouble("screenPointX", mScreenPoint.x);
        properties.putDouble("screenPointY", mScreenPoint.y);
        return GeoJSONUtils.toPointFeature(mTouchedLatLng, properties);
    }
}
