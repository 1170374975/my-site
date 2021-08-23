<template>
  <div class="menu-container">
    <!-- exact激活状态是否精确匹配，精确匹配是：'/' 只能匹配 '/'  -->
    <RouterLink :to="{ name: menu.name }"
      :exact="menu.exact"
      v-for="menu in MenuItems" 
      :key="menu.name"
    >
      <IconText :type="menu.icon" :text="menu.title"/>
    </RouterLink>
  </div>
</template>

<script>
import IconText from '@/components/IconText'

export default {
  components: {
    IconText
  },
  data() {
    return{
      MenuItems: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container{
  margin: 20px 0;
  a {
    &.router-link-active {
      // 把@words的颜色加深
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    &:hover{
      color: #fff;
    }
  }
}

</style>