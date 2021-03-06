const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const OUT_DIR = path.resolve(__dirname, 'client', 'public');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: { 
    extensions: ['.jsx', '.js'], 
  }
};