const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './frontend/src/App.js'],
  output: {
    path: path.resolve(__dirname, './frontend/static/frontend'),
    filename: 'main.js', // 打包输出，单文件输出
    publicPath: '/'
  },
  mode: 'production',
  // vendor: [],
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8001 }),
    new AntdDayjsWebpackPlugin()
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(
    //     __dirname,
    //     './frontend/static/frontend/dll',
    //     'mainfist.json'
    //   )
    // })
    // new MiniCssExtractPlugin({
    //   //提取css
    //   filename: 'css/main.css'
    // })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        //压缩js
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin() //压缩css
    ]
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       //node_modules里的代码
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'initial',
    //       name: 'vendors', //chunks name
    //       priority: 10, //优先级
    //       enforce: true
    //     }
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [['import', { libraryName: 'antd', style: 'css' }]]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // loader: 'style-loader!css-loader'
      }
    ]
  }
}
