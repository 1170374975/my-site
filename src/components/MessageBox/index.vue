<template>
  <div class="message-box-container" :class="type" >
  <!-- <div class="message-box-container" :class="type"> -->
    <IconText :type="type" :text="content" :iconSize="size" />
  </div>
</template>

<script>
import IconText from '@/components/IconText'
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    type: { //info / error / success / warn
      type: String,
      default: 'info'
    },
    size: {
      type: Number,
      default: 20
    }
  },
  components: {
    IconText
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.message-box-container{ 
  z-index: 999;
  color: #fff;
  padding: 10px 30px;
  line-height: 2;
  border-radius: 5px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, .5);
  white-space: nowrap;
  &.info {
    background-color: @primary;
  }
  &.error {
    background-color: @danger;
  }
  &.warn {
    background-color: @warn;
  }
  &.success {
    background-color: @success;
  }
}
</style>