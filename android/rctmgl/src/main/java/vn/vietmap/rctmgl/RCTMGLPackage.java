package vn.vietmap.rctmgl;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import vn.vietmap.rctmgl.components.annotation.RCTMGLCalloutManager;
import vn.vietmap.rctmgl.components.annotation.RCTMGLPointAnnotationManager;
import vn.vietmap.rctmgl.components.annotation.RCTMGLMarkerViewManager;
import vn.vietmap.rctmgl.components.camera.RCTMGLCameraManager;
import vn.vietmap.rctmgl.components.images.RCTMGLImagesManager;
import vn.vietmap.rctmgl.components.location.RCTMGLNativeUserLocationManager;
import vn.vietmap.rctmgl.components.mapview.RCTMGLMapViewManager;
import vn.vietmap.rctmgl.components.mapview.RCTMGLAndroidTextureMapViewManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLBackgroundLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLCircleLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLFillExtrusionLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLFillLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLHeatmapLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLLineLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLRasterLayerManager;
import vn.vietmap.rctmgl.components.styles.layers.RCTMGLSymbolLayerManager;
import vn.vietmap.rctmgl.components.styles.light.RCTMGLLightManager;
import vn.vietmap.rctmgl.components.styles.sources.RCTMGLImageSourceManager;
import vn.vietmap.rctmgl.components.styles.sources.RCTMGLRasterSourceManager;
import vn.vietmap.rctmgl.components.styles.sources.RCTMGLShapeSourceManager;
import vn.vietmap.rctmgl.components.styles.sources.RCTMGLVectorSourceManager;
import vn.vietmap.rctmgl.modules.RCTMGLLocationModule;
import vn.vietmap.rctmgl.modules.RCTMGLLogging;
import vn.vietmap.rctmgl.modules.RCTMGLModule;
import vn.vietmap.rctmgl.modules.RCTMGLOfflineModule;
import vn.vietmap.rctmgl.modules.RCTMGLSnapshotModule;
import vn.vietmap.rctmgl.components.annotation.RCTMGLMarkerViewManager;
import vn.vietmap.rctmgl.components.annotation.RCTMGLPointAnnotationManager;
import vn.vietmap.rctmgl.components.camera.RCTMGLCameraManager;
import vn.vietmap.rctmgl.components.location.RCTMGLNativeUserLocationManager;
import vn.vietmap.rctmgl.components.mapview.RCTMGLAndroidTextureMapViewManager;
import vn.vietmap.rctmgl.components.mapview.RCTMGLMapViewManager;

/**
 * Created by nickitaliano on 8/18/17.
 */

public class RCTMGLPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new RCTMGLModule(reactApplicationContext));
        modules.add(new RCTMGLOfflineModule(reactApplicationContext));
        modules.add(new RCTMGLSnapshotModule(reactApplicationContext));
        modules.add(new RCTMGLLocationModule(reactApplicationContext));
        modules.add(new RCTMGLLogging(reactApplicationContext));

        return modules;
    }

    @Deprecated
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactApplicationContext) {
        List<ViewManager> managers = new ArrayList<>();

        // components
        managers.add(new RCTMGLCameraManager(reactApplicationContext));
        managers.add(new RCTMGLMapViewManager(reactApplicationContext));
        managers.add(new RCTMGLMarkerViewManager(reactApplicationContext));
        managers.add(new RCTMGLAndroidTextureMapViewManager(reactApplicationContext));
        managers.add(new RCTMGLLightManager());
        managers.add(new RCTMGLPointAnnotationManager(reactApplicationContext));
        managers.add(new RCTMGLCalloutManager());
        managers.add(new RCTMGLNativeUserLocationManager());

        // sources
        managers.add(new RCTMGLVectorSourceManager(reactApplicationContext));
        managers.add(new RCTMGLShapeSourceManager(reactApplicationContext));
        managers.add(new RCTMGLRasterSourceManager(reactApplicationContext));
        managers.add(new RCTMGLImageSourceManager());

        // images
        managers.add(new RCTMGLImagesManager(reactApplicationContext));

        // layers
        managers.add(new RCTMGLFillLayerManager());
        managers.add(new RCTMGLFillExtrusionLayerManager());
        managers.add(new RCTMGLHeatmapLayerManager());
        managers.add(new RCTMGLLineLayerManager());
        managers.add(new RCTMGLCircleLayerManager());
        managers.add(new RCTMGLSymbolLayerManager());
        managers.add(new RCTMGLRasterLayerManager());
        managers.add(new RCTMGLBackgroundLayerManager());

        return managers;
    }
}
