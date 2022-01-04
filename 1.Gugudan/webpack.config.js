const path = require('path');
const { webpack } = require('webpack');

module.exports = {
  name: 'gugudan',
  mode: 'development', // hidden-source-map
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['last 2 chrome versions'],
            },
            debug: true,
          }], 
          '@babel/preset-react']
      }
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
}