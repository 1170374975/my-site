<template>
  <div class="icon-text-container" >
    <div class="item">
      <div class="icon" :style="iconStyle">
        <Icon :type="type" :style="{fontSize: iconSize + 'px'}" />
      </div>
      <span class="text">{{ text }}</span>
    </div>
    <div class="pop" 
      v-if="src ? 1 : 0"
      :style="{bottom: itemHeight + 5 + 'px'}">
      <img  :src="src">
    </div>
    
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon
  },
  props: {
    itemHeight: {
      type: Number,
      default: 30
    },
    iconSize: {
      type: Number,
      default: 18
    },
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      reequired: true
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle() {
      return {
        width: this.iconSize + 20 + 'px', 
        height: this.iconSize + 20 + 'px', 
        lineHeight: this.iconSize + 20 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.icon-text-container{
  position: relative;
  &:hover {
    .pop {
      transform: scaleY(1);
    }
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      text-align: center;
      display: inline-block;
    }
  }
  .pop{
    position: absolute;
    left: 0;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transition: .3s; 
    transform-origin: center bottom; //旋转原点
    img{
      width: 150px;
      height: 150px;
    }
    &::after{
      content: '';
      width: 8px;
      height: 8px;
      background: #fff;
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>