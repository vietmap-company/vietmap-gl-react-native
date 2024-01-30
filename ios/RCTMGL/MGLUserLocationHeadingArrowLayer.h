#import <QuartzCore/QuartzCore.h>
#import "MGLUserLocationHeadingIndicator.h"
@import VietMap;

@interface MGLUserLocationHeadingArrowLayer : CAShapeLayer <MGLUserLocationHeadingIndicator>

- (instancetype)initWithUserLocationAnnotationView:(MGLUserLocationAnnotationView *)userLocationView;
- (void)updateHeadingAccuracy:(CLLocationDirection)accuracy;
- (void)updateTintColor:(CGColorRef)color;

@end
