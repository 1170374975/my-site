<template>
  <div class="blog-category-container" v-loading="isLoading" >
    <h2>文章分类</h2>
    <!-- BlogCategory -->
    <RightList :list="list" @select="handleSelect"  />
  </div>
</template>

<script>
import RightList from './RightList';
import fetchData from '@/mixins/fetchData.js';
import { getBlogTypes } from '@/api/blog.js';

export default {
  mixins: [fetchData([])],
  components: {
    RightList
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 1;
    },
    list() {
      //计算总的文章数量
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      //把总数，加到数据里
      const result = [
        {name: '全部', id: -1, articleCount: totalArticleCount},
        ...this.data
      ]
      //加上是否选择属性
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
      }))
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes(); 
    },
    handleSelect(e){
      // console.log(this.$route);
      const query = {
        page: 1,
        limit: this.limit
      }

      //跳转到当前的分类id  当前的页容量  newPage的页码
      if(e.id === -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: e.id
          }
        })
      }
    }
  },
  
}
</script>

<style scoped lang="less">
.blog-category-container{
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  h2{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>