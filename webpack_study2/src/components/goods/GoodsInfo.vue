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
                        购买数量：<numbox></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
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
</style>