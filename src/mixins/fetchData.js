//mixins 提取重复代码，然后混入到需要用到的组件


//fetchData 获取远程数据相关代码, 开始数据默认为null
export default function(defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true, //是否正在加载中
        data: defaultDataValue //获取到的数据
      }
    },
    async created() {
      //具体的组件中，需要提供一个远程获取数据的方法 fetchData
      this.data = await this.fetchData();
      this.isLoading = false;  //加载完成后，loading不显示
    }
  }
}