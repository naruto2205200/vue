<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.id">
                <!-- <img :src="item.headPortrait" alt="" /> -->
                <!-- <img src="../../images/0d4ad6027c3e143399bd2188fd61504b.jpg" alt=""> -->
                <span>{{ item.name }}</span>
            </mt-swipe-item>
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: 'home',
    data(){
        return {
            lunbolist: []    
        }
    },
    created() {
        this.getSwipeList()
    },
    methods: {
        getSwipeList() {
            this.$http.get('http://localhost:8080/hello/getlunbo').then(result => {
                console.log(result.body)
                this.lunbolist=result.body;
            }).catch(error=>{
                Toast('请求失败')
                console.error(error)
            })
        }
    },
    components: {

    },
   
}
</script>
<style scope>
    .mint-swipe {
        height: 200px;
    }
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
        background-color: red;
    }
</style>
