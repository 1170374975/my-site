<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container{
  color: @gray;
  text-align: center;
  // 调用自身居中样式，可传参数absolute(默认)/fixed
  .self-center();

  .icon-container{
    font-size: 100px;
  }
}


</style>