const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
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
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
                cacheCompression: true,
                compact: true,
              },
            },
          },
          {
            test: /\.(js|mjs)$/,
            include: /node_modules\/aquameta/,
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                plugins: ['@babel/plugin-syntax-dynamic-import'],
                cacheDirectory: true,
                cacheCompression: true,
                compact: true,
                sourceMaps: false,
              },
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            use: {
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
                cacheCompression: true,
                compact: true,
                sourceMaps: false,
              },
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
    new webpack.IgnorePlugin(/^encoding$/, /node-fetch/),
  ],
  optimization: {
    minimize: false,
  },
};
