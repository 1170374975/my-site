<template>
  <div class="site-aside-container">
    <div v-if="data" class="avatar">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </div>

    <Menu />
    <Contact />

    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
  
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact'
import { mapState } from 'vuex';

export default {
  components: {
    Avatar,
    Menu,
    Contact
  },
  computed: {
    ...mapState('setting', ['data'])
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

@itemHeight: 30px;
.site-aside-container{
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  color: @gray;
  font-size: 14px;
  .avatar{
    width: 60%;
    margin: 0 auto;
    .title{
      font-size: 1.2em;
      color: #fff;
      text-align: center;
    }
  }
  .menu{
    margin: 20px 0;
    // border: 1px solid green;
    // margin: 10px;
    .menu-item-container{
      width: 100%;
      height: @itemHeight;
      line-height: @itemHeight;
    }
  }
  .contact{
    border: 1px solid yellow;
    margin: 10px;
  }
  
  .footer{
    color: @words;
    font-size: 12px;
    text-align: center;
  }
}
</style>