 

[<img src="https://bizweb.dktcdn.net/100/415/690/themes/804206/assets/logo.png?1689561872933" height="40"/> </p>](https://bit.ly/vietmap-api)


# Vietmap GL SDK for React Native

_A React Native library for building maps with   
the [Vietmap GL Native SDK for iOS & Android](https://bit.ly/vietmap-api)_.

Contact [vietmap.vn](https://bit.ly/vietmap-api) to register a valid key.
# Get started

Install package:

Using `npm`:
```bash
    npm i @vietmap/vietmap-gl-react-native-070
```
Using `yarn`:
```bash
    yarn add @vietmap/vietmap-gl-react-native-070
```

<br>
 
## Documentation
### Installation
You must set your API key before using the library. This is required on Android and optional on iOS. You can set the API key in your app's entry file (e.g. `App.js`).


This function must be called before using any other functions of the library.
```tsx
    import Vietmap from '@vietmap/vietmap-gl-react-native-070';
    // Will be null for most users (only Vietmap authenticates this way).
    // Required on Android. See Android installation notes.
    Vietmap.setApiKey('YOUR_API_KEY_HERE');
```
[Getting Started (start here)](/docs/GettingStarted.md)

We've created a demo project for `Vietmap React-Native GL library`, which contains sample code for the main functions of the library [here](https://github.com/vietmap-company/vietmap-react-native-demo).

If you're using the `Expo project`, follow the guide from [this project](https://github.com/vietmap-company/react-native-expo-demo).
### Components

- [MapView](/docs/MapView.md)
- [Light](/docs/Light.md)
- [StyleSheet](/docs/StyleSheet.md)
- [PointAnnotation](/docs/PointAnnotation.md)
- [MarkerView](/docs/MarkerView.md)
- [Callout](/docs/Callout.md)
- [Camera](docs/Camera.md)
- [UserLocation](docs/UserLocation.md)
- [Images](docs/Images.md)

### Sources

- [VectorSource](/docs/VectorSource.md)
- [ShapeSource](/docs/ShapeSource.md)
- [RasterSource](/docs/RasterSource.md)

### Layers

- [BackgroundLayer](/docs/BackgroundLayer.md)
- [CircleLayer](/docs/CircleLayer.md)
- [FillExtrusionLayer](/docs/FillExtrusionLayer.md)
- [FillLayer](/docs/FillLayer.md)
- [LineLayer](/docs/LineLayer.md)
- [RasterLayer](/docs/RasterLayer.md)
- [SymbolLayer](/docs/SymbolLayer.md)
- [HeatmapLayer](/docs/HeatmapLayer.md)

### Offline

- [OfflineManager](/docs/OfflineManager.md)
- [SnapshotManager](/docs/snapshotManager.md)

### Misc

- [Vietmap](/docs/Vietmap.md)
- [CustomHttpHeaders](/docs/CustomHttpHeaders.md)
- [Logger](/docs/Logger.md)
 
  

[<img src="https://bizweb.dktcdn.net/100/415/690/themes/804206/assets/logo.png?1689561872933" height="40"/> </p>](https://vietmap.vn/maps-api)
Email us: [maps-api.support@vietmap.vn](mailto:maps-api.support@vietmap.vn)


Contact for [support](https://vietmap.vn/lien-he)

Vietmap API document [here](https://maps.vietmap.vn/docs/map-api/overview/)

Have a bug to report? [Open an issue](https://github.com/vietmap-company//vietmap-gl-react-native/issues). If possible, include a full log and information that shows the issue.
Have a feature request? [Open an issue](https://github.com/vietmap-company//vietmap-gl-react-native/issues). Tell us what the feature should do and why you want the feature.
