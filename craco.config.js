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
        assert: require.resolve('assert/'),
        http: require.resolve('stream-http'), // Added for 'http'
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify'),
        url: require.resolve('url/'), // Added for 'url'
      };
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
          assert: 'assert', // Add this line
          crypto: 'crypto-browserify', // Added
          stream: 'stream-browserify', // Added
          url: 'url/', // Added if necessary
        }),
      ];
      return webpackConfig;
    },
  },
};
