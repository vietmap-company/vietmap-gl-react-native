import Vietmap, { Callout, PointAnnotation, type PointAnnotationRef } from '@vietmap/vietmap-gl-react-native';
import React from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const ANNOTATION_SIZE = 45;

const styles = StyleSheet.create({
  annotationContainer: {
    alignItems: 'center',
    // backgroundColor: 'white',
    // borderColor: 'rgba(0, 0, 0, 0.45)',
    // borderRadius: ANNOTATION_SIZE / 2,
    // borderWidth: StyleSheet.hairlineWidth,
    height: ANNOTATION_SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    width: ANNOTATION_SIZE,
  },
});

const AnnotationWithRemoteImage = ({
  id,
  title,
  coordinate,
  imageUrl,
  draggable,
  onSelected,
}: {
  id: any;
  title: any;
  coordinate: any;
  imageUrl: any;
  draggable: any;
  onSelected: any;
}) => {
  const annotationRef = React.createRef<PointAnnotationRef>();

  return (
    <PointAnnotation
      id={id}
      coordinate={coordinate}
      title={title}
      draggable={draggable}
      onDrag={e =>{}
        // console.log('onDrag:', e.properties.id, e.geometry.coordinates)
      }
      onDragStart={e =>{}
        // console.log('onDragStart:', e.properties.id, e.geometry.coordinates)
      }
      onDragEnd={e =>{}
        // console.log('onDragEnd:', e.properties.id, e.geometry.coordinates)
      }
      onSelected={onSelected}
      ref={annotationRef}>
      <View style={styles.annotationContainer}>
        <Image
          source={imageUrl}
          style={{ width: ANNOTATION_SIZE, height: ANNOTATION_SIZE }}
          onLoad={() => annotationRef.current?.refresh()}
        />
      </View>
      <Callout title={title} />
    </PointAnnotation>
  );
};

AnnotationWithRemoteImage.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  coordinate: PropTypes.arrayOf(PropTypes.number),
  imageUrl: PropTypes.string,
  draggable: PropTypes.bool,
};

export default AnnotationWithRemoteImage;
