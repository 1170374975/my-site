<template>
  <div class="test-container">
    <ShowMessage :isShow="isShow" content="info消息内容" type="info" :size="25" />
    
    <button @click="handleClick">点击显示info消息内容</button>
  </div>
</template>

<script>
import ShowMessage from './'
export default {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    ShowMessage
  },
  methods: {
    handleClick() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 8000)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.test-container{
  width: 600px;
  height: 300px;
  border: 1px solid;
  margin: 0 auto;
  position: relative;


  
}

</style>