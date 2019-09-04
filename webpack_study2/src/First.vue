<template>
    <div class="app-container">
        <mt-header fixed title="移动端APP" ></mt-header>
		<transition>
        	<router-view></router-view>
		</transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/shopcat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/search">
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
		padding-bottom: 50px;
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

	.mui-bar-tab .mui-tab-item-lib.mui-active {
    	color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-lib {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item-lib .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.mint-header {
		z-index: 10;
	}
</style>
