// Important modules this config uses
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    // filename: '[name].[chunkhash].js',
    filename: 'bootstrap-styled.js',
    library: 'bootstrap-styled', // string,
    libraryTarget: 'umd', // enum
    umdNamedDefine: true,
    // chunkFilename: '[name].[chunkhash].chunk.js',
  },
  devtool: 'source-map',
  plugins: [

  ],
});
