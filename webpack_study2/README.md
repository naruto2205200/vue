#这是一个项目
#.gitignore 放不需要上传到服务器的文件名
# 2019-08-13 改造新闻资讯页面
# 利用 vue-resource 获取信息

# 2019-08-14 
# npm install moment --save  用来设置js日期的格式
# 新闻资讯详情
# 涉及路由传参

# 2019-08-15 
# 封装一个单独的评论组件：comment.vue ，按需导入
# 动态渲染 comment.vue
# 下方点击加载更多按钮的功能，通过javascript的  concat() 方法拼接内容
# 发表评论功能：
#    文本框数据双向绑定、发表按钮绑定一个事件、校验内容、发表完成后重新加载

# 2019-08-16 

# mui制定顶部菜单的左右滑动效果： mui-scroll css样式需要js的配合才能有滑动效果
# mul.js 文件导入式不能直接使用，会报错
# 解决：
# 1、写在mounted中
# mounted() {
#    mui('.mui-scroll-wrapper').scroll({
#       deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
#    });
# },
# 2、引入 import mui from '../../lib/mui/js/mui.min.js' 时，会报错需要执行下面的命令，非严格模式
# webpack 非严格模式 ：npm i babel-plugin-transform-remove-strict-mode
# 在.babelrc文件的插件项添加："transform-remove-strict-mode"
# 这样写了之后会有问题。底部的菜单点击不管用了，这是因为底部菜单的mui-tab-item样式冲突，所以需要修改样式
# class="mui-tab-item
# 把之前的所有与mui-control-item有关的样式全部copy出来，然后重命名样式修改。问题解决 

# mint 图片懒加载的实现，懒加载需要把mint的全部样式导入，不能按需导入，否则没有效果
# import MintUI from 'mint-ui'
# import 'mint-ui/lib/style.css'
# Vue.use(MintUI)
# http://mint-ui.github.io/docs/#/zh-cn2 官网详看 Lazy load 的使用

# 图片详情页面
# 缩略图  vue-preview (preview 使用的不是很好，后期换一个插件) https://www.npmjs.com/package/vue-preview

# 商品列表页面
# 

# 
#
#
#
#
#
#
#
#
#
#
#

