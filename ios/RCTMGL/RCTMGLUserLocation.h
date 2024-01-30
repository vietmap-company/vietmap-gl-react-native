//
//  RCTMGLUserLocation.h
//  RCTMGL

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>
#import <VietMap/MGLUserLocationAnnotationView.h>

@interface RCTMGLUserLocation : NSObject

+ (id)sharedInstance;

- (MGLUserLocationAnnotationView*)hiddenUserAnnotation;

@end
