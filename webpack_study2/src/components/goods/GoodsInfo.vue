<template>
    <div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbolist="lunbolist" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>销售价：<span class="now_price">￥2199</span> 
                    </p>
                    <p>
                        购买数量：<numbox @getcount="getSelectedCount"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small" >立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号</p>
                    <p>库存情况</p>
                    <p>上架时间</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" @click="goDesc(id)">
                    图文介绍
                </mt-button>
                <mt-button type="primary" size="large" @click="goComment(id)">
                    商品评论
                </mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from '../subcomments/swiper.vue'
import numbox from '../subcomments/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            //轮播图数据源
            lunbolist: [],
            selectedCount: 1,
        }
    },
    methods: {
        //获取轮播图数据
        getSwipeList() {
            request.get('/hello/getlunbo').then((resoponse)=>{
                console.log(resoponse.data);
                resoponse.data.foreach(item => {
                    item.img=item.src
                })
                this.lunbolist=resoponse.data;
            })
        },
        //图文介绍
        goDesc(id){
            this.$router.push({name: "goodsDesc",params: {id:id}})
        },
        // 商品评论
        goComment(id){
            this.$router.push({name: "goodsComment",params: {id:id}})
        },
        getSelectedCount(count){
            this.selectedCount = count;

        }
    },
    components: {
        swiper,
        numbox
    }
}
</script>
<style scoped>
    .goodsinfo-conainer {
        background-color: #eee;
        overflow: hidden;
    }
    .now_price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    /* html标签中的<br>换行符不生效，必然是父节点应用了display:flex;布局样式,解决方法是去除flex换为 display:block; */
    .mui-card-footer {
        display: block;
    }
    .mui-card-footer button {
        margin: 10px 0;
    }
</style>