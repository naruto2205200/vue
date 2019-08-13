<template>
    <div class="app-container">
        <mt-header fixed title="固定在顶部" ></mt-header>
		<transition>
        	<router-view></router-view>
		</transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
   
</template>
<script>

</script>
<style scoped>
    .app-container {
		padding-top: 40px;
		/* 消除动态生成的x轴方向的横向滚动条 */
		overflow-x: hidden; 
    }
    .mint-header-title {
        font-size: initial;
	}
	/* 动态过渡效果，水平滑动 */
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		/* position: absolute 可以消除下一个view进入时从底下上滑的效果，达到从右水平直接滑入 */
		position: absolute; 
	}
	.v-enter-active,.v-leave-active {
		transition: all 0.5s ease;
	}

</style>
