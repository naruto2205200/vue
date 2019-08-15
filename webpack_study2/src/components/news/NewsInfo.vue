<template>
    <div class="newsInfo-container">
        <h3 class="title">{{ newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.releaseTime}}</span>
            <span>点击：{{ newsinfo.numberOfClicks}}</span>
        </p>
        <!-- 内容区 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论子组件 -->
        <comment :id="id"></comment>
    </div>
</template>
<script>
import request from '../../request'
import comment from '../subcomments/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo : null,
        }
    },   
    methods: {
        getNewsInfo() {
            request.get('/hello/newsInfo/'+this.id).then((response)=>{
                this.newsinfo=response.data;
            })
        }
    },
    created() {
        this.getNewsInfo();
    },
    components: {
        //注册子组件的节点
        comment
    }
}
</script>
<style>
    .newsInfo-container {
        padding: 0 4px;
    }
    .title {
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }
    /* v-html 中img 有时会出现布局问题，这里设置宽度100% ，
    然后把style的 scoped 去掉（scoped防止全局污染，如果类名全局唯一是不会有污染的） */
    .content img {
        width: 100%;
    }
</style>