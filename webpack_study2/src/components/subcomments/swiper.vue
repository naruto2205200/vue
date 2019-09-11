<template>
    <div>
        <!-- 轮播图：lunbolist 需要传递 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.id">
                <!-- <img :src="item.headPortrait" alt="" /> -->
                <img src="../../images/0d4ad6027c3e143399bd2188fd61504b.jpg" alt="" :class='{"full":isfull}'>
                <span>{{ item.name }}</span>
            </mt-swipe-item>
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
    <!-- 首页的轮播图和商品详情的轮播图的分歧点：首页的宽高都是100%，详情宽度自适应，高度100% -->
    <!-- 解决：设置一个属性，调用者来设置具体的方案 -->
</template>
<script>
export default {
    props: ["lunbolist","isfull"]
}
</script>
<style scoped>
    .mint-swipe {
        height: 150px;
    }
    .full {
        height: 100%;
    }
    .mint-swipe-item img {
        height: 100%;
    }
</style>