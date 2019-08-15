<template>
    <div class="comment_container">
        <h3>这是评论区</h3>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="content">

        </textarea>
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>

        <div class="comment_list">
            <div class="comment_item" v-for="item in comments" :key="item.id">
                <div class="comment_item_title">{{item.userName}} 发表时间：{{item.addTime}}</div>
                <div class="comment_item_body">
                    {{item.content==='undefined'?'此用户很懒，什么都没写！':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="getMoreCommentList">加载更多</mt-button>
    </div>
</template>
<script>
import request from '../../request'
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            comments: [],
            pageIndex: 1,
            content: '',
            userName: '张三',
            addTime: '2019-08-15 15:25:20'
        }
    },
    props :['id'],
    methods: {
        getCommentList(){
            request.get('/hello/comments/'+this.id).then((response)=>{
                // this.comments = response.data;
                this.comments = this.comments.concat(response.data);
            }).catch((error)=>{
                Toast({
                    message: '请求失败!',
                    position: 'middle',
                    duration: 2000
                });
            })
        },
        getMoreCommentList(){
            this.pageIndex++;
            this.getCommentList();
        },
        addComment(){
            let data ={
                userName: this.userName,
                addTime: this.addTime,
                content: this.content,
            };
            request.post('/hello/addComment',data).then((response)=>{
                console.log(response.data)
                this.comments.unshift(data)
            })
        }
    },
    created() {
        this.getCommentList();
    },
}
</script>
<style scoped>
    .comment_container h3 {
        font-size: 18px;
    }
    .comment_container textarea {
        margin: 0;
        height: 85px;
        font-size: 14px;
    }
    .comment_container .comment_list {
        margin: 5px 0;
    }
    .comment_container .comment_list .comment_item {
        font-size: 13px;
    }
    .comment_container .comment_list .comment_item .comment_item_title {
        line-height: 30px;
        background-color: #ccc;
    }
    .comment_container .comment_list .comment_item .comment_item_body {
         line-height: 30px;
         text-indent: 2em;
    }
</style>