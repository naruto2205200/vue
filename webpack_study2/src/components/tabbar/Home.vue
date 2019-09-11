<template>
    <div>
        <swiper :lunbolist="lunbolist" :isfull="true"></swiper>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photoList">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodsList">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import request from '../../request'
import swiper from '../subcomments/swiper.vue'
// import axios from 'axios'
export default {
    name: 'home',
    data(){
        return {
            //轮播图数据，需要传递到轮播图组件
            lunbolist: []    
        }
    },
    created() {
        this.getSwipeList()
    },
    methods: {
        getSwipeList() {
            request.get('/hello/getlunbo').then((resoponse)=>{
                console.log(resoponse.data);
                this.lunbolist=resoponse.data;
            })
        }
    },
    components: {
        swiper
    }
}
</script>
<style scoped>

    /* .mint-swipe-item:nth-child(1) {
        background-color: red;
    }
    .mint-swipe-item:nth-child(2) {
        background-color: green;
    }
    .mint-swipe-item:nth-child(3) {
        background-color: blue;
    } */

    .mui-grid-view .mui-grid-9 {
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
