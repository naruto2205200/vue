<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
							<h4>幸福</h4>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-08-13 09:15:20</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
						<div class="mui-media-body">
							<h4>木屋</h4>
                            <p class='mui-ellipsis'>
                                <span>发表时间：2019-08-13 09:15:20</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
						<div class="mui-media-body">
							<h4>CBD</h4>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019-08-13 09:15:20</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>

			</ul>   
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
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
