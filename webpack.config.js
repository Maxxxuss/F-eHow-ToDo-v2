const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: isProduction ? ['./src/index.js'] : ['babel-polyfill', './src/index.js'], // Remove 'babel-polyfill' for modern browsers
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            // Add Sass loader if using Sass
            {
              options: {
                implementation: require('sass'), // or 'sass-loader'
                sourceMap: true, // Enable source maps for Sass
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      port: 3000,
      devMiddleware: {
        publicPath: '/dist/',
      },
      hot: 'only',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
      }),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
      ],
    },
    target: 'web',
  };
};
