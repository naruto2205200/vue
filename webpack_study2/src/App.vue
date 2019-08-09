<template>
    <div>
        <h1>这是App组件</h1>
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- <router-link to='/account'>Account</router-link>
        <router-link to='/goodslist'>GoodsList</router-link>
        <mt-button type="default" @click="show">default</mt-button>
        <mt-button type="primary" size="small" plain >small</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
        <router-view></router-view> -->
        <span>{{ msg }}</span>
    </div>
</template>
<script>
// js需要导入指定的函数
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            toastInstance: null,
            msg: 123
        }
    },
    methods: {
        show(){
            this.toastInstance = Toast({
                message: '提示',
                position: 'top',
                // duration: 5000,
                duration: -1,
                iconClass: 'glyphicon glyphicon-heart',
                className: 'mytoast'
            });            
        },
        getList(){
            this.show()
            setTimeout(()=>{
                this.toastInstance.close();
            },3000)
            //function 会改变作用域 ，setTimeout是windows的对象
            // setTimeout(function(){
            //     this.toastInstance.close();
            // },3000)
        }
    },
    created() {
        // this.getList()
        this.msg=456;
    },
}
</script>
<style>
    
</style>


