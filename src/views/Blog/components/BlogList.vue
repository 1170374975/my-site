<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" 
        :key="item.id"
      >
        <div class="thumb">
          <RouterLink :to="{name: 'BlogDetail', params: {id: item.id}}">
            <img :src="item.thumb" 
              :alt="item.title"
              :title="item.title"
            />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{name: 'BlogDetail', params: {id: item.id}}">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <RouterLink :to="{name: 'CategoryBlog', params: {categoryId: item.category.id}}">{{ item.category.name}}</RouterLink>
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Pager v-if="data.total"
      :current="routeInfo.page" 
      :total="data.total" 
      :limit="routeInfo.limit" 
      :visibleNumber="10" 
      @pageChange="handlePageChange" 
    />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import fetchData from '@/mixins/fetchData.js';//混入组件，获取远程数据
import mainScroll from '@/mixins/mainScroll.js'; //混入组件，事件总线，监听主区域滚动事件以及回到顶部
import { getBlogs } from '@/api/blog.js';  //获取blogList数据
import { formatDate } from '@/utils'; //引入工具库里的处理时间格式方法


export default {
  //混入  获取文章数据，数据格式是对象
  mixins: [fetchData({}), mainScroll("mainContainer")], 
  components: {
    Pager
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit
      }
    },
  },
  // //mixins混入-mainScroll.js，
  // mounted() {
  //   this.$refs.mainContainer.addEventListener('scroll', this.handleScroll);//添加滚动事件
  //   this.$bus.$on('setMainScroll', this.handleSetMainScroll);//事件总线，监听 设置主区域滚动事件

  // },
  // beforeDestroy() {
  //   this.$bus.$emit('mainScroll'); //触发
  //   this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll);//移除滚动事件
  //   this.$bus.$off('setMainScroll', this.handleSetMainScroll);//取消监听
  // },
  methods: {
    formatDate, //时间格式工具方法
    //获取文章列表数据
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      )
    },
    //点击改变页码
    handlePageChange(newPage) {
      // console.log(this.$route)
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      };
      //跳转到当前的分类id，当前的页容量，newPage的页码
      if(this.routeInfo.categoryId === -1) {
        //当前每页分类，显示全部
        // /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: 'Blog',
          query
        })
      } else { //有分类
        // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    },
    // handleScroll() {
    //   //主区域鼠标滚动时，触发事件总线mainScroll
    //   this.$bus.$emit('mainScroll', this.$refs.mainContainer); 
    // },
    // handleSetMainScroll(scrollTop) {
    //   this.$refs.mainContainer.scrollTop = scrollTop;
    // }
  },
  watch: {
    async $route() { //监听$route的变化
      this.isLoading = true;
      //滚动高度为0（回到顶部）
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData(); //重新获取数据
      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.blog-list-container{
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li{
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb{
    flex: 0 0 auto; //不放大、不缩小
    margin-right: 15px;
    img{
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main{
    flex: 1 1 auto; //会放大、会缩小
    h2{
      margin: 0;
    }
  }
  .aside{
    font-size: 12px;
    color: @gray;
    span{
      margin-right: 15px;
    }
  }
  .desc{
    margin: 15px 0;
    font-size: 14px;
  }
}

</style>