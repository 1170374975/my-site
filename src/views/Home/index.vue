<template>
  <div 
    class="home-container" 
    ref="container" 
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul class="carousel-container"
      :style={marginTop}
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" 
      @click="switchTo(index - 1)"
      v-show="index > 0"
    >
      <Icon type="arrowUp"/>
    </div>
    <div class="icon icon-down"
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
    >
      <Icon type="arrowDown"  />
    </div>
    <ul class="indicator">
      <li v-for="(item, i) in data" 
        :key="item.id"
        :class="{active: i === index}"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
  
</template>

<script>
import CarouselItem from './Carouselitem';
// import { getBanners } from '@/api/banner.js';
import Icon from '@/components/Icon';
import { mapState } from 'vuex'; //首页标语存放在仓库

export default {
  // mixins: [fetchData([])], //组件混入，获取远程数据，传入默认值
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几项
      containerHeight: 0, //整个容器的高度
      switching: false //是否正在切换中
    }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + 'px';
    },
    ...mapState('banner', ['loading', 'data'])
  },
  created() {
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted() {
    // console.log(this.$refs.container.clientHeight);
    //获取容器高度
    this.containerHeight = this.$refs.container.clientHeight;
    //resize 事件会在窗口或框架被调整大小时发生。
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(e.deltaY);
      if(this.switching) {
        //正在切换中
        return;
      }
      //e.deltaY正值向下滚动，负值向上滚动
      if(e.deltaY < 0 && this.index > 0) {
        this.index--;
        this.switching = true;
        // console.log('向上滚动')
      } else if(e.deltaY > 0 && this.index < this.data.length - 1) {
        this.index++;
        this.switching = true;
        // console.log('向下滚动')
      }
    },
    //过渡结束（切换结束）
    handleTransitionEnd() {
      this.switching = false;
    },
    //当窗口改变时，重新获取容器高度
    handleResize() {
      // console.log('窗口改变le')
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.home-container{
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  // //测试
  // margin: 100px auto;
  // width: 600px;
  // height: 400px;
  // border: 2px solid green;
  // overflow: visible;

  ul{
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .carousel-container{
    width: 100%;
    height: 100%;
    // transition: 500ms;
    transition-duration: 500ms;
    li{
      width: 100%;
      height: 100%;
    }
  }
  .icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    @gap: 35px;
    @jump: 5px;
    
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @keyframes jump-up {
      0%{
        transform: translateY(@jump);
      }
      50%{
        transform: translateY(-@jump);
      }
      100%{
        transform: translateY(@jump)
      }
    }
    @keyframes jump-down{
      0%{
        transform: translateY(-@jump);
      }
      50%{
        transform: translateY(@jump);
      }
      100%{
        transform: translateY(-@jump);
      }
    }
  }
  .indicator{
    position: absolute;
    top: 50%;
    transform: translate(-50%);
    right: 20px;
    li{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      
      &.active{
        background: #fff;
      }
    }
  }

}
</style>