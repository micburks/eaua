const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    datum: './src/functions/datum.js',
  },
  output: {
    path: path.resolve('./functions'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            include: path.resolve('./src/functions'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: false,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: false,
  },
};
