<template>
    <div>
        <div id="slider" class="mui-slider">
            <div fixed id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?' mui-active':'']" 
                        v-for="item in cates" :key="item.id"
                        @click="getPhotoList(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <!-- to写路由的路径，tag表示要渲染的目标标签 -->
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
                <img v-lazy="item.imgUrl">
                <div class="info">
                    <h1 class="info_title">摘要摘要摘要摘要</h1>
                    <div class="info_body">这是内容这是内容这是内容这是内容是内容这是内容这是内容</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import request from '../../request'
export default {
    data() {
        return {
            cates: [],
            list: []
        }
    },
    methods: {
        getAllCategory(){
            request.get('/hello/getAllCategory').then((response)=>{
                response.data.unshift({title:'全部',id: 0})
                this.cates = response.data;
            })
        },
        getPhotoList(cateId){
            request.get('/hello/getPhotoList/'+cateId).then((response)=>{
                this.list = response.data;
            })  
        }
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    created() {
        this.getAllCategory();
        this.getPhotoList(0);
    },
}
</script>
<style scoped>
    * {
        touch-action: pan-y
    }
    .photo-list{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
     
    }
    .photo-list li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    }
    .photo-list li img {
        width: 100%;
        vertical-align: middle;
    }
    .photo-list li img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .photo-list .info {
        color: white;  
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
    }
    .photo-list .info .info_title {
        font-size: 14px; 
    }
    .photo-list .info .info_body {
        font-size: 14px; 
    }
</style>