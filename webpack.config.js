const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const { getExpoBabelLoader } = require("@expo/webpack-config/utils");

const modulesToTranspile = [
    "ansi-regex",
    "ansi-styles",
    "chalk",
    "react-dev-utils",
    "@react-navigation",
    "styled-components",
    "node_modules",
];

module.exports = async function (env, argv) {
    env.babel = { dangerouslyAddModulePathsToTranspile: modulesToTranspile };

    const config = await createExpoWebpackConfigAsync(env, argv);
    // Customize the config before returning it.
    const loader = getExpoBabelLoader(config);
    if (loader) {
        loader.include("@babel/plugin-proposal-class-properties");
        loader.include("@babel/plugin-transform-arrow-functions");
        loader.include("@babel/plugin-transform-block-scoping");
        loader.include("@babel/plugin-transform-sticky-regex");
        loader.include("@babel/plugin-transform-unicode-regex");
        loader.include("@babel/plugin-transform-dotall-regex");
        loader.include("@babel/plugin-transform-named-capturing-groups-regex");
        loader.include("@babel/plugin-transform-runtime");

        // console.warn(loader)
    }
    return config;
};
