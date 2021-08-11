import vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('@/views/Home');
const Blog = () => import('@/views/Blog');
const About = () => import('@/views/About');
const Project = () => import('@/views/Project');
const Message = () => import('@/views/Message');
const BlogDetail = () => import('@/views/Blog/Detail.vue');

vue.use(VueRouter);

const routes = [
  { name: 'Home', path: '/', component: Home},
  { name: 'Blog', path: '/article', component: Blog},
  { name: 'CategoryBlog', path: '/article/cate/:categoryId', component:Blog },
  { name: 'BlogDetail', path: '/article/:id', component: BlogDetail },
  { name: 'About', path: '/about', component: About},
  { name: 'Project', path: '/project', component: Project},
  { name: 'Message', path: '/message', component: Message}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;