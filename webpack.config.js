const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          size: 854,
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8888,
    proxy: {
      context: () => true,
      target: 'http://localhost:5000',
      secure: false
    },
  }
};