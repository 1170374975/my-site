<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot> 
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right{
    // flex属性 是 flex-grow、flex-shrink、flex-basis三个属性的缩写
    flex: 0 0 auto;//不放大也不缩小
    overflow: hidden;
  }
  .main{
    flex: 1 1 auto; // 放大且缩小
    overflow: hidden;
  }

}
</style>