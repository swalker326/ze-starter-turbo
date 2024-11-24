import { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "home",
  filename: "remoteEntry.js",
  exposes: {
    "./RemoteEntry": "./src/App.tsx"
  },
  shared: ["react", "react-dom"]
};
