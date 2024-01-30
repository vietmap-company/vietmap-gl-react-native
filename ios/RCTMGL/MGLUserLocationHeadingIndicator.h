#import <QuartzCore/QuartzCore.h>
@import VietMap;

@protocol MGLUserLocationHeadingIndicator <NSObject>

- (instancetype)initWithUserLocationAnnotationView:(MGLUserLocationAnnotationView *)userLocationView;
- (void)updateHeadingAccuracy:(CLLocationDirection)accuracy;
- (void)updateTintColor:(CGColorRef)color;

@end
