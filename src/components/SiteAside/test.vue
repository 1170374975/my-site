<template>
  <div class="test-container">
    <SiteAside />
  </div>
  
</template>

<script>
import SiteAside from './';
import '@/styles/global.less';
export default {
    components: {
        SiteAside
    }
}
</script>

<style scoped>
.test-container{
  width: 280px;
  height: 800px;
  background: red;
  margin: 0 auto;
}
</style>