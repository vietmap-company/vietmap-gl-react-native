import { MapView, type MapViewRef } from "@vietmap/vietmap-gl-react-native";
import { useRef, useState } from "react";
import { Text } from "react-native";

import { Bubble } from "../../components/Bubble";
import { sheet } from "../../styles/sheet";
import { vietmapStyle } from "../../../vietmap_config";

export function SourceLayerVisibility() {
  const mapViewRef = useRef<MapViewRef>(null);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <MapView ref={mapViewRef} style={sheet.matchParent} 
      mapStyle={vietmapStyle}
      />
      <Bubble
        onPress={() => {
          mapViewRef.current?.setSourceVisibility(
            !visible,
            "maplibre",
            "countries",
          );

          setVisible((prevState) => !prevState);
        }}
      >
        <Text>{`${visible ? "Hide" : "Show"} Countries`}</Text>
      </Bubble>
    </>
  );
}
