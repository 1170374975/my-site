<template>
  <div class="carousel-item-container" 
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="inner">
      <ImageLoader 
        :src="carousel.bigImg" 
        :placeholder="carousel.midImg" 
        @load="showWords"
        :style="imgStyle"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';

export default {
  components: {
    ImageLoader,
  },
  props: ['carousel'],
  data() {
    return {
      titleWidth: 0, //title的宽度
      descWidth: 0 , //desc文字的宽度
      containerSize: null, //外层容器宽度和高度
      innerSize: null, //内层图片宽度和高度
      mouseX: 0, //鼠标X轴坐标(相对于container)
      mouseY: 0, //鼠标Y轴坐标
    }
  },
  computed: {
    //得到图片的坐标
    imgStyle(){
      if(!this.containerSize || !this.innerSize) {
        return;
      }
      //图片超出的宽度
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      //鼠标位置相对图片的比例（x轴）
      const scaleX = extraWidth / this.containerSize.width;
      const scaleY = extraHeight / this.containerSize.height;
      const left = scaleX * this.mouseX; //超出的图片x轴距离
      const top = scaleY * this.mouseY; //超出的图片Y轴距离 
      return {
        transform: `translate(${-left}px, ${-top}px)`,
        // transition: '0.3s'
      }
    },
    //刚开始图片居中显示
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  mounted(){
    // console.log(this.$refs);
    //获取文字的宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;

    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    //注册事件，改变窗口大小时，重新设置宽高
    window.addEventListener('resize', this.setSize);
  },
  destoryed(){
    //实例销毁时，移除注册事件
    window.removeEventListener('resize', this.setSize);
  },
  methods: {
    //显示文字
    showWords(){
      const title = this.$refs.title;
      const desc = this.$refs.desc;
      // console.log("图片加载结束,显示文字")
      title.style.opacity = 1;
      title.style.width = 0; //宽度设为0
      
      title.clientWidth; //强制渲染浏览器
      title.style.transition = '1s';
      title.style.width = this.titleWidth + 'px';


      desc.style.opacity = 1;
      desc.style.width = 0;
      desc.clientHeight; //获取宽度，可以强制渲染浏览器
      
      desc.style.transition = '2s 1s'; //动画时间2s,延迟1s
      desc.style.width = this.descWidth + 'px';
    },
    // 设置外层容器和图片的宽度、高度
    setSize() {
      // console.log(this.$refs)
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      }
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight
      }
      // console.log(this.containerSize, this.innerSize);
    },
    //鼠标移动事件
    handleMouseMove(e) {
      // console.log('鼠标移动',e.clientX, e.clientY);
      //getBoundingClientRect()用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left; 
      this.mouseY = e.clientY - rect.top;
    },
    //鼠标移出事件
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.carousel-item-container{
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  overflow: hidden;
  
  .carousel-img{
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .title, .desc{
    position: absolute;
    left: 30px;
    // color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, .5),
              0 1px 0 rgba(0, 0, 0, .5),
              -1px 0 0 rgba(0, 0, 0, .5),
              0px -1px 0 rgba(0, 0, 0, .5);
    white-space: nowrap;
    letter-spacing: 3px; //文字间距
    overflow: hidden;
    opacity: 0;
  }
  .title{
    top: calc(50% - 20px);
    font-size: 2em;
  }
  .desc{
    top: calc(50% + 30px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>