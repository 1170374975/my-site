<template>
  <div class="show-message-container" 
    :class="type" 
    v-show="isShow" 
  >
    <MessageBox :type="type" :content="content" :size="25" />
  </div>
</template>

<script>
import MessageBox from '@/components/MessageBox'
export default {
  components: {
    MessageBox
  },
  data() {
    return{
      content: 'info消息内容',
      type: 'info',
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },

}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.show-message-container{
  .self-center();
  animation: showMessage 8s;

  @keyframes showMessage {
    0%{
      opacity: 0;
      transform: translate(-50%, -50%) translateY(25px);
    }
    25%{
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    75%{
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    100%{
      opacity: 0;
      transform: translate(-50%, -50%) translateY(-25px);
    }
  }
    
}
</style>