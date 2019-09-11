<template>
    <div>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbolist="lunbolist" :isfull="false"></swiper>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>
<script>
import swiper from '../subcomments/swiper.vue'
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
}
</script>
<style scoped>

</style>