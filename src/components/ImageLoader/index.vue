<template>
  <div class="image-loader-container">
      <img class="placeholder" :src="placeholder" />
      <img class="origin" 
        :src="src" 
        @load="handleLoad"  
        :style="{opacity: originOpacity, transition: `${duration}ms`}"
      />
  </div>
</template>

<script>
export default {
    data() {
        return {
            originalLoaded: false, //图片是否加载完成
            originalShow: false //原图是否完全显示
        }
    },
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    computed: {
        //原图是否透明
        originOpacity() {
            return this.originalLoaded ? 1 : 0;
        }
    },
    methods: {
        handleLoad(){
            // console.log('图片加载完成');
            this.originalLoaded = true;
            setTimeout(() => {
                this.originalShow = true;
                this.$emit('load');
            }, this.duration)
            
        }
    }
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less'; 
.image-loader-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        .self-fill();
        object-fit: cover;
    }
    .placeholder{
        // 图片模糊，css3属性
        filter: blur(2vw);
    }
}

</style>