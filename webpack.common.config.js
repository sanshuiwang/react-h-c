const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var pkg = require('./package.json');

const commonConfig = {
  entry: {
    app: [
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ],
    //将 第三方依赖（node_modules中的） 单独打包
    //vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/[name].[chunkhash].js',  //打包所用，开发有单独filename定义替换和并没有的
    chunkFilename: 'demandJS/[name].[chunkhash].js',    //按需加载
    publicPath: "/"
  },
  module: {
    rules: [
      {
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
  /*缓存：：name: 'vendor'把react等库生成打包到公共vendor.hash.js里面去;使名字永久不变，一直缓存在用户本地的。
  webpack的缓存机制：：
  webpack.HashedModuleIdsPlugin然而在Home.js，随便改变个字，你发现home.xxx.js名字变化的同时，vendor.xxx.js名字也变了。
  切记在中【webpack.optimize.CommonsChunkPlugin】配name: 'runtime'*/
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'dependenciesJS/[name].[hash].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      filename: 'dependenciesJS/[name].[hash].js'
    })
  ]
}

module.exports = commonConfig;
