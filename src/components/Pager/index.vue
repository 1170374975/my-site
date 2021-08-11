<template>
<!-- 总页数大于1，才会显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
      <a @click="handleClick(1)" :class="{disabled: current === 1}">|&lt;&lt;</a>
      <a @click="handleClick(current - 1)" :class="{disabled: current === 1}">&lt;&lt;</a>
      <a 
        @click="handleClick(n)"
        v-for="(n, index) in numbers"
        :key="index"
        :class="{active: current === n}"
      >{{ n }}</a>
      
      <a @click="handleClick(current + 1)" :class="{disabled: current === pageNumber}">&gt;&gt;</a>
      <a @click="handleClick(pageNumber)" :class="{disabled: current === pageNumber}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props: {
        //当前页
        current: {
            type: Number,
            default: 1
        },
        //总数量
        total: {
            type: Number,
            default: 0
        },
        //每页显示数量
        limit: {
            type: Number,
            default: 10
        },
        //组件显示几个个数字
        visibleNumber: {
            type: Number,
            default: 10
        }
    },
    computed: {
        //总页数
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        //显示的最小数字
        minNumber() {
            let min = this.current - (this.visibleNumber / 2);
            if(min < 1) {
                min = 1;
            }
            return min;
        },
        //显示的最大数字
        maxNumber() {
            let max = this.minNumber + this.visibleNumber - 1;
            if(max > this.pageNumber) {
                max = this.pageNumber;
            }
            return max;
        },
        numbers() {
            let nums = [];
            for(let i = this.minNumber; i <= this.maxNumber; i++){
                nums.push(i)
            }
            return nums;
        }
    },
    methods: {
        handleClick(newPage){
            if(newPage < 1) {
                newPage = 1;
            }
            if(newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }
            if(newPage === this.current) {
                return;
            }
            //点击时，抛出一个事件（注册事件，相当于@click），使用：@pageChange
            this.$emit('pageChange', newPage)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 6px;
        &.disabled{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            font-weight: bold;
            cursor: text;
        }
    }

}


</style>