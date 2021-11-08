const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const { web } = require('webpack');

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CSSExtract = new ExtractTextPlugin('styles.css')

module.exports = (env) =>{ 
  const isProduction = env ==='production'
  return{

    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
 
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
  //   , 
  //   {
  //    test: /\.s?css$/i,
  //    use: [
  //      'style-loader',
  //      'css-loader',
  //      'sass-loader'
  //    ]
  //  }
  
  ]
//  },
//   // plugins: [   ggf anschauen min~ 1:50
//   //   CSSExtract
//   // ],

//   devtool: isProduction ? 'source-map' :'cheap-module-eval-source-map', 
//   devtool: 'cheap-module-eval-source-map', // zeigt fehler-code im QuellCode an 
//   devServer: {
//     contentBase: path.join(__dirname, './dist'),
//     historyApiFallback: true,
//     writeToDisk: true, 
}, 
target: "web", 



devServer: {
  static: {
    directory: path.join(__dirname, "/public"),
  },
  historyApiFallback: true,
  compress: true, 
  port: 3000,
  devMiddleware: {
    publicPath: "https://localhost:3000/dist",
  },
  hot: "only",


},


// devServer: {
//   historyApiFallback: true,
//   contentBase: path.resolve(__dirname, "public"),
//   hot: true,
//   port: 3000,
// },




// plugins: [
//   new HtmlWebPackPlugin({
//      template: path.resolve( __dirname, 'public/index.html' ),
//      filename: 'index.html'
//   })
// ]  
}
}
