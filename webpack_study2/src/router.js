import Vue from 'vue'
import VueRouter from 'vue-router'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import shopcat from './components/tabbar/Shopcat.vue'
import search from './components/tabbar/Search.vue'
import newlist from './components/news/NewsList.vue'
import newsInfo from './components/news/NewsInfo.vue'
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        {
            path:'/account',
            component:account,
            children:[
                {path: 'login',component: login},
                {path: 'register',component: register},
            ]
        },
        {path:'/goodsList',component:goodsList},
        {
            path:'/home',
            component:home,
            // children: [
            //     {path: 'newslist',component: newlist}
            // ]
        },
        {path:'/member',component:member},
        {path:'/shopcat',component:shopcat},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newlist},
        {path:'/home/newsInfo/:id',component:newsInfo},

    ],
    //默认选中样式高亮
    linkActiveClass: 'mui-active'
})
export default router