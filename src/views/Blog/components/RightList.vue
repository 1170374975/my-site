<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i"
      @click="handleClick(item)"
    >
      <span :class="{active: item.isSelect}"
        
      >{{ item.name }}</span>
      <span v-if="item.articleCount"
        class="aside"
        :class="{active: item.isSelect}"
      >{{ item.articleCount}}篇</span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList', 
  //[{name: 'XXX'},{name: 'XXX', children: [{name:'yyy'},{name:'yyy}]}]
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      if(!item.isSelect){
        this.$emit('select', item)
      }
    }
  }
}
</script>

<style lang="less" scoped>

@import "~@/styles/var.less";

.right-list-container{
  list-style: none;
  padding: 0;
  .right-list-container{
    margin-left: 1em;
  }
  li{
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .aside{
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active{
      color: @warn;
      font-weight: bold;
    }
  }
  
}

</style>