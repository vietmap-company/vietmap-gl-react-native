#import "MLRNTileSource.h"
@import VietMap;

@interface MLRNVectorSource : MLRNTileSource

- (nonnull NSArray<id <MLNFeature>> *)featuresInSourceLayersWithIdentifiers:(nonnull NSSet<NSString *> *)sourceLayerIdentifiers predicate:(nullable NSPredicate *)predicate;

@end
