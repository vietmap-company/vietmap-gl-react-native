package vn.vietmap.rctmgl.components.camera;

import androidx.annotation.NonNull;

import vn.vietmap.rctmgl.components.camera.constants.CameraMode;
import vn.vietmap.vietmapsdk.camera.CameraUpdate;
import vn.vietmap.vietmapsdk.constants.VietMapConstants;
import vn.vietmap.vietmapsdk.maps.VietMapGL;
import vn.vietmap.rctmgl.components.camera.constants.CameraMode;

import java.lang.ref.WeakReference;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.RunnableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/**
 * Created by nickitaliano on 9/5/17.
 */

public class CameraUpdateItem implements RunnableFuture<Void> {
    private int mDuration;
    private VietMapGL.CancelableCallback mCallback;
    private CameraUpdate mCameraUpdate;
    private int mCameraMode;

    private boolean isCameraActionFinished;
    private boolean isCameraActionCancelled;

    private WeakReference<VietMapGL> mMap;

    public CameraUpdateItem(VietMapGL map, CameraUpdate update, int duration, VietMapGL.CancelableCallback callback, @CameraMode.Mode int cameraMode) {
        mCameraUpdate = update;
        mDuration = duration;
        mCallback = callback;
        mCameraMode = cameraMode;
        mMap = new WeakReference<>(map);
    }

    public int getDuration() {
        return mDuration;
    }

    @Override
    public void run() {
        final VietMapGL.CancelableCallback callback = new VietMapGL.CancelableCallback() {
            @Override
            public void onCancel() {
                handleCallbackResponse(true);
            }

            @Override
            public void onFinish() {
                handleCallbackResponse(false);
            }
        };

        VietMapGL map = mMap.get();
        if (map == null) {
            isCameraActionCancelled = true;
            return;
        }

        // animateCamera / easeCamera only allows positive duration
        if (mDuration == 0 || mCameraMode == CameraMode.NONE) {
            map.moveCamera(mCameraUpdate, callback);
            return;
        }

        // On iOS a duration of -1 means default or dynamic duration (based on flight-path length)
        // On Android we can fallback to Mapbox's default duration as there is no such API
        int duration = mDuration < 0 ? VietMapConstants.ANIMATION_DURATION : mDuration;

        if (mCameraMode == CameraMode.FLIGHT) {
            map.animateCamera(mCameraUpdate, duration, callback);
        } else if (mCameraMode == CameraMode.LINEAR) {
            map.easeCamera(mCameraUpdate, duration, false, callback);
        } else if (mCameraMode == CameraMode.EASE) {
            map.easeCamera(mCameraUpdate, duration, true, callback);
        }
    }

    @Override
    public boolean cancel(boolean mayInterruptIfRunning) {
        return false;
    }

    @Override
    public boolean isCancelled() {
        return isCameraActionCancelled;
    }

    @Override
    public boolean isDone() {
        return isCameraActionFinished;
    }

    @Override
    public Void get() throws InterruptedException, ExecutionException {
        return null;
    }

    @Override
    public Void get(long timeout, @NonNull TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        return null;
    }

    private void handleCallbackResponse(boolean isCancel) {
        if (mCallback == null) {
            return;
        }

        isCameraActionCancelled = isCancel;
        isCameraActionFinished = !isCancel;

        if (isCancel) {
            mCallback.onCancel();
        } else {
            mCallback.onFinish();
        }
    }
}
