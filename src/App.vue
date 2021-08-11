<template>
  <div class="app-container">
    <Layout>
      <!-- #left 是slot的具名插槽 -->
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
        
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
    </Layout>
    <ToTop />
    
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
import ToTop from '@/components/ToTop'; //回到顶部按钮

export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.app-container{
  .self-fill(fiexd);
  // background: #000;
  .aside{
    width: 280px;
    height: 100%;
  }
}


</style>
