<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import { debounce } from '@/utils'; //引入函数防抖
import RightList from './RightList';

export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array
    }
  },
  data(){
    return {
      activeAnchor: '', //选中的锚点
    }
  },
  computed: {
    //给拿到的toc，添加select
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      }
      return getTOC(this.toc);
    },
    //根据toc得到它们对应的dom元素数组(左边的dom)
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc){
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    //事件总线（监听主区域滚动事件）
    this.$bus.$on('mainScroll', this.setSelectDebounce);
  },
  destroyed() {
    //实例销毁时，移除监听事件
    this.$bus.$off('mainScroll', this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      // console.log(item.anchor);
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect() {
    //  console.log(11111)
      this.activeAnchor = ''; //由于后续要重新设置，先清空之前的状态
      const range = 200; //设置个top范围
      for (const dom of this.doms) {
        //看下当前这个dom元素是不是被选中
        if (!dom) {
          continue; //不存在，跳出本次循环
        }
        //得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          //在规定的范围
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在规定的范围下方
          return ;
        } else {
          //在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>