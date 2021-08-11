//vue-cli的相关配置
module.exports = {
  devServer: {
    //服务器代理
    proxy: {
      // "/commercial_api": {
      //   target: "https://www.zhihu.com"
      // }
      "/api": {
        target: "http://test-my-site.com"
      }
    }
  }
}