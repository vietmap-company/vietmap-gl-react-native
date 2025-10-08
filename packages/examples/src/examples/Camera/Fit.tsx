import { Camera, MapView } from "@vietmap/vietmap-gl-react-native";
import type { CameraRef, CameraPadding } from "@vietmap/vietmap-gl-react-native";
import { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import type { ViewStyle } from "react-native";
import { vietmapStyle } from "../../../vietmap_config";
import {
  EU_BOUNDS,
  EU_CENTER_COORDINATES,
  US_BOUNDS,
  US_CENTER_COORDINATES,
} from "../../constants/GEOMETRIES";

// Simple deep equality check for objects
const isEqual = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;
  
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    
    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }
  
  return false;
};

type LocationType = "usCenter" | "usBounds" | "euCenter" | "euBounds" | undefined;
type CachedFlyTo = "us" | "eu" | undefined;

interface ButtonConfig {
  title: string;
  selected: boolean;
  onPress: () => void;
}

interface FitState {
  locationType: LocationType;
  zoomLevel: number | undefined;
  followUserLocation: boolean;
  padding: CameraPadding;
  cachedFlyTo: CachedFlyTo;
  cachedZoomLevel: number | undefined;
}

const buildPadding = ([top, right, bottom, left]: [number, number, number, number] = [0, 0, 0, 0]): CameraPadding => {
  return {
    paddingLeft: left,
    paddingRight: right,
    paddingTop: top,
    paddingBottom: bottom,
  };
};

const paddingZero = buildPadding();
const paddingTop = buildPadding([200, 40, 40, 40]);
const paddingBottom = buildPadding([40, 40, 200, 40]);

export class Fit extends Component<{}, FitState> {
  private camera: CameraRef | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      locationType: "usCenter",
      zoomLevel: 4,
      followUserLocation: false,
      padding: paddingZero,
      cachedFlyTo: undefined,
      cachedZoomLevel: undefined,
    };
  }

  componentDidUpdate(_prevProps: {}, prevState: FitState): void {
    const changed = (stateKey: keyof FitState): boolean => {
      // Checking if final state is `undefined` prevents another round of zeroing out in
      // second `componentDidUpdate` call.
      return (
        !isEqual(prevState[stateKey], this.state[stateKey]) &&
        this.state[stateKey] !== undefined
      );
    };

    if (changed("followUserLocation") && this.state.followUserLocation) {
      this.setState({
        locationType: undefined,
        zoomLevel: undefined,
        cachedFlyTo: undefined,
        cachedZoomLevel: undefined,
      });
      return;
    }

    if (changed("locationType") || changed("zoomLevel") || changed("padding")) {
      this.setState({
        cachedFlyTo: undefined,
        cachedZoomLevel: undefined,
      });
    } else if (changed("cachedFlyTo") || changed("cachedZoomLevel")) {
      this.setState({
        locationType: undefined,
        zoomLevel: undefined,
        padding: paddingZero,
      });
    }
  }

  private renderSection = (title: string, buttons: ButtonConfig[], fade: boolean = false): JSX.Element => {
    return (
      <View style={{ paddingBottom: 5, opacity: fade ? 0.5 : 1 }}>
        <Text>{title}</Text>
        <ScrollView
          horizontal
          style={{
            flex: 0,
            flexDirection: "row",
            width: "100%",
            paddingVertical: 10,
          }}
        >
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.title}
              style={{
                flex: 0,
                padding: 5,
                marginRight: 5,
                backgroundColor: button.selected ? "coral" : "#d8d8d8",
                borderRadius: 5,
              }}
              onPress={button.onPress}
            >
              <Text>{button.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  private cameraProps = () => {
    const { locationType, zoomLevel, followUserLocation, padding } = this.state;

    const p: {
      bounds?: { ne: number[]; sw: number[] };
      centerCoordinate?: number[];
      zoomLevel?: number;
      followUserLocation: boolean;
      padding: CameraPadding;
      animationDuration: number;
      animationMode: "easeTo";
    } = {
      bounds: undefined,
      centerCoordinate: undefined,
      zoomLevel: undefined,
      followUserLocation,
      padding,
      animationDuration: 500,
      animationMode: "easeTo",
    };

    if (locationType === "usCenter") {
      p.centerCoordinate = [...US_CENTER_COORDINATES];
    } else if (locationType === "usBounds") {
      p.bounds = { ne: [...US_BOUNDS.ne], sw: [...US_BOUNDS.sw] };
    } else if (locationType === "euCenter") {
      p.centerCoordinate = [...EU_CENTER_COORDINATES];
    } else if (locationType === "euBounds") {
      p.bounds = { ne: [...EU_BOUNDS.ne], sw: [...EU_BOUNDS.sw] };
    }

    if (zoomLevel !== undefined) {
      p.zoomLevel = zoomLevel;
    }

    return p;
  };

  render(): JSX.Element {
    const {
      locationType,
      zoomLevel,
      followUserLocation,
      padding,
      cachedFlyTo,
      cachedZoomLevel,
    } = this.state;

    const centerIsSet = locationType?.toLowerCase().includes("center");

    const locationTypeButtons: ButtonConfig[] = [
      ["US (center)", "usCenter"],
      ["US (bounds)", "usBounds"],
      ["EU (center)", "euCenter"],
      ["EU (bounds)", "euBounds"],
      ["undef", undefined],
    ].map((o) => {
      return {
        title: `${o[0]}`,
        selected: locationType === o[1],
        onPress: () => this.setState({ locationType: o[1] as LocationType }),
      };
    });

    const zoomConfigButtons: ButtonConfig[] = [2, 4, 8, 12, 16, 20, undefined].map((n) => {
      return {
        title: n ? `${n}` : "undef",
        selected: zoomLevel === n,
        onPress: () => this.setState({ zoomLevel: n }),
      };
    });

    const zoomToButtons: ButtonConfig[] = [14, 15, 16, 17, 18, 19, 20].map((n) => {
      return {
        title: `${n}`,
        selected: cachedZoomLevel === n,
        onPress: () => {
          this.camera?.zoomTo(n, 1000);
          this.setState({ cachedZoomLevel: n });
        },
      };
    });

    return (
      <>
        <MapView mapStyle={vietmapStyle} style={{ flex: 1 }}>
          <Camera ref={(ref) => (this.camera = ref)} {...this.cameraProps()} />
          <View style={{ flex: 1, ...padding }}>
            <View style={{ flex: 1, borderColor: "white", borderWidth: 4 }} />
          </View>
        </MapView>

        <ScrollView
          style={{
            flex: 0,
            width: "100%",
            maxHeight: 350,
            backgroundColor: "white",
          } as ViewStyle}
          contentContainerStyle={{
            padding: 10,
            paddingBottom: 20,
          }}
        >
          {this.renderSection("Region", locationTypeButtons)}

          {this.renderSection(
            "Zoom" +
              (centerIsSet ? "" : " (only used if center coordinate is set)"),
            zoomConfigButtons,
            !centerIsSet,
          )}

          {this.renderSection("Follow user location", [
            {
              title: followUserLocation ? "Enabled" : "Disabled",
              selected: followUserLocation,
              onPress: () =>
                this.setState({ followUserLocation: !followUserLocation }),
            },
          ])}

          {this.renderSection("Fly to (imperative)", [
            {
              title: "US",
              selected: cachedFlyTo === "us",
              onPress: () => {
                this.camera?.flyTo(US_CENTER_COORDINATES);
                this.setState({ cachedFlyTo: "us" });
              },
            },
            {
              title: "EU",
              selected: cachedFlyTo === "eu",
              onPress: () => {
                this.camera?.flyTo(EU_CENTER_COORDINATES);
                this.setState({ cachedFlyTo: "eu" });
              },
            },
          ])}

          {this.renderSection("Zoom to (imperative)", zoomToButtons)}

          {this.renderSection("Padding", [
            {
              title: "None",
              selected: isEqual(padding, paddingZero),
              onPress: () => this.setState({ padding: paddingZero }),
            },
            {
              title: "Top",
              selected: isEqual(padding, paddingTop),
              onPress: () => this.setState({ padding: paddingTop }),
            },
            {
              title: "Bottom",
              selected: isEqual(padding, paddingBottom),
              onPress: () => this.setState({ padding: paddingBottom }),
            },
          ])}
        </ScrollView>
      </>
    );
  }
}