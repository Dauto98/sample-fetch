const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode : "development",
  context : path.resolve(__dirname), // make all relative path relative to this instead of cwd
  entry : {
    main : "./src/index.js" // chunkname : "path to start bundling this chunk"
  },
  output : {
    filename : "[name].[chunkhash].js", // name of the outputed files
    path : path.resolve(__dirname, "dist"), // where to put those files
    publicPath : "/" // the address seen from the web URL, after the domain
  },
  devtool: "eval", // source map
  devServer: {
    publicPath : "/", // this need to be the same as output.publicPath
    host: "localhost", // combine with port, will server your app through localhost:8080
    port: 8080,
    historyApiFallback: true
  },
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true, // turn css selectors into hashes
              importLoaders: 1, // 1 loader will be applied before css-loader
              camelCase: true,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  autoprefixer: {
                    browsers: "last 2 versions" //only support last 2 versions of browser
                  }
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins : [
    new MiniCssExtractPlugin({
      filename: "[name].css", // sync chunk
      chunkFilename: "[id].css" // async chunk
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      //favicon: `public/favicon.ico` // if you have one
    }),
  ]
};
