const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//分离css
const ScssExtract =  new ExtractTextPlugin({
       filename: 'css/[name]-scss.[contenthash:5].css',
       allChunks: true
});
const CssExtract = new ExtractTextPlugin({
       filename: 'css/[name].[contenthash:5].css',
       allChunks: true
});
const commonConfig = require('./webpack.common.config.js');
/*先删除webpack-dev-server相关的东西~
devtool的值改成cheap-module-source-map
刚才说的hash改成chunkhash*/
/*优化正式版配置文件:
0.提取公共部分，提高访问速度{第3条优化公共文件}
1.使用UglifyJSPlugin来压缩生成的文件
2.process.env.NODE_ENV 环境变量关联
3.类似缓存：：HashedModuleIdsPlugin使公共部分文件名不变{即使更改了别的代码文件,那么vendor.xxx.js不变},更改vender数组内容才会变{控制成不改内容不换chunkhash}
4.CleanWebpackPlugin打包优化，清理干净生产的目录
5.提取css,并将css生成单独文件{extract-text-webpack-plugin}
6.babel-plugin-transform-runtime将辅助函数“搬”到一个单独的模块babel-runtime中，这样做能减小项目文件的大小。
{原因：babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多的时候，项目就会很大。}
*/
const publicConfig = {
  /*错误信息是不是提示的很详细,我们在source里面能看到我们写的代码，也能打断点调试哦~*/
  devtool: 'cheap-module-source-map',

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  /*css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能；
   *style-loader将所有的计算后的样式加入页面中；二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: CssExtract.extract({
          fallback: "style-loader",
          use: ['css-loader','postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ScssExtract.extract({
          fallback: "style-loader",
          use: ['css-loader',
          {
            loader:'sass-loader'
          },
          'postcss-loader']
        })
      }
   ]
  },
  /*在之前写的代码中，我们引用组件，或者页面时候，写的是相对路径~*/
  /*webpack提供了一个别名配置*/
  // resolve: {
  //   alias: {
  //       pages: path.join(__dirname, 'src/pages'),
  //       component: path.join(__dirname, 'src/component'),
  //       router: path.join(__dirname, 'src/router')
  //   }
  // },

  /*缓存：：name: 'vendor'把react等库生成打包到公共vendor.hash.js里面去;使名字永久不变，一直缓存在用户本地的。
  webpack的缓存机制：：
  webpack.HashedModuleIdsPlugin然而在Home.js，随便改变个字，你发现home.xxx.js名字变化的同时，vendor.xxx.js名字也变了。
  切记在中【webpack.optimize.CommonsChunkPlugin】配name: 'runtime'*/
  /*UglifyJSPlugin来压缩生成的文件*/
  /*许多 library 将通过与 process.env.NODE_ENV 环境变量关联，以决定 library 中应该引用哪些内容。
  例如，当不处于生产环境中时，某些 library 为了使调试变得容易，可能会添加额外的日志记录(log)和测试(test)。
  其实，当使用 process.env.NODE_ENV === 'production' 时，一些 library 可能针对具体用户的环境进行代码优化，
  从而删除或添加一些重要代码。我们可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量：*/
  plugins:[
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wechat:Yuhuo0909."),
    new CleanWebpackPlugin(['dist'],{
      "exclude": ['api']      //里边东西不删除
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
       }
    }),
    CssExtract,
    ScssExtract
  ]
}
//合并配置，对publicConfig具有的配置项目属性保持不变，不具备的拿进来使用。
module.exports = merge(commonConfig, publicConfig);
