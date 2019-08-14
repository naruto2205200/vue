const path = require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports ={
    // entry: './src/main.js'
    entry: path.join(__dirname,'./src/index.js'), //入口表示需要打包到webpack的文件
    //出口表示打包到的目标文件
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            //创建一个在内存中生成 html 页面的插件
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html',
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.scss$/,
            // use: ['style-loader','css-loader','sass-loader']
            use:  [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                  }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                  }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                  }
            ]
          },
          {
              test: /\.(png|jpg|gif)$/,
              //limit：给定的值是图片的大小，单位是byte，如果引用的图片的大小大于或等于给定的limit，则不会被转换为base64字符串
              //如果图片小于limit的值则会转换为base64
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 4485
                  }
                }
              ]
          },
          {
            test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'
          },
          {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
          {test:/\.vue$/,use:'vue-loader'}  // 
        ]
    },
    //修改vue被导入时的包的路径，这种方式每次修改需要重启服务，麻烦
    resolve: {
      alias: {
        // 'vue$': 'vue/dist/vue.js'
      }
    }

}