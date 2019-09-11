<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://i1.mifile.cn/f/i/2019/micc9/summary/control.jpg?v=070901" alt="">
            <h1 class="goods-title">小米（Mi）小米Note 16G双网通版小米（Mi）小米Note 16G双网通版</h1>
            <div class="goods-info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://i1.mifile.cn/f/i/2019/micc9/summary/control.jpg?v=070901" alt="">
            <h1 class="goods-title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="goods-info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://i1.mifile.cn/f/i/2019/micc9/summary/control.jpg?v=070901" alt="">
            <h1 class="goods-title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="goods-info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">
            加载更多
        </mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import request from '../../request'
export default {
    data() {
        return {
            pageNum: 1,
            pageSize: 10,
            goodsList: [],
        }
    },
    methods: {
        getGoodsList(){
            request.get('/hello/newList').then((response)=>{
                console.log(response)
                this.goodsList=this.goodsList.concat(response.data);
            }).catch(()=>{
                console.log('请求失败');
                Toast({
                message: '请求失败!',
                position: 'middle',
                duration: 2000
                });
            })
        },
        getMore(){
            this.pageNum++;
            this.getGoodsList();
        },
        goDetail(id){
            //路由跳转
            //1、最简单的
            // this.router.push("/home/goodsInfo/"+id)
            //2、传递对象
            // this.$router.push({path:"/home/goodsInfo"+id})
            //3、传递命名路由，这种方式需要在router.js 中添加name属性
            this.$router.push({name: "goodsInfo",params:{id:id}})
        }
    },
}
</script>
<style scoped>
    .goods-list {
        display: flex;
        flex-flow: wrap;
        padding: 4px;
        justify-content: space-between;
    }

    .goods-list .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 0px #ccc;
        margin: 4px 0;
        padding: 2px;
        /* 弹性盒子 */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .goods-list .goods-item img {
        width: 100%;
    }
    .goods-list .goods-item .goods-title {
        font-size: 14px;
    }
    .goods-info {
        background-color: #eee;
    }
    .goods-info p{
        margin: 0;
        padding: 5px;
    }
    .goods-info .price .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .goods-info .price .old{
        /* 字体上的删除线 */ 
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }
    .goods-info .sell{
        justify-content: space-between;
        display: flex;
        font-size: 12px;
    }

</style>