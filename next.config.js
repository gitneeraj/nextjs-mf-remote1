const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// from https://github.com/module-federation/universe/tree/fix_gssp
// const {
//   NextFederationPlugin
// } = require('../../universe/dist/packages/nextjs-mf/src/index');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote1',
        remotes: {},
        filename: 'static/chunks/remoteEntry_remote1.js',
        exposes: {},
        extraOptions: {
          exposePages: true
        },
        shared: {
          // whatever else
        }
      })
    );

    return config;
  }
};

module.exports = nextConfig;
