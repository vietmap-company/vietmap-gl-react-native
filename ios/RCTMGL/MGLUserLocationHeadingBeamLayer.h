#import <QuartzCore/QuartzCore.h>
#import "MGLUserLocationHeadingIndicator.h"
@import VietMap;

@interface MGLUserLocationHeadingBeamLayer : CALayer <MGLUserLocationHeadingIndicator>

- (MGLUserLocationHeadingBeamLayer *)initWithUserLocationAnnotationView:(MGLUserLocationAnnotationView *)userLocationView;
- (void)updateHeadingAccuracy:(CLLocationDirection)accuracy;
- (void)updateTintColor:(CGColorRef)color;

@end
