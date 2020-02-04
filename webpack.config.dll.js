const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

//只需要使用yarn run dll一次就行
module.exports = {
  mode: 'production',
  entry: {
    //这里把react方面的东西和babel放到这里
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    filename: '_dll_[name].js',
    path: path.resolve(__dirname, './frontend/static/frontend'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(
        __dirname,
        './frontend/static/frontend',
        'manifest.json'
      ),
      context: __dirname
    })
    // new CleanWebpackPlugin(['./dist/dll']) //删除dll目录下的文件
  ]
}
