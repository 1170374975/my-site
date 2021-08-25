<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe class="about-content"
      v-if="src" 
      :src="src" 
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      srcLoaded: false //地址是否加载完成
    }
  },
  computed: {
    ...mapState('about', {
      src: 'data',  //data更名为src
      loading: 'loading'
    })
  },
  created(){
    this.$store.dispatch('about/fetchAbout');
  },
  
}
</script>

<style scoped>
.about-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.about-content{
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>