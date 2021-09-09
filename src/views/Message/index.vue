<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea v-if="data" 
      title="留言板" 
      :subTitle="`(${data.total})`" 
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import * as msgApi from '@/api/message.js';
import fetchData from '@/mixins/fetchData.js';//混入
import mainScroll from '@/mixins/mainScroll.js'; //滚动条回到顶部

export default {
  mixins: [fetchData({total: 0, rows: []}), mainScroll('messageContainer')],
  components: {
    MessageArea,
  },
  data() {
    return{
      page: 1,
      limit: 10
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll);//事件总线，监听mainScroll
  },
  destroyed(){
    this.$bus.$off('mainScroll', this.handleScroll);//取消监听
  },
  computed: {
    hasMore() { //是否有更多留言数据
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData(){
      return msgApi.getMessage(this.page, this.limit)
    },
    //点击提交留言内容
    async handleSubmit(data, callback){
      const resp = await msgApi.postMessage(data);
      callback('感谢您的留言');
      this.data.rows.unshift(resp);//把提交数据，添加到数据列表
    },
    //获取下一页留言数据
    async fetchMore() {
      if(!this.hasMore) {
        return ; //没有更多留言
      }
      this.page++;
      this.isLoading = true;
      const resp = await msgApi.getMessage(this.page,this.limit);
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows); //合并数组
      this.isLoading = false
    },
    //滑倒底部自动加载数据
    handleScroll(dom) {
      if(this.isLoading || !dom){
        return;//正在加载更多|| dom销毁
      }
      const range = 100; //在这个范围内，算达到底部
      //到底部的距离 = 当前位置到dom顶部距离 + 视口高度 - dom的实际高度
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range) {
        this.fetchMore();//到达底部，加载更多数据
      }
    }
  }
}
</script>

<style scoped>
.message-container{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  /* 滚动时采用平滑过渡 */
  scroll-behavior: smooth;
}
.message-area-container{
  width: 700px;
  margin: 0 auto;
}
</style>