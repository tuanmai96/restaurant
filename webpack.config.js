const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
            'file-loader',
        ]
    },
    ],
  },
};