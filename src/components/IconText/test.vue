<template>
  <div class="test-container">
      <IconText type="home" text="首页"/>
      <IconText type="blog" text="文章"/>
      <IconText type="about" text="关于我"/>
      <IconText type="code" text="项目&效果"/>
      <IconText type="chat" text="留言板" />

      <IconText type="github" text="妮儿" />
      <IconText type="mail" text="1170374975@qq.com" />
      <IconText type="qq" text="1170374975" :src="src" />
      <IconText type="weixin" text="1170374975ni" :src="src" />
    
  </div>
  
</template>

<script>
import IconText from './';
import "@/styles/global.less";

export default {
  components: {
    IconText
  },
  data() {
    return {
      src: 'http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png'
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

@itemHeight: 30px;
.test-container{
  width: 240px;
  // height: 300px;
  line-height: @itemHeight;
  // border: 1px solid red;
  // padding: 200px 0 0 0;
  // color: @gray;
  // background: #000;
  font-size: 14px;
  .Menu-item-container{
    width: 100%;
    height: @itemHeight;
    line-height: @itemHeight;
    border: 1px solid #fff;

  }
  
}
</style>