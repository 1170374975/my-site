<template>
  <div class="test-container">
    <div class="info">
      <MessageBox content="info消息内容" type="info" :size="25" />
    </div>
    <div class="warn">
      <MessageBox content="warn消息内容" type="warn" />
    </div>
    <div class="error">
      <MessageBox content="error消息内容" type="error" :size="25" />
    </div>
    <div class="success">
      <MessageBox content="success消息内容" type="success" />
    </div>
  </div>
</template>

<script>
import MessageBox from './'
export default {
  components: {
    MessageBox
  },
}
</script>

<style scoped lang="less">

.test-container{
  width: 600px;
  height: 400px;
  border: 1px solid;
  margin: 0 auto;
  position: relative;
  
  .info, .warn, .error, .success{
     margin: 40px auto;
     width: 180px;
     height: 40px;
   }
}
</style>