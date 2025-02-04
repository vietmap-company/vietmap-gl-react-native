# React Native Setup

First install `@vietmap/vietmap-gl-react-native` with the package manager of your choice, e.g. with `yarn`:

```shell
yarn add @vietmap/vietmap-gl-react-native
```

## Android

Android doesn't need any further specific setup. Simply rebuild your app.

## iOS

On iOS it's necessary to add `$MLRN.post_install(installer)` to the `post_install` block in the `ios/Podfile` is
necessary:

```diff
post_install do |installer|
  # Other post install hooks...
+ $MLRN.post_install(installer)
end
```

Afterward run `pod install` in the `ios` directory:

```shell
cd ios
pod install
```

Now rebuild your app.

