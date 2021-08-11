<template>
  <div class="test">
    <ToTop />
  </div>
</template>

<script>
import ToTop from './';
export default {
  components: {
    ToTop
  }
}
</script>

<style scoped>
.test{
  height: 2000px;
  overflow:scroll;
}
</style>