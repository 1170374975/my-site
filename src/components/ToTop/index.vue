<template>
  <div class="to-top-container" 
    v-show="show"
    @click="handleClick"
  >
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    //事件总线：监听事件
    this.$bus.$on('mainScroll', this.handleScroll);
  },
  destroyed() {
    //取消监听
    this.$bus.$off('mainScroll', this.handleScroll);
  },
  methods: {
    handleClick() {
      //点击回到顶部
      //事件总线：触发事件setMainScroll
      this.$bus.$emit("setMainScroll", 0); 
    },
    handleScroll(dom) {
      // console.log('dom', dom);
      if(!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500; 
    }
  },
  
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container{
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 99;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: @primary;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
</style>