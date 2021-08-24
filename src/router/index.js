import vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { titleControl } from '@/utils'; //控制标题
vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})
//导航守卫，设置路由标题
router.afterEach((to, from) => {
  // console.log('to',to, 'from',from);
  if(to.meta.title) {
    titleControl.setRouteTitle(to.meta.title);
  }
})

export default router;