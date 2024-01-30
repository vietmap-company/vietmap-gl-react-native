package com.mapbox.rctmgl.utils;

import vn.vietmap.vietmapsdk.style.expressions.Expression;

public class ClusterPropertyEntry {
    public Expression operator;
    public Expression mapping;

    public ClusterPropertyEntry(Expression _operator, Expression _mapping) {
        operator = _operator;
        mapping = _mapping;
    }
}