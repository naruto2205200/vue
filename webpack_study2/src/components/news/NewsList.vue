<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
							<h4>{{  item.title }}</h4>
							<p class='mui-ellipsis'>
                                <!-- dateFormate可以自定义时间格式 -->
                                <!-- <span>发表时间：{{ item.releaseTime | dateFormat('YYYY-MM-DD')}}</span> -->
                                <span>发表时间：{{ item.releaseTime | dateFormate}}</span>
                                <span>点击：{{ item.numberOfClicks }}次</span>
                            </p>
						</div>
					</router-link>>
				</li>
			</ul>   
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import request from '../../request'
    export default {
        data() {
            return {
                newsList: [],//新闻数据
            }
        },
        methods: {
            getNewsList(){
                let ref = this;
                request.get('/hello/newList').then((response)=>{
                    console.log(response)
                    ref.newsList=response.data;
                }).catch(()=>{
                    console.log('请求失败');
                    Toast({
                    message: '请求失败!',
                    position: 'middle',
                    duration: 2000
                    });
                })
            }
        },
        created() {
            this.getNewsList();
        },
    }
</script>
<style  scoped>
    li h1 {
            font-size: 14px;
    }
    li .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        /* 弹性盒子 设置文字布局 */
        display: flex;
        justify-content: space-between;
    }
</style>
