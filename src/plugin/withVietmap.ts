import { type ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";

import { ios } from "./ios";

let pkg: { name: string; version?: string } = {
  name: "@vietmap/vietmap-gl-react-native",
};
try {
  pkg = require("@vietmap/vietmap-gl-react-native/package.json");
} catch {
  // empty catch block
}

const withVietmap: ConfigPlugin = (config) => {
  // iOS
  config = ios.withExcludedSimulatorArchitectures(config);
  config = ios.withDwarfDsym(config);
  config = ios.withoutSignatures(config);
  config = ios.withPodfilePostInstall(config);

  return config;
};

export default createRunOncePlugin(withVietmap, pkg.name, pkg.version);
