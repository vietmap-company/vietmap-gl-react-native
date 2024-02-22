Comparsion of various annotations available in Vietmap React Native:

|*Feature*              | *SymbolLayer*      |*PointAnnotation*                     |*MarkerView*             |*CircleLayer*        |
|-----------------------|--------------------|--------------------------------------|-------------------------|---------------------|
|Can use images         | &check;            |                                      |                         |                     |
|RN Views as childern   | iOS: static        |iOS: interactive <br/> android: static|interactive              |                     |
|Interactions           | click              |iOS: full <br/> android: click & drag & callout  | supports full interactivity in the sense that inside MarkerViews one can place any RN View, which can be interacted with. Not to be misunderstood with drag n drop interactivity.                     | click          |
|Control Z-index        | &check;            |iOS: always on top, android: n/a      |always on top            | &check;             |
|Clustering             | &check;            |                                      |                         | &check;             |
|Style with expressions | &check;            |                                      |                         | &check;             |
