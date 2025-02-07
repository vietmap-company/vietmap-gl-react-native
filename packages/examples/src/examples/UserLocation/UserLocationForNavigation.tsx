import {
  Camera,
  MapView,
  SymbolLayer,
  UserLocation,
  UserLocationRenderMode,
  UserTrackingMode,
} from "@vietmap/vietmap-gl-react-native";
import { useState } from "react";
import { Button } from "react-native";

import maplibreIcon from "../../assets/images/maplibre.png"; 
import { sheet } from "../../styles/sheet";
import { vietmapRasterStyle } from "../../../vietmap_config";

export function UserLocationForNavigation() {
  const [navigationActive, setNavigationActive] = useState(false);

  return (
    <>
      <Button
        title={`Navigation is ${navigationActive ? "active" : "inactive"}`}
        onPress={() => setNavigationActive((prevState) => !prevState)}
      />

      <MapView
        style={sheet.matchParent}
        mapStyle={vietmapRasterStyle}
        contentInset={navigationActive ? [200, 0, 0, 0] : undefined}
        pitchEnabled={navigationActive}
      >
        {navigationActive ? (
          <UserLocation
            renderMode={
              navigationActive
                ? UserLocationRenderMode.Normal
                : UserLocationRenderMode.Native
            }
            showsUserHeadingIndicator
          >
            <SymbolLayer
              id="navigation-icon"
              style={{
                iconImage: maplibreIcon,
                iconAllowOverlap: true,
              }}
            />
          </UserLocation>
        ) : null}

        <Camera
          followUserLocation={navigationActive}
          followUserMode={
            navigationActive
              ? UserTrackingMode.FollowWithHeading
              : UserTrackingMode.Follow
          }
          followZoomLevel={19}
          followPitch={60}
          pitch={0}
          onUserTrackingModeChange={(event) => {
            if (
              navigationActive &&
              !event.nativeEvent.payload.followUserLocation
            ) {
              setNavigationActive(false);
            }
          }}
        />
      </MapView>
    </>
  );
}
