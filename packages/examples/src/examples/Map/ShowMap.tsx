import { Camera, LineLayer, MapView, ShapeSource } from "@vietmap/vietmap-gl-react-native";

import { sheet } from "../../styles/sheet";
import { vietmapStyle } from "../../../vietmap_config";
import AnnotationWithRemoteImage from "./AnnotationWithRemoteImage";
import { GestureDetector, PanGestureHandler } from "react-native-gesture-handler";
import { View } from "react-native";

export function ShowMap() {

const onGestureEvent = (event: any) => {
  console.log('onGestureEvent:', event.nativeEvent);
}
const onHandlerStateChange = (event: any) => {
  console.log('onHandlerStateChange:', event.nativeEvent);
}
const _handleClickMap = (): void => {
  console.log('click map');
};
  return <MapView
  mapStyle={vietmapStyle}
  style={{ flex: 1 }}
  onPress={() => _handleClickMap()}
  zoomEnabled={true}
  scrollEnabled={true}
  logoEnabled={false}>
  
  <Camera
    animationMode={'flyTo'}
    animationDuration={0}
    zoomLevel={16}
    onUserTrackingModeChange={() => {
      console.log('onUserTrackingModeChange');
    }}
    followUserLocation={false}
    centerCoordinate={[106.23424, 10.41928371]}
  />

  <AnnotationWithRemoteImage
    id={'-1'}
    coordinate={[106.23424, 10.41928371]}
    title={'Bus'}
    draggable={false}
    imageUrl={'https://bizweb.dktcdn.net/100/415/690/themes/804206/assets/logo.png?1737693101575'}
    onSelected={null}
  />
</MapView>
}
