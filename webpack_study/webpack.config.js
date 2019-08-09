const path = require('path');
const webpack = require('webpack');//热部署 第二步
const htmlWebpackPlugin=require('html-webpack-plugin')
//在 webpack.config.js 配置文件里面新增一个配置节点 module，它是一个对象，
//在这个module对象上，有个rules属性，是个数组，数组中存放所有第三方文件的处理规则

module.exports ={
    // entry: './src/main.js'
    entry: path.join(__dirname,'./src/main.js'),  //入口表示需要打包到webpack的文件
    //出口表示打包到的目标文件
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,  //自动打开浏览器
        port: 3000,  //端口号
        contentBase: 'src',  //指定托管的根目录
        hot:true,  //热部署 第一步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热部署 第三步
        new htmlWebpackPlugin({
            //创建一个在内存中生成 html 页面的插件
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html',
        }),
    ],
    //用来配置所有第三方模块加载器
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [ 'style-loader', 'css-loader','less-loader']
          }
        ]
      }
}


