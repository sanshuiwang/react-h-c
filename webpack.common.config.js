const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const commonConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'pagesjs/[name].[chunkhash].js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    //小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。
              name: 'images/[name]-[hash:8].[ext]'    //打包后大于8k的图片所在文件夹
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  //文件路径简写
  // resolve: {
  //   alias: {
  //     pages: path.join(__dirname, 'src/pages'),
  //     components: path.join(__dirname, 'src/components'),
  //     router: path.join(__dirname, 'src/router')
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.optimize.CommonsChunkPlugin({name: 'runtime'})
  ]
}

module.exports = commonConfig;