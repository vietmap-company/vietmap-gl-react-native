package vn.vietmap.rctmgl.components.styles.layers;

import android.content.Context;

import vn.vietmap.rctmgl.components.mapview.RCTMGLMapView;
import vn.vietmap.vietmapsdk.style.expressions.Expression;
import vn.vietmap.vietmapsdk.style.layers.HeatmapLayer;
import vn.vietmap.rctmgl.components.mapview.RCTMGLMapView;
import vn.vietmap.rctmgl.components.styles.RCTMGLStyle;
import vn.vietmap.rctmgl.components.styles.RCTMGLStyleFactory;

/**
 * Created by dhee9000 on 6/8/2019
 */

public class RCTMGLHeatmapLayer extends RCTLayer<HeatmapLayer> {
    private String mSourceLayerID;

    public RCTMGLHeatmapLayer(Context context){
        super(context);
    }

    @Override
    protected void updateFilter(Expression expression) {
        mLayer.setFilter(expression);
    }

    @Override
    public void addToMap(RCTMGLMapView mapView) {
        super.addToMap(mapView);
    }

    @Override
    public HeatmapLayer makeLayer() {
        HeatmapLayer layer = new HeatmapLayer(mID, mSourceID);

        if (mSourceLayerID != null) {
            layer.setSourceLayer(mSourceLayerID);
        }

        return layer;
    }

    @Override
    public void addStyles() {
        RCTMGLStyleFactory.setHeatmapLayerStyle(mLayer, new RCTMGLStyle(getContext(), mReactStyle, mMap));
    }

    public void setSourceLayerID(String sourceLayerID) {
        mSourceLayerID = sourceLayerID;

        if (mLayer != null) {
            mLayer.setSourceLayer(sourceLayerID);
        }
    }
}
