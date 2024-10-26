// craco.config.js

const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        util: require.resolve('util/'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      };
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
          assert: 'assert', // Add this line
          crypto: 'crypto-browserify', // Added
          stream: 'stream-browserify', // Added
        }),
      ];
      return webpackConfig;
    },
  },
};
