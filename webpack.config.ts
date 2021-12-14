/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: 'development',
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
  ],
};

export default config;
