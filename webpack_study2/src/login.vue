<template>
    <div>
        <h3>这是一个login组件========{{ msg }}</h3>
        <h2>这是测试</h2>
    </div>
</template>
<script>
export default {
    data() {//组件中的data必须是function
        return {
            msg: 765,
        };
    },
    methods: {
        show() {
            console.log('这是插件里的信息')
        }
    }
}
</script>
<style>

</style>
