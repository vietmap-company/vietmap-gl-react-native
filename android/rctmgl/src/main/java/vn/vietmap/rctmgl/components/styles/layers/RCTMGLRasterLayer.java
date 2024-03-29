package vn.vietmap.rctmgl.components.styles.layers;

import android.content.Context;

import vn.vietmap.vietmapsdk.style.layers.RasterLayer;
import vn.vietmap.rctmgl.components.styles.RCTMGLStyle;
import vn.vietmap.rctmgl.components.styles.RCTMGLStyleFactory;

/**
 * Created by nickitaliano on 9/25/17.
 */

public class RCTMGLRasterLayer extends RCTLayer<RasterLayer> {
    public RCTMGLRasterLayer(Context context) {
        super(context);
    }

    @Override
    public RasterLayer makeLayer() {
        return new RasterLayer(mID, mSourceID);
    }

    @Override
    public void addStyles() {
        RCTMGLStyleFactory.setRasterLayerStyle(mLayer, new RCTMGLStyle(getContext(), mReactStyle, mMap));
    }
}
