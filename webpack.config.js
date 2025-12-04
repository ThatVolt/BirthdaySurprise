const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { clean } = require('gh-pages');

module.exports = {
  // 1. Entry point: tell webpack where your application starts
  entry: './src/index.jsx', 
  
  // 2. Output: where the final bundled files go
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/BirthdaySurprise/',
    clean: true,
  },
  
  // 3. Modules (rules for handling different file types)
  module: {
    rules: [
      // Rule to process JavaScript/JSX using Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Rule to process CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Rule to handle images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  // 4. Resolve: lets you omit file extensions like .jsx
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  // 5. Plugins: adds extra features like generating the HTML file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'), // Assuming you create this
    }),
  ],

  // 6. Development Server configuration
  devServer: {
    port: 3000, 
    open: true,
  },
};