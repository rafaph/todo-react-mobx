var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: [
    './src/ts/index'
  ],
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['awesome-typescript-loader'],
      include: path.join(__dirname, 'src', 'ts')
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  },
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: 'main.js',
    publicPath: '/'
  }
};

if (!debug) {
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ];
} else {
  config.entry.push(
    'webpack-dev-server/client?http://localhost:3000'
  );
}

module.exports = config;
