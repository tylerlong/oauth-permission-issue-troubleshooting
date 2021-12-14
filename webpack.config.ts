/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-import */
import {Configuration, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import dotenv from 'dotenv-override-true';

const config: Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'oauth-permission-issue-troubleshooting',
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
    },
  },
};

export default config;
