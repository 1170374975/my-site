<template>
  <div class="project-container" v-loading='loading'>
      <Empty v-if="!data.length && !loading" />
      <a v-for="item in data"
        :key="item.id"
        :href="item.url? item.url : `javascript:alert('该项目无法通过外网访问')`" 
        class="project-item"
        :target="item.url ? '_blank': '_self'"
      >
        <img v-if="item.thumb"
          :src="item.thumb" 
          class="thumb"
        >
        <div class="info">
          <h2>{{ item.name }}</h2>
          <p v-for="(desc, i) in item.description"
            :key="i"
          >{{ desc }}</p>
        </div>
      </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Empty from '@/components/Empty';

export default {
  components: {
    Empty
  },
  computed: {
    ...mapState('project', ['loading', 'data'])
  },
  created() {
    this.$store.dispatch('project/fetchProject');
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.project-container{
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  scroll-behavior: smooth; //平稳的滚动
  position: relative;
}
.project-item{
   display: flex;
   padding: 20px;
   margin-bottom: 20px;
   transition: .5s;
  &:hover{
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info{
    line-height: 1.7;
    flex: 1 1 auto;
    h2{
      margin: 0;
    }
  }
  .github{
    font-size: 14px;
    color: @primary;
  }
}

</style>