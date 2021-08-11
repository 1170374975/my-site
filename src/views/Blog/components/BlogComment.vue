<template>
  <div class="blog-comment-container" ref="mainContainer">
    <MessageArea 
      title="评论列表" 
      :subTitle="`(${data.total})`" 
      :list="data.rows" 
      :isListLoading="isLoading" 
      @submit="handleSubmit" 
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import fetchData from '@/mixins/fetchData.js';
import { getComments , postComment } from '@/api/blog.js'; //获取评论信息，提交评论信息

export default {
  mixins: [fetchData({})],
  components: {
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  created () {
    this.$bus.$on('mainScroll', this.handleScroll); //事件总线，监听mainScroll
  },
  destroyed () {
    this.$bus.$off('mainScroll', this.handleScroll); //取消监听
  },
  methods: {
    //获取单页数据
    async fetchData () {
      const res = await getComments(this.$route.params.id, this.page, this.limit);
      // console.log('评论数据', res);
      return res;
    },
    //获取下一页数据
    async fetchMore() {
      if ( this.data.total <= this.data.rows.length ){
        return ; //没有更多评论了
      } 
      this.page++;
      this.rows = this.data.rows;
      this.isLoading = true;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      // console.log('rows',this.data.rows)
      this.isLoading = false;
    },
    //提交评论
    async handleSubmit(formData, callback) {
      // console.log('formData',formData);
      const res = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      // console.log(res);
      this.data.rows.unshift(res);//把提交的数据，插入到评论数据里
      this.data.total++;
      callback("评论成功"); //调用子组件的回调函数
    },
    //滑到底部自动加载数据
    handleScroll(dom) {
      if( this.isLoading || !dom ){
        return; //目前正在加载更多|| 或dom销毁
      }
      const range = 100;//在这个范围内，算到达底部
      //当前位置到dom顶部距离 + 视口高度 - dom的实际高度 = 到底部的距离
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range) {
        this.fetchMore();//到达底部，开始加载下一页数据
      }
    }
  },
  
}
</script>

<style>
.blog-comment-container{
  margin: 30px 0;
}
</style>