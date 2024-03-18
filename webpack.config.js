const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Áp dụng loader cho các file có đuôi .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: 'babel-loader', // Sử dụng babel-loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Sử dụng các preset cần thiết cho React
          },
        },
      },
    ],
  },
};
