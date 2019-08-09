export default{
    name: '张三',
    age: 20
}

var info = {
    address: '北京市海淀区'
}
//export default 在一个js文件中只能写一次，不能多次
//export 可以多个，并且在导入文件中 import {title} from './test.js' 必须使用 {title} 大括号接受，
//名称必须一致，多个之间用逗号分割
export var title='哈哈哈'