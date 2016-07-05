module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: './dist',
    filename: "reddit-better.js"
  },
  devtool: '#cheap-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
