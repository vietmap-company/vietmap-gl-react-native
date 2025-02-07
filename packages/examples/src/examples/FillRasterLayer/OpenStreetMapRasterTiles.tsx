import {
  MapView,
  RasterLayer,
  RasterSource,
} from "@vietmap/vietmap-gl-react-native";
import { useState } from "react";

import { TabBarView } from "../../components/TabBarView";

import { sheet } from "../../styles/sheet";
import { vietmapRasterStyle } from "../../../vietmap_config";

const OPTIONS = [0, 0.25, 0.5, 0.75, 1];
const DEFAULT_OPTION = 4;

export function OpenStreetMapRasterTiles() {
  const [value, setValue] = useState(OPTIONS[DEFAULT_OPTION]);

  return (
    <TabBarView
      defaultValue={DEFAULT_OPTION}
      options={OPTIONS.map((option) => ({
        label: option.toString(),
        data: option,
      }))}
      onOptionPress={(_index, data) => setValue(data)}
    >
      <MapView style={sheet.matchParent}>
        <RasterSource
          id="osm-raster-source"
          tileUrlTemplates={[vietmapRasterStyle]}
        >
          <RasterLayer id="osm-raster-layer" style={{ rasterOpacity: value }} />
        </RasterSource>
      </MapView>
    </TabBarView>
  );
}
