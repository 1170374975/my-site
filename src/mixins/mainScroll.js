//混入，回到顶部功能,参数是$refs的值,字符串，例如'mainContainer'
export default function (refValue) {
  return {
    mounted() {
      this.$refs[refValue].addEventListener('scroll', this.handleMainScroll);//添加滚动事件
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);//事件总线，监听 设置主区域滚动事件
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll');
      this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll);
      this.$bus.$off('setMainScroll', this.handleSetMainScroll)
    },
    methods: {
      handleMainScroll() {
        //主区域鼠标滚动时，触发事件总线mainScroll
        this.$bus.$emit('mainScroll', this.$refs[refValue])
      },
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      }
    }
  }
}