<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside" v-if="blog.createDate">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <!-- 分类，点击之后跳转到当前分类 -->
      <RouterLink 
        v-if="blog.category"
        :to="{
          name:'CategoryBlog', 
          params: {
            categoryId: blog.category.id
          }
        }"
      >{{ blog.category.name }}</RouterLink>

    </div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from '@/utils';
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate,
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.aside {
  font-size: 12px;
  color: @gray;
  span, a{
    margin-right: 15px;
  }
}
.markdown-body{
  margin: 2em 0;
}
</style>