import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import Vue from 'vue'
import router from './router.js'
import app from './App.vue'
import first from './First.vue'

// 引入全部组件，这样就可以直接在相关.vue文件中直接引用相关组件，不需要单独调用
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需引入部分组件
import { Button,Header,Tabbar, TabItem,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//第一个参数为别名
// Vue.component('mybutton', Button)
// Vue.component('mycell', Cell)
import './css/index.css'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// // vue-resource的配置放在 VueResource 的后面
// Vue.http.options.root = 'http://localhost:8080';
var vm=new Vue({
    el:'#app',
    data:{
        msg: 123
    },
    methods:{},
    render: c=>c(first),
    router
 });