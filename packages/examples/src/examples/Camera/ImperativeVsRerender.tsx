import { Camera, MapView, UserTrackingMode, requestAndroidLocationPermissions, PointAnnotation, UserLocation } from '@vietmap/vietmap-gl-react-native';
import type { CameraRef } from '@vietmap/vietmap-gl-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { vietmapStyle } from '../../../vietmap_config';
import { EU_CENTER_COORDINATES, US_CENTER_COORDINATES } from '../../constants/GEOMETRIES';

/**
 * Demonstrates difference between:
 * 1) Imperative camera changes (flyTo/moveTo)
 * 2) React re-renders that DO NOT change camera props (state change unrelated to Camera)
 * 3) React re-renders that DO change camera props (passing new centerCoordinate)
 *
 * Enable internal camera debug logs by adding debugCameraTransitions to <Camera />.
 */
export const ImperativeVsRerender: React.FC = () => {
  const cameraRef = useRef<CameraRef | null>(null);
  const [counter, setCounter] = useState(0);            // state NOT passed to Camera
  const [usePropCenter, setUsePropCenter] = useState<boolean>(false); // toggle between prop-driven & imperative
  const [whichCenter, setWhichCenter] = useState<'us' | 'eu'>('us');   // when prop-driven, choose center
  const [followUser, setFollowUser] = useState(false);
  const [hasLocationPerm, setHasLocationPerm] = useState(false);
  const [userCoord, setUserCoord] = useState<GeoJSON.Position | null>(null);

  const toggleCenter = useCallback(() => {
    setWhichCenter((c) => (c === 'us' ? 'eu' : 'us'));
  }, []);

  const imperativeMove = useCallback(() => {
    const target = whichCenter === 'us' ? EU_CENTER_COORDINATES : US_CENTER_COORDINATES; // invert to show change
    cameraRef.current?.flyTo(target, 1200);
  }, [whichCenter]);

  // Request location permission on Android when enabling follow
  useEffect(() => {
    let cancelled = false;
    if (followUser && Platform.OS === 'android' && !hasLocationPerm) {
      requestAndroidLocationPermissions().then((granted) => {
        if (!cancelled) setHasLocationPerm(granted);
      });
    }
    return () => { cancelled = true; };
  }, [followUser, hasLocationPerm]);

  const incrementUnrelatedState = useCallback(() => setCounter((c) => c + 1), []);

  const cameraProps = usePropCenter && !followUser
    ? {
        centerCoordinate: whichCenter === 'us' ? US_CENTER_COORDINATES : EU_CENTER_COORDINATES,
        zoomLevel: 3,
        animationDuration: 800,
        animationMode: 'easeTo' as const,
      }
    : followUser
      ? {
          followUserLocation: true,
          followUserMode: UserTrackingMode.Follow,
          followZoomLevel: 14,
          animationDuration: 800,
          animationMode: 'easeTo' as const,
        }
      : {};

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        mapStyle={vietmapStyle}
        onUserLocationUpdate={(loc) => {
          // eslint-disable-next-line no-console
          console.log('[onUserLocationUpdate]', loc?.coords);
          if (loc?.coords && typeof loc.coords.longitude === 'number' && typeof loc.coords.latitude === 'number') {
            const c: GeoJSON.Position = [loc.coords.longitude, loc.coords.latitude];
            setUserCoord((prev) => {
              if (!prev || prev[0] !== c[0] || prev[1] !== c[1]) return c;
              return prev; // avoid unnecessary re-renders
            });
          }
        }}
      >
        {/* Force native location tracking component to ensure updates begin */}
        <UserLocation visible={false} />
        <Camera
          ref={cameraRef}
          debugCameraTransitions
          // Do not log every render (noise); focus on native camera calls
          debugCameraRenderLogs={false}
          {...cameraProps}
          onUserTrackingModeChange={(e) => {
            // eslint-disable-next-line no-console
            console.log('[Example] userTrackingModeChange', e.nativeEvent?.payload);
          }}
        />
        {followUser && userCoord && Array.isArray(userCoord) && userCoord.length === 2 && Number.isFinite(userCoord[0]) && Number.isFinite(userCoord[1]) && (
          <PointAnnotation
            id="user-follow-marker"
            coordinate={userCoord}
          >
            <View style={styles.userMarkerOuter}>
              <View style={styles.userMarkerInner} />
            </View>
          </PointAnnotation>
        )}
      </MapView>

      <View style={styles.panel}>
        <Text style={styles.title}>Imperative vs Re-render</Text>
        <Text style={styles.info}>Counter (not passed to Camera): {counter}</Text>
        <Text style={styles.info}>Mode: {followUser ? 'Follow User' : usePropCenter ? 'Prop-driven center' : 'Imperative only'}</Text>
        <Text style={styles.info}>Center key: {whichCenter}</Text>
        {followUser && (
          <Text style={styles.info}>Location perm: {hasLocationPerm ? 'granted' : 'pending / denied'}</Text>
        )}

        <View style={styles.row}>
          <Button label="Unrelated setState" onPress={incrementUnrelatedState} />
          <Button label={usePropCenter ? 'Use Imperative' : 'Use Prop center'} onPress={() => { setFollowUser(false); setUsePropCenter(v => !v); }} disabled={followUser} />
        </View>
        <View style={styles.row}>
          <Button label={followUser ? 'Disable Follow' : 'Toggle Follow'} onPress={() => { setFollowUser(f => !f); }} />
          <Button label="Toggle center key" onPress={toggleCenter} disabled={!usePropCenter || followUser} />
          <Button label="Imperative flyTo" onPress={imperativeMove} disabled={usePropCenter || followUser} />
        </View>
        <Text style={styles.note}>
          When debugCameraTransitions is enabled, check the console logs:
          {'\n'}- Render #n lines mean a React re-render
          {'\n'}- flyTo/moveTo/zoomTo/setCamera lines are imperative
          {'\n'}- Prop-driven native stop update lines happen due to new props
          {'\n'}- Follow mode suppresses prop center/imperative updates
        </Text>
      </View>
    </View>
  );
};

interface ButtonProps { label: string; onPress: () => void; disabled?: boolean }
const Button: React.FC<ButtonProps> = ({ label, onPress, disabled }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, disabled && styles.buttonDisabled]}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 12,
    // Ensure overlay is above MapView and receives touches
    zIndex: 999,
    elevation: 999,
    pointerEvents: 'box-none',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, alignItems: 'center' },
  button: {
    backgroundColor: '#295daa',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    flexGrow: 1,
    flexBasis: 0,
    alignItems: 'center',
  },
  buttonDisabled: { opacity: 0.3 },
  buttonText: { color: 'white', fontSize: 12, textAlign: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  info: { marginTop: 4, fontSize: 12 },
  note: { marginTop: 10, fontSize: 11, color: '#333' },
  userMarkerOuter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(41,93,170,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userMarkerInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#295daa',
    borderWidth: 2,
    borderColor: 'white',
  },
});
