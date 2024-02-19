import {SyntheticEvent} from 'react';

export type VietmapGLEvent<
  T extends string,
  P = GeoJSON.Feature,
  V = Element,
> = SyntheticEvent<V, {type: T; payload: P}>;
