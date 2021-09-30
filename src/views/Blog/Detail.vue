<template>
<!--  博客详情页  -->
  <div class="detail-container">
    <Layout>
      <div class="main-container" ref="mainContainer" v-loading="isLoading" >
        <BlogDetail :blog="data" />
        <!-- 先加载文章，文章加载完成，再加载评论 -->
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right >
        <div class="right-container" v-loading="isLoading" >
          <BlogTOC :toc="data.toc" v-if="data.toc"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';//混合，获取数据data和isLoading
import mainScroll from '@/mixins/mainScroll.js'; //混入，利用事件总线，监听主区域滚动事件以及回到顶部
import { getBlog } from '@/api/blog.js'; // 请求数据
import Layout from '@/components/Layout'; //三栏布局组件
import BlogDetail from './components/BlogDetail'; //文章内容组件
import BlogComment from './components/BlogComment';
import BlogTOC from './components/BlogTOC'; //文章目录组件
import { titleControl } from '@/utils'; //网页标题控制工具

export default {
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogTOC,
  },
  mixins: [fetchData({}), mainScroll('mainContainer')],
  methods: {
    async fetchData() {
      let resp = await getBlog(this.$route.params.id);
      // console.log('Detail.vue',resp)
      if(!resp) {
        //文章不存在，
        this.$router.push('/404'); //跳转到404页面
        return ;
      }
      if(resp.title) {
        titleControl.setRouteTitle(resp.title);
      }
      return resp;
    },
    // handleScroll() {
    //   //触发事件
    //   this.$bus.$emit('mainScroll', this.$refs.mainContainer)
    // },
    // handleSetMainScroll(scrollTop){
    //   this.$refs.mainContainer.scrollTop = scrollTop;
    // }
  },
  // mounted() {
  //   //模板渲染成功后，添加scroll事件
  //   this.$refs.mainContainer.addEventListener('scroll', this.handleScroll);
  //   //事件总线：监听setMainScroll,
  //   this.$bus.$on('setMainScroll', this.handleSetMainScroll)
  // },
  // beforeDestroy() {
  //   //销毁实例前，
  //   this.$bus.$emit('mainScroll'); //触发事件总线，第二个参数是undefined，表示dom不存在
  //   //移除scroll事件
  //   this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll);
  //   //事件总线：取消监听
  //   this.$bus.$off('setMainScroll', this.handleSetMainScroll)
  // },
  updated() {
    const hash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = hash;
    }, 50)
  }
}
</script>

<style scoped lang="less">
.detail-container{
  width: 100%;
  height: 100%;
}
.main-container{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  //滚动框滚动时，更平滑一些 
  scroll-behavior: smooth;
}
.right-container{
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>