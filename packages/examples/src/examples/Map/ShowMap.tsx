import { MapView } from "@vietmap/vietmap-gl-react-native";

import { sheet } from "../../styles/sheet";

export function ShowMap() {
  return <MapView style={sheet.matchParent}
   />;
}
