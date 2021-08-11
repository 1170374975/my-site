//入口文件

import "./mock";//导入模拟数据
import Vue from 'vue';
import App from './App.vue';
import router from './router';  //路由
import './styles/global.less'; //全局样式
// import './api/banner'; //引入axios远程请求数据
import './eventBus'; //事件总线

Vue.config.productionTip = false

//把utils中的消息框，添加到原型上，用的时候，直接this.$showMessage
import { showMessage } from './utils';
Vue.prototype.$showMessage = showMessage;


//注册一个全局自定义指令v-loading
import vLoading from "./directives/loading/index.js";
Vue.directive('loading', vLoading);


//测试博客数据
// import * as blog from '@/api/blog.js';
// blog.getBlogTypes().then(r => console.log('博客分类', r));
// blog.getBlogs().then(r => console.log('博客', r));
// blog.getBlog('1').then(r => console.log('获取单个博客',r));
// blog.getComments('1').then(r => console.log(r));
// blog.postComment({
//   nickname: '昵称',
//   content: '评论内容，纯文本',
//   blogId: '123'
// }).then(r => console.log(r));




new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')



