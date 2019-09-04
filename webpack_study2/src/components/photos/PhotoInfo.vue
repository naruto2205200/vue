<template>
    <div class="photoinfo-container">
        <h3>标题</h3>
        <p class="photosubtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <!-- 缩略图 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :key="index"
                :src="item.src" height="100" 
                @click="$preview.open(index, list)">   
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        
        <!-- 内容区 -->
        <div class="content" >
           
        </div>
         <comment :id="id"></comment>
    </div>
</template>
<script>
import comment from '../subcomments/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,   
            list: [
                {
                    src: 'https://placekitten.com/600/400',
                    w: 600,
                    h: 400
                }, 
                {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                },
                {
                    src: 'http://placekitten.com/200/300',
                    w: 200,
                    h: 300
                },
            ],
            slide1: [
                {
                    src: 'https://placekitten.com/600/400',
                    msrc: 'https://placekitten.com/200/300',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://placekitten.com/1200/900',
                    msrc: 'https://placekitten.com/1200/900',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 1200,
                    h: 900
                }
            ]
        }
    },
    methods: {
        
    },
    components: {
        comment
    }
}
</script>
<style >
    .photoinfo-container {
        padding: 3px;
    }
    .photoinfo-container h3 {
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0; 
    }
    .photoinfo-container .photosubtitle {
        display: flex;
        justify-content: space-between;
    }
    .photoinfo-container .thumbs img{
        margin: 1px;
        box-shadow: 0 0 8px #999;
    }
</style>