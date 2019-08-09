// 项目的js入口文件
// 1、导入jquery.js
//import 是ES6中导入模块的方式，ES6语法高级，浏览器无法识别会报错
import $ from 'jquery'
//导入css文件
import './css/index.css'
import './css/index.less'

$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','yellow')
})