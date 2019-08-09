<template>
    <div>
        <h1>这是home</h1>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.id">
                <img :src="item.headPortrait" alt="" />
                <!-- <img src="../../images/0d4ad6027c3e143399bd2188fd61504b.jpg" alt=""> -->
            </mt-swipe-item>
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: 'home',
    data(){
        return {
            lunbolist: []    
        }
    },
    created() {
        this.getSwipeList()
    },
    methods: {
        getSwipeList() {
            this.$http.get('http://localhost:8080/hello/getlunbo').then(result => {
                console.log(result.body)
                this.lunbolist=result.body;
            }).catch(error=>{
                Toast('请求失败')
                console.error(error)
            })
        }
    },
    components: {

    },
   
}
</script>
<style scope>
    .mint-swipe {
        height: 200px;
    }
    /* .mint-swipe-item:nth-child(1) {
        background-color: red;
    }
    .mint-swipe-item:nth-child(2) {
        background-color: green;
    }
    .mint-swipe-item:nth-child(3) {
        background-color: blue;
    } */
</style>
