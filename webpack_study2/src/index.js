import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import app from './App.vue'
import first from './First.vue'
//缩略图的使用
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(Vuex)
var store = new Vuex.Store({
    //专门用来存储数据
    state: {
        // 全局都可以使用
        count: 0,
    },
    //store下state中的变量只能通过mutaions 中的方法进行操作，不推荐直接操作，因为调用组件都有操作的方法，万一数据紊乱不容易排错
    mutations: {
        // 子组件调用increment方法，只能使用this.$store.commit('方法名')
        increment(state){
            state.count++;
        },
        // c表示传递进来的参数，方法最多只支持2个参数，1、state，2、可以是单个值，也可以是对象 数组等
        // 调用方式 this.$store.commit('subtract',4)
        subtract(state,c){
            state.count-=c
        }
    },
    // getters只负责获取数据，不负责修改，修改数据使用 mutations 中的方法
    getters: {
        // 操作方式：$store.getters.optCount
        optCount: function(state){
            return '最新值是：'+state.count
        }
    }
})
//导入moment ，控制js的日期
import moment from 'moment'
//全局过滤器 过滤时间格式
Vue.filter('dateFormate',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(pattern)
})

// 引入全部组件，这样就可以直接在相关.vue文件中直接引用相关组件，不需要单独调用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 按需引入部分组件，这样的形式有些样式无法显示，懒加载的图片的加载样式，如果需要这种类型的样式需要添加全局样式，不能用按需加载
// import { Button,Header,Tabbar, TabItem,Swipe, SwipeItem, Lazyload  } from 'mint-ui'
// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);
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
    router,
    // vuex的store 挂载到vm中，在组件中想要访问store里的数据，访问方式：$store.state.count
    store,
 });