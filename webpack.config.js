const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: isProduction
      ? './src/index.js'
      : ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
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
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [new TerserPlugin()] : [],
    },
    // Nur im Entwicklungsmodus aktivieren
    devServer: isProduction
      ? undefined
      : {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        port: 3000,
        hot: true,
      },
    target: 'web',
  };
};
